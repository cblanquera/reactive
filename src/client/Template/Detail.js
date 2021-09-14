//vendor imports
import React, { useState, useEffect } from 'react'
//vendor components
import Button from '@material-ui/core/Button'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
//vendor icons
import EditIcon from '@material-ui/icons/Edit'
import CloseIcon from '@material-ui/icons/Close'
import FileCopyIcon from '@material-ui/icons/FileCopy'
//local imports
import Screen from '../Screen'
import { Table, Thead } from '../Table'
//self imports
import Form from './Form'
import SearchRows from './Search/Rows'
import Metadata from './Detail/Metadata'
import store from './store'
import styles from './styles'

//main components
export default function TemplateDetail(props) {
  //expand props
  const { id, backward, forward, notify } = props
  //setup states
  const [ row, setRow ] = useState(false)
  const [ tabIndex, setTab ] = React.useState(0)
  //setup actions
  const tab = (event, index) => setTab(index)
  const prev = () => backward(1)
  const form = () => forward(
    <Form forward={forward} backward={backward} />
  )
  const detail = (id) => () => forward(
    <TemplateDetail 
      id={id} 
      forward={forward} 
      backward={backward} 
      notify={notify} 
    />
  )

  //only on first mount
  useEffect(() => {
    setTimeout(() => {
      store.get(id).then(res => {
        if (res.error) {
          prev()
          return notify(`Error: ${res.message}`, 'error')
        }
        setRow(res.results)
      })
    }, 2000)
  }, [])
  const classes = styles()
  //render
  return (
    <>
      <Screen.Head title="Template Detail" onClick={prev} />
      <Screen.Body withFoot2>
        <Tabs onChange={tab} value={tabIndex}>
          <Tab label="Information" />
          <Tab label="Friends" />
        </Tabs>
        {tabIndex === 0 && <Metadata row={row} />}
        {tabIndex === 1 && (
          <Table>
            <Thead sticky-top sticky-left>ID</Thead>
            <Thead sticky-top>Image</Thead>
            <Thead sticky-top>Name</Thead>
            <Thead sticky-top>Bio</Thead>
            <Thead sticky-top>Active</Thead>
            <Thead sticky-top>Created</Thead>
            <Thead sticky-top>Updated</Thead>
            <Thead sticky-top sticky-right>&nbsp;</Thead>
            <SearchRows tbody rows={row.friends} detail={detail} />
          </Table>
        )}
      </Screen.Body>
      <Screen.Foot>
        <Button 
          className={classes.detailEdit} 
          variant="contained" 
          color="secondary"
          startIcon={<EditIcon />}
          onClick={form}
        >
          Edit
        </Button>
        <Button 
          className={classes.detailCopy} 
          variant="outlined" 
          color="secondary"
          startIcon={<FileCopyIcon />}
        >
          Copy
        </Button>
        <Button 
          className={classes.detailRemove} 
          variant="outlined" 
          color="primary"
          startIcon={<CloseIcon />}
        >
          Remove
        </Button>
      </Screen.Foot>
    </>
  )
}