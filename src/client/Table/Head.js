//vendor imports
import React from 'react'
//self imports
import styles from './styles'

//main component
export default function TableHead(props) {
  //classes
  const classNames = props.classes || styles()
  //styles
  const style = {}
  if ('stickyTop' in props) {
    style.position = 'sticky'
    style.zIndex = 3
    style.top = 0
  } 
  if ('stickyLeft' in props) {
    style.position = 'sticky'
    style.zIndex = 4
    style.left = 0
  } 
  if ('stickyRight' in props) {
    style.position = 'sticky'
    style.zIndex = 4
    style.right = 0
  }
  if ('noWrap' in props) {
    style.whiteSpace = 'nowrap'
  }
  if (typeof props.style === 'object') {
    Object.assign(style, props.style)
  }

  //props
  const extras = {}
  if ('rowspan' in props) {
    extras.rowSpan = props.rowspan
  }
  if ('colspan' in props) {
    extras.colSpan = props.colspan
  }
  if ('rowSpan' in props) {
    extras.rowSpan = props.rowSpan
  }
  if ('colSpan' in props) {
    extras.colSpan = props.colSpan
  }
  return (
    <th 
      className={classNames.tableHead} 
      style={style} 
      {...extras}
    >
      {props.children}
    </th>
  )
}