import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  tableHead: (props) => {
    const styles = {
      backgroundColor: theme.palette.background.inset,
      paddingBottom: 20,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 20,
      position: 'relative',
      textAlign: 'left'
    }

    if ('sticky-top' in props) {
      styles.position = 'sticky'
      styles.zIndex = 3
      styles.top = 0
    } 
    if ('sticky-left' in props) {
      styles.position = 'sticky'
      styles.zIndex = 4
      styles.left = 0
    } 
    if ('sticky-right' in props) {
      styles.position = 'sticky'
      styles.zIndex = 4
      styles.right = 0
    }
  
    if ('nowrap' in props) {
      styles.whiteSpace = 'nowrap'
    }

    return styles
  }
}))

export default function TableHead(props) {
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
  return <th className={classes.tableHead} {...extras}>{props.children}</th>
}