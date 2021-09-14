import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  tableCol: (props) => {
    const styles = {
      backgroundColor: 'inherit',
      borderTop: '1px solid rgba(0, 0, 0, 0.25)',
      paddingBottom: 20,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 20
    }

    if ('sticky-top' in props) {
      styles.position = 'sticky'
      styles.zIndex = 1
      styles.top = 0
    } 
    if ('sticky-left' in props) {
      styles.position = 'sticky'
      styles.zIndex = 2
      styles.left = 0
    }
    if ('sticky-right' in props) {
      styles.position = 'sticky'
      styles.zIndex = 2
      styles.right = 0
    }
  
    if ('nowrap' in props) {
      styles.whiteSpace = 'nowrap'
    }

    return styles
  }
}))

function Rule({width}) {
  const style = {
    border: 0,
    margin: 0,
    width: width
  }
  return <hr style={style} />
}

export default function TableCol(props) {
  const classes = useStyles(props)

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
    <td className={classes.tableCol} {...extras}>
      {props.children}
      {rule}
    </td>
  )
}