import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  foot: {
    backgroundColor: theme.palette.background.inset,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    padding: '5px',
    position: 'absolute',
    right: 0,
    borderTop: `6px solid ${theme.palette.background.inset}`
  }
}))

export default function ScreenFoot({ children }) {
  const classes = useStyles()
  return (
    <footer className={classes.foot}>
      {children}
    </footer>
  )
}