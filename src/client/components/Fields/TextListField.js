//vendor imports
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
//vendor components
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
//vendor icons
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'

const styles = makeStyles((theme) => ({
  textListDisplay: {
    marginTop: 16
  },
  textListDisplayInput: {
    width: 'calc(100% - 30px)'
  },
  textListRemove: {
    marginTop: 2
  }
}))

function ItemField({ classes, name, value, index, values, set }) {
  const update = () => {
    if (!ref.current) {
      return
    }

    const newValues = [ ...values ]
    newValues[index] = ref.current.querySelector('input').value
    set(newValues)
  }

  const remove = () => {
    const newValues = [ ...values ]
    newValues[index] = false
    set(newValues)
  }

  const ref = React.createRef()

  return (
    <div className={classes.textListDisplay}>
      <TextField 
        ref={ref}
        className={classes.textListDisplayInput}
        name={name}
        value={value}
        onChange={update}
        required 
      />
      <IconButton 
        className={classes.textListRemove}
        size="small" 
        onClick={remove}
      >
        <CloseIcon color="error" />
      </IconButton>
    </div>
  )
}

export default function TextListField(props) {
  const { name, value, label, addLabel, margin } = props
  //make sure we have an array
  const safeValue = Array.isArray(value) ? value : []
  //states
  const [ values, setValues ] = useState(safeValue)
  //actions
  const add = () => setValues(values.concat(['']))
  //partials
  const classes = styles()
  const displays = values.map((value, key) => (
    typeof value === 'string' ? <ItemField 
      key={key} 
      classes={classes} 
      name={`${name}[]`} 
      value={value} 
      index={key}
      values={values}
      set={setValues}
    /> : null
  ))

  const shrink = values.filter(
    value => typeof value === 'string'
  ).length !== 0
  //render
  return (
    <FormControl margin={margin}>
      {label && <InputLabel shrink={shrink}>
        {label}
      </InputLabel>}
      {displays}
      <Button 
        variant="outlined" 
        color="secondary"
        startIcon={<AddIcon />}
        onClick={add}
        style={{ marginTop: shrink ? 16: 50 }}
      >
        {addLabel || 'Add'}
      </Button>
    </FormControl>
  )
}