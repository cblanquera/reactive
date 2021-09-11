import React from 'react'
import ScreenHead from './Head'
import ScreenBody from './Body'
import ScreenFoot from './Foot'
import state from '../state'

export default function Screen({ src, children }) {
  const style = state.withReact.getStyle('screen')
  return (
    <section style={style} data-src={src}>
      {children}
    </section>
  )
}

Screen.Head = ScreenHead
Screen.Body = ScreenBody
Screen.Foot = ScreenFoot