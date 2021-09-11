import React from 'react'
import state from '../state'

export default function TableHead(props) {
  const style = state.withReact.getStyle('table.head')
  if ('sticky-top' in props) {
    style.position = 'sticky'
    style.zIndex = 3
    style.top = 0
  } 
  if ('sticky-left' in props) {
    style.position = 'sticky'
    style.zIndex = 4
    style.left = 0
  } 
  if ('sticky-right' in props) {
    style.position = 'sticky'
    style.zIndex = 4
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
  return <th style={style} {...extras}>{props.children}</th>
}