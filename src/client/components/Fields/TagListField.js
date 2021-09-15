//vendor imports
import React, { useState } from 'react'
import ChipInput from 'material-ui-chip-input'

export default function TagListField({ name, value, label }) {
  const safeValue = Array.isArray(value) ? value : []
  const [ values, setValues ] = useState(safeValue)
  const update = (chips) => setValues(chips)

  const inputs = values.map((value, key) => (
    <input key={key} type="hidden" name={`${name}[]`} value={value} />
  ))

  return (
    <>
      <ChipInput label={label} defaultValue={safeValue} onChange={update} />
      {inputs}
    </>
  )
}