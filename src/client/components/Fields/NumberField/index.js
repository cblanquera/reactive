//vendor imports
import React, { useState } from 'react'
import PropTypes from 'prop-types'
//vendor components
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
//self imports
import NumberInput from './NumberInput'


//main component
export default function NumberField(props) {
  const { label, name, value, margin, ...more } = props
  const [ shrink, shouldShrink ] = useState(
    value && !!String(value).length
  )

  return (
    <FormControl margin={margin}>
      {label && <InputLabel shrink={shrink} htmlFor={name}>
        {label}
      </InputLabel>}
      
      <Input 
        name={name}
        value={value}
        inputComponent={NumberInput}
        inputProps={{...more, shrink: shouldShrink}}
      />
    </FormControl>
  )
}

NumberField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  format: PropTypes.string,
  separator: PropTypes.string,
  decSeparator: PropTypes.string,
  decimals: PropTypes.number,
  abs: PropTypes.bool,
  zeros: PropTypes.bool
}