//vendor imports
import React from 'react'
import PropTypes from 'prop-types'
import Inputmask from 'inputmask'
//vendor components
import TextField from '@material-ui/core/TextField'

function MaskInput({ inputRef, mask, ...other }) {
  const im = new Inputmask(mask)

  const ref = (ref) => {
    if (ref) {
      im.mask(ref)
      inputRef(ref)
    }
  }

  return (
    <input {...other} ref={ref} />
  )
}

export default function MaskField({ name, value, label, mask }) {
  return (
    <TextField
      label={label}
      value={value}
      name={name}
      inputProps={{ mask }}
      InputProps={{ inputComponent: MaskInput }}
    />
  )
}

MaskField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
  label: PropTypes.string,
  mask: PropTypes.string.isRequired
}