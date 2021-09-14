//vendor imports
import React from 'react'
//self imports
import ScreenHead from './Head'
import ScreenBody from './Body'
import ScreenFoot from './Foot'
import styles from './styles'

export default function Screen({ classes, children }) {
  const classNames = classes || styles()
  return (
    <section className={classNames.screen}>
      {children}
    </section>
  )
}

Screen.Head = ScreenHead
Screen.Body = ScreenBody
Screen.Foot = ScreenFoot