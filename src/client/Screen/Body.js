import React from 'react'
import state from '../state'

export default function ScreenBody({ children }) {
  const style = state.withReact.getStyle('screen.body')
  return (
    <section style={style}>
      {children}
    </section>
  )
}