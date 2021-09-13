import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import ScreenHead from './Head'
import ScreenBody from './Body'
import ScreenFoot from './Foot'

const useStyles = makeStyles((theme) => ({
  screen: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: '100%',
    height: '100%',
    position: 'relative',
    transition: '1s',
    width: '100%'
  }
}))

export default function Screen({ children }) {
  const classes = useStyles()
  return (
    <section className={classes.screen}>
      {children}
    </section>
  )
}

Screen.Head = ScreenHead
Screen.Body = ScreenBody
Screen.Foot = ScreenFoot