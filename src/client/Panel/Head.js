import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'

import state from '../state'

export default function Head() {
  const reactState = state.withReact
  const styles = reactState.getStyles('panel.head', 'panel.head.icon')
  const dispatch = reactState.dispatch()
  const toggle = () => {
    dispatch.toggleMenu()
  }

  return (
    <header style={styles['panel.head']}>
      <MenuIcon style={styles['panel.head.icon']} onClick={toggle} />
    </header>
  )
}