//vendor imports
import React, { useState } from 'react'
//vendor components
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
//vendor icons
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'
//self imports
import styles from './styles'

function PairField({ classes, name, value, index, pairs, set }) {
  const update = () => {
    if (!nameRef.current || !valueRef.current) {
      return
    }

    const newPairs = [ ...pairs ]
    const nameValue = nameRef.current.querySelector('input').value
    const valueValue = valueRef.current.querySelector('input').value
    newPairs[index] = [ nameValue, valueValue ]
    set(newPairs)
  }

  const remove = () => {
    const newPairs = [ ...pairs ]
    newPairs[index] = false
    set(newPairs)
  }

  const nameRef = React.createRef()
  const valueRef = React.createRef()

  return (
    <div className={classes.fieldMetadataDisplay}>
      <TextField 
        ref={nameRef}
        className={classes.fieldMetadataDisplayKey}
        value={name}
        onChange={update}
        required 
      />
      <TextField 
        ref={valueRef}
        className={classes.fieldMetadataDisplayValue}
        value={value}
        onChange={update}
        required 
      />
      <IconButton 
        className={classes.fieldMetadataRemove}
        size="small" 
        onClick={remove}
      >
        <CloseIcon color="error" />
      </IconButton>
    </div>
  )
}

export default function MetadataField(props) {
  const { name, value, label, addLabel, margin } = props
  //make sure we have an object
  const safeValue = value && typeof value === 'object' ? value : {}
  //change from object to array pairs
  const safePairs = Object.keys(safeValue).map(name => {
    return [ name, safeValue[name] ]
  })
  //states
  const [ pairs, setPairs ] = useState(safePairs)
  //actions
  const add = () => setPairs(pairs.concat([['', '']]))
  //partials
  const classes = styles()
  const displays = pairs.map((pair, key) => (
    Array.isArray(pair) ? <PairField 
      key={key} 
      classes={classes} 
      name={pair[0]} 
      value={pair[1]} 
      index={key}
      pairs={pairs}
      set={setPairs}
    /> : null
  ))

  const inputs = pairs.map((pair, key) => (
    Array.isArray(pair) 
      && typeof pair[0] === 'string' 
      && pair[0].length 
    ? (
      <input 
        key={key} 
        type="hidden" 
        name={`${name}[${pair[0]}]`} 
        value={pair[1]} 
      />
    ) : null
  ))
  const shrink = pairs.filter(pair => Array.isArray(pair)).length !== 0
  //render
  return (
    <FormControl margin={margin}>
      {label && <InputLabel shrink={shrink}>
        {label}
      </InputLabel>}
      {displays}
      {inputs}
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