import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  tableRow: {
    backgroundColor: theme.palette.background.paper
  },
  tableRowStriped: {
    backgroundColor: theme.palette.background.accent
  }
}))

export default function TableRow(props) {
  const classes = useStyles()
  
  const className = 'stripe' in props && props.stripe
    ? classes.tableRowStriped
    : classes.tableRow

  return <tr className={className}>{props.children}</tr>
}