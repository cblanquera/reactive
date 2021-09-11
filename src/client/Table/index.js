import React from 'react'

import state from '../state'

import Thead from './Head'
import Tcol from './Col'
import Trow from './Row'


export default function Table(props) {
  const style = state.withReact.getStyle('table')
  
  const head = []
  const body = []
  for (const child of props.children) {
    if (child.type.name === 'TableHead') {
      head.push(child)
    } else if (child.type.name === 'TableRow') {
      body.push(child)
    }
  }

  Object.assign(style, props.style || {})
  return (
    <table style={style}>
      <thead><tr>{head}</tr></thead>
      <tbody>{body}</tbody>
    </table>
  )
}

export {
  Table,
  Thead,
  Tcol,
  Trow
}