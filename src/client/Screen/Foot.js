import React from 'react'
import state from '../state'

export default function ScreenFoot({ children }) {
  const style = state.withReact.getStyle('screen.foot')
  return (
    <footer style={style}>
      {children}
    </footer>
  )
}