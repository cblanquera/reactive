//vendor imports
import React from 'react'
//self imports
import Thead from './Head'
import Tcol from './Col'
import Trow from './Row'
import styles from './styles'

//helpers
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

//main component
export default function Table(props) {
  const classes = styles()
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