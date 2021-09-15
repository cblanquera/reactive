//vendor imports
import React, { useState } from 'react'
//vendor components
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
//vendor icons
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'
import FileIcon from '@material-ui/icons/InsertDriveFile'
//local imports
import { Table, Tfoot, Trow, Tcol } from '../Table'

const images = [ 'jpg', 'jpeg', 'pjpeg', 'svg', 'png', 'ico', 'gif' ]

function getExtension(data) {
  if (Array.isArray(data)) {
    return data[0].split('.').pop()
  }

  return data.split('.').pop()
}

function FileRow({ name, data, index, files, set }) {
  const remove = () => {
    const newFiles = [ ...files ]
    newFiles[index] = false
    set(newFiles)
  }

  const file = Array.isArray(data)? data[1]: data
  const filename = Array.isArray(data)? data[0]: data

  const preview = images.includes(getExtension(data))
    ? <img src={file} width={70} height={70} />
    : <FileIcon />
  
  return (
    <Trow>
      <Tcol>{preview}</Tcol>
      <Tcol>{filename}</Tcol>
      <Tcol>
        <IconButton size="small" onClick={remove}>
          <CloseIcon color="error" />
        </IconButton>
        <input type="hidden" name={name} value={file} />
      </Tcol>
    </Trow>
  )
}

export default function FileField(props) {
  //expand props
  const { name, value, label, addLabel, multiple, limit, margin } = props
  const safeFiles = Array.isArray(value) ? value : [value]
  const safeLimit = !isNaN(limit) ? limit : multiple ? 0: 1 
  const safeMultiple = safeLimit !== 1
  const uploadRef = React.createRef()
  const path = safeMultiple? `${name}[]`: name
  const fileProps = {}
  if (safeMultiple) fileProps.multiple = true
  if (props.accept) fileProps.accept = props.accept
  //states
  const [ files, set ] = useState(safeFiles)
  //actions
  const add = () => {
    if (!uploadRef.current 
      || !uploadRef.current.files 
      || !uploadRef.current.files[0]
    ) {
      return
    }

    const newFiles = []
    for (const file of uploadRef.current.files) {
      const reader = new FileReader()
      reader.onload = () => {
        newFiles.push([ file.name, reader.result ])
        if (newFiles.length === uploadRef.current.files.length) {
          set(files.concat(newFiles))
        }
      }
      reader.readAsDataURL(file)
    }
  }

  if (safeLimit && files.length > safeLimit) {
    set(files.filter(file => file !== false).slice(0, safeLimit))
  }

  const rows = files.map(
    (file, key) => file !== false && <FileRow 
      key={key}
      name={path} 
      data={file} 
      files={files} 
      set={set} 
      index={key}
      tbody
    />
  )

  const filtered = files.filter(file => file !== false)
  const shrink = !!filtered.length
  const exceeded = filtered.length >= safeLimit
  

  return (
    <FormControl margin={margin}>
      {label && <InputLabel shrink={shrink}>
        {label}
      </InputLabel>}
      <Table style={{ marginTop: shrink ? 30 : 50 }}>
        {rows}
        {!exceeded && <Tfoot colSpan={3}>
          <Button 
            component="label"
            variant="outlined" 
            color="secondary"
            startIcon={<AddIcon />}
          >
            {addLabel || 'Add File'}
            <input 
              ref={uploadRef} 
              type="file" 
              onChange={add} 
              {...fileProps}
              hidden 
            />
          </Button>
        </Tfoot>}
      </Table>
    </FormControl>
  )
}