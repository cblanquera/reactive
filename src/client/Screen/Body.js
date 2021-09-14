import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  body: (props) => {
    const styles = {
      bottom: 0,
      left: 0,
      overflowX: 'hidden',
      overflowY: 'auto',
      position: 'absolute',
      right: 0,
      top: 54,
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1
    }

    if ('withFoot' in props) {
      styles.bottom = 57
    }

    if ('withFoot2' in props) {
      styles.bottom = 93
    }

    if (typeof props.style === 'object') {
      Object.assign(styles, props.style)
    }

    return styles
  }
}))

export default function ScreenBody(props) {
  const classes = useStyles(props)
  return (
    <section className={classes.body}>
      {props.children}
    </section>
  )
}