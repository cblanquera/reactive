//vendor imports
import React from 'react'
//self imports
import styles from './styles'

export default function ScreenFoot({ classes, children }) {
  const classNames = classes || styles()
  return (
    <footer className={classNames.screenFoot}>
      {children}
    </footer>
  )
}