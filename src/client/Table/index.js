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

function getHead(children) {
  const head = []
  for (const child of children) {
    if (Array.isArray(child)) {
      head.push.apply(head, getHead(child))
    } else if (child.type && child.type.name === 'TableHead') {
      head.push(child)
    } else if ('thead' in child.props) {
      head.push(child)
    }
  }

  return head
}

function getBody(children) {
  const body = []
  for (const child of children) {
    if (Array.isArray(child)) {
      body.push.apply(head, getHead(child))
    } else if (child.type && child.type.name === 'TableRow') {
      body.push(child)
    } else if ('tbody' in child.props) {
      body.push(child)
    }
  }

  return body
}

export default function Table(props) {
  const classes = useStyles()
  
  const head = getHead(props.children || [])
  const body = getBody(props.children || [])

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