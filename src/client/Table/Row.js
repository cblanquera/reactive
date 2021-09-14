//vendor components
import React from 'react'
//self imports
import styles from './styles'

//main component
export default function TableRow(props) {
  const classNames = props.classes || styles()
  
  const className = 'stripe' in props && props.stripe
    ? classNames.tableRowStriped
    : classNames.tableRow

  return <tr className={className}>{props.children}</tr>
}