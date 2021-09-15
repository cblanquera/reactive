//vendor components
import React from 'react'
//self imports
import styles from './styles'

//main component
export default function TableRow(props) {
  const classes = styles()
  
  const className = 'stripe' in props && props.stripe
    ? classes.tableRowStriped
    : classes.tableRow

  return <tr className={className}>{props.children}</tr>
}