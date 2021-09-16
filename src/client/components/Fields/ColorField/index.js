//vendor imports
import React, { useState } from 'react'
//vendor components
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
//self imports
import ColorPicker from './ColorPicker'

export default function ColorField({ name, value, label, margin }) {
  const [ shrink, shouldShrink ] = useState(true)

  return (
    <FormControl margin={margin}>
      {label && <InputLabel shrink={shrink} htmlFor={name}>
        {label}
      </InputLabel>}
      <ColorPicker 
        name={name} 
        defaultValue={value} 
        shrink={shouldShrink} 
      />
    </FormControl>
  )
}