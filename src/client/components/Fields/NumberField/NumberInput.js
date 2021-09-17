//vendor imports
import React, { useState, useEffect } from 'react'
//self imports
import { getFormatsFromInput, getFormats, padDecimals } from './helpers'

export default function NumberInput(props) {
  //expand props
  const { 
    name,    value,    min, max,      separator, 
    decimal, decimals, abs, inputRef, shrink,
    ...other 
  } = props
  
  const ref = React.createRef()
  const options = {
    min,     max,       separator, 
    decimal, decimals,  abs,
  }
  const initial = getFormats(String(value || ''), options)
  //states
  const [ focused, shouldFocus ] = useState(false)
  const [ hiddenValue, setHiddenValue ] = useState(initial.value)
  const [ displayValue, setDisplayValue ] = useState(initial.display)
  const [ cursor, setCursor ] = useState(0)
  //actions
  const format = (e) => {
    const input = e.target
    const pointer = input.selectionStart
    const { value, display } = getFormatsFromInput(input, options)

    if (hiddenValue !== value) {
      setHiddenValue(value)
    }
    
    if (displayValue !== display) {
      if (display.length > displayValue.length) {
        setCursor(pointer + (display.length - displayValue.length) - 1)
      } else if (display.length < displayValue.length) {
        setCursor(pointer - (displayValue.length - display.length) + 1)
      } else {
        setCursor(pointer)
      }
      
      setDisplayValue(display)
    }
  }

  const defocus = () => {
    shouldFocus(false)
    setDisplayValue(padDecimals(displayValue, decimal, decimals))
  }

  const focus = () => shouldFocus(true)

  useEffect(() => {
    inputRef(ref.current || null)
    shrink(focused || !!displayValue.length)
    if (cursor >= 0) {
      ref.current.selectionStart = cursor
      ref.current.selectionEnd = cursor
    } 
  })

  //render
  return (
    <>
      <input name={name} type="hidden" value={hiddenValue} />
      <input 
        {...other} 
        ref={ref} 
        onChange={format} 
        onFocus={focus}
        onBlur={defocus} 
        value={displayValue} 
      />
    </>
  )
}