//vendor imports
import React from 'react'
//self imports
import Thead from './Head'
import Tfoot from './Foot'
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
    } else if (child.props && 'thead' in child.props) {
      head.push(child)
    }
  }

  return head
}

function getFoot(children) {
  const foot = []
  for (const child of children) {
    if (Array.isArray(child)) {
      foot.push.apply(foot, getFoot(child))
    } else if (child.type && child.type.name === 'TableFoot') {
      foot.push(child)
    } else if (child.props && 'tfoot' in child.props) {
      foot.push(child)
    }
  }

  return foot
}

function getBody(children) {
  const body = []
  for (const child of children) {
    if (Array.isArray(child)) {
      body.push.apply(body, getBody(child))
    } else if (child.type && child.type.name === 'TableRow') {
      body.push(child)
    } else if (child.props && 'tbody' in child.props) {
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
  const foot = getFoot(props.children || [])

  return (
    <div className={classes.tableScroll} style={props.style}>
      <table className={classes.table}>
        {head && <thead><tr>{head}</tr></thead>}
        {body && <tbody>{body}</tbody>}
        {foot && <tfoot><tr>{foot}</tr></tfoot>}
      </table>
    </div>
  )
}

export {
  Table,
  Thead,
  Tfoot,
  Tcol,
  Trow
}