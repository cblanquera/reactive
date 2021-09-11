import React from 'react'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import state from '../state'

export default function ScreenHead({ title, onClick }) {
  const styles = state.withReact.getStyles(
    'screen.head',
    'screen.head.back',
    'screen.head.title'
  )
  return (
    <header style={styles['screen.head']}>
      <button onClick={onClick} style={styles['screen.head.back']}>
        <ChevronLeftIcon style={{ fontSize: 30 }} />
      </button>
      <h6 style={styles['screen.head.title']}>{title}</h6>
    </header>
  )
}