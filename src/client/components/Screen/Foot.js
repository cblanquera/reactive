//vendor imports
import React from 'react'
//self imports
import styles from './styles'

export default function ScreenFoot({ children }) {
  const classes = styles()
  return (
    <footer className={classes.screenFoot}>
      {children}
    </footer>
  )
}