//vendor imports
import React from 'react'
//self imports
import styles from './styles'

export default function ScreenFoot({ children, style }) {
  const classes = styles()
  return (
    <footer className={classes.screenFoot} style={style}>
      {children}
    </footer>
  )
}