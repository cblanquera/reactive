import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Thead from './Head'
import Tcol from './Col'
import Trow from './Row'

const useStyles = makeStyles((theme) => ({
  table: {
    borderSpacing: 0,
    width: '100%'
  },
  tableScroll: {
    overflow: 'auto',
    flexGrow: 1,
    width: '100%'
  }
}))

export default function Table(props) {
  const classes = useStyles()
  
  const head = []
  const body = []
  for (const child of props.children) {
    if (child.type.name === 'TableHead') {
      head.push(child)
    } else if (child.type.name === 'TableRow') {
      body.push(child)
    }
  }

  return (
    <div className={classes.tableScroll}>
      <table className={classes.table}>
        <thead><tr>{head}</tr></thead>
        <tbody>{body}</tbody>
      </table>
    </div>
  )
}

export {
  Table,
  Thead,
  Tcol,
  Trow
}