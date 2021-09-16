//vendor imports
import React from 'react'
import PropTypes from 'prop-types'
//self imports
import styles from './styles'

//main component
export default function ScreenBody(props) {
  //classes
  const classes = styles()
  //styles
  const style = {}
  if (props.withFoot) {
    style.bottom = 57
  } else if (props.withFoot2) {
    style.bottom = 93
  }

  if (props.style && typeof props.style === 'object') {
    Object.assign(style, props.style)
  }
  //render
  return (
    <section className={classes.screenBody} style={style}>
      {props.children}
    </section>
  )
}

ScreenBody.propTypes = {
  withFoot: PropTypes.bool,
  withFoot2: PropTypes.bool
}

ScreenBody.defaultProps = {
  withFoot: false,
  withFoot2: false
}