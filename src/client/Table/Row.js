import React from 'react'
import state from '../state'

export default function TableRow(props) {
  const styles = state.withReact.getStyles(
    'table.row', 
    'table.row.stripe'
  )
  
  const style = 'stripe' in props 
    ? styles['table.row.stripe'] 
    : styles['table.row']

  Object.assign(style, props.style || {})
  return <tr style={style}>{props.children}</tr>
}