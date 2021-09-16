//vendor components
import React from 'react'
import PropTypes from 'prop-types'
//self imports
import styles from './styles'

//main component
export default function TableRow(props) {
  const classes = styles()
  
  const className = props.stripe
    ? classes.tableRowStriped
    : classes.tableRow

  return <tr className={className} style={props.style}>
    {props.children}
  </tr>
}

TableRow.propTypes = {
  stripe: PropTypes.bool
}

TableRow.defaultProps = {
  stripe: false
}