import React from 'react'
import state from '../state'

function Rule({width}) {
  const style = {
    border: 0,
    margin: 0,
    width: width
  }
  return <hr style={style} />
}

export default function TableCol(props) {
  const style = state.withReact.getStyle('table.col')
  if ('sticky-top' in props) {
    style.position = 'sticky'
    style.zIndex = 1
    style.top = 0
  } 
  if ('sticky-left' in props) {
    style.position = 'sticky'
    style.zIndex = 2
    style.left = 0
  }
  if ('sticky-right' in props) {
    style.position = 'sticky'
    style.zIndex = 2
    style.right = 0
  }

  if ('nowrap' in props) {
    style.whiteSpace = 'nowrap'
  }

  Object.assign(style, props.style || {})

  const extras = {}
  if ('rowspan' in props) {
    extras.rowspan = props.rowspan
  }
  if ('colspan' in props) {
    extras.colspan = props.colspan
  }

  let rule = null
  if ('wrap-1' in props) {
    rule = <Rule width={100} />
  } else if ('wrap-2' in props) {
    rule = <Rule width={200} />
  } else if ('wrap-3' in props) {
    rule = <Rule width={300} />
  } else if ('wrap-4' in props) {
    rule = <Rule width={400} />
  } else if ('wrap-5' in props) {
    rule = <Rule width={500} />
  } 
  return (
    <td style={style} {...extras}>
      {props.children}
      {rule}
    </td>
  )
}