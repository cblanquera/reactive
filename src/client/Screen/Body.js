//vendor imports
import React from 'react'
//self imports
import styles from './styles'

//main component
export default function ScreenBody(props) {
  //classes
  const classNames = props.classes || styles()
  //styles
  const style = {}
  if ('withFoot' in props) {
    style.bottom = 57
  }

  if ('withFoot2' in props) {
    style.bottom = 93
  }

  if (typeof props.style === 'object') {
    Object.assign(style, props.style)
  }
  //render
  return (
    <section className={classNames.screenBody} style={style}>
      {props.children}
    </section>
  )
}