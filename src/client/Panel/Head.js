import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'

import state from '../state'
import Crumbs from '../Crumbs'

export default function Head() {
  const reactState = state.withReact
  const styles = reactState.getStyles(
    'panel.head', 
    'panel.head.top', 
    'panel.head.icon'
  )
  const dispatch = reactState.dispatch()
  const toggle = () => {
    dispatch.toggleMenu()
  }

  return (
    <header style={styles['panel.head']}>
      <div style={styles['panel.head.top']}>
        <MenuIcon style={styles['panel.head.icon']} onClick={toggle} />
      </div>
      <Crumbs />
    </header>
  )
}