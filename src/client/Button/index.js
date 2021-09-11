import React from 'react'
import state from '../state'

export default function Button(props) {
  const type = props.type || 'submit'
  const key = 'outline' in props ? 'outline': 'solid'

  let layout = 'default'
  if ('primary' in props) {
    layout = 'primary'
  } else if ('secondary' in props) {
    layout = 'secondary'
  } else if ('error' in props) {
    layout = 'error'
  } else if ('warning' in props) {
    layout = 'warning'
  } else if ('success' in props) {
    layout = 'success'
  }

  const selector = `button.${key}.${layout}`
  const styles = state.withReact.getStyles('button.icon', selector)
  styles[selector] = { ...styles[selector], ...(props.style || {}) }

  const icon = props.icon
    ? <props.icon style={styles['button.icon']} />
    : null
  
    const onClick = props.onClick || (() => {})

  return (
    <button type={type} style={styles[selector]} onClick={onClick}>
      {icon}
      {props.children}
    </button>
  )
}