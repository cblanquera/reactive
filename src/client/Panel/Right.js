import React from 'react'
import { useEffect } from 'react'

import state from '../state'

function getStyle(reactState, screens) {
  const style = reactState.getStyle('panel.right')
  if (screens) {
    style.right = 0
  }

  return style
}

export default function PanelRight() {
  const ref = React.createRef()
  const reactState = state.withReact
  const screens = reactState.getScreens() 
  const dispatch = reactState.dispatch()
  const style = getStyle(reactState, screens.length)
  //on mounted, scroll to last (clientWidth)
  useEffect(() => {
    //set the right panel
    dispatch.setPanel(ref.current)
    //adjust size on responsive
    function handleResize() {
      const scrollTo = Math.max(screens.length - 1, 0) * ref.current.clientWidth
      ref.current.scrollLeft = scrollTo
    }
    window.addEventListener('resize', handleResize, true)
    return () => window.removeEventListener('resize', handleResize, true)
  })

  return (
    <aside ref={ref} style={style}>{screens}</aside>
  )
}
