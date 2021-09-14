//vendor imports
import React from 'react'
//self imports
import styles from './styles'

function Rule({width}) {
  const style = {
    border: 0,
    margin: 0,
    width: width
  }
  return <hr style={style} />
}

//main component
export default function TableCol(props) {
  //classes
  const classes = styles()
  //styles
  const style = {}
  if ('stickyTop' in props) {
    style.position = 'sticky'
    style.zIndex = 1
    style.top = 0
  } 
  if ('stickyLeft' in props) {
    style.position = 'sticky'
    style.zIndex = 2
    style.left = 0
  }
  if ('stickyRight' in props) {
    style.position = 'sticky'
    style.zIndex = 2
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

  let rule = null
  if ('wrap1' in props) {
    rule = <Rule width={100} />
  } else if ('wrap2' in props) {
    rule = <Rule width={200} />
  } else if ('wrap3' in props) {
    rule = <Rule width={300} />
  } else if ('wrap4' in props) {
    rule = <Rule width={400} />
  } else if ('wrap5' in props) {
    rule = <Rule width={500} />
  } 
  return (
    <td 
      className={classes.tableCol} 
      style={style} 
      {...extras}
    >
      {props.children}
      {rule}
    </td>
  )
}