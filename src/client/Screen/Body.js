import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  body: {
    left: 0,
    overflowX: 'hidden',
    overflowY: 'auto',
    padding: theme.spacing(1),
    position: 'absolute',
    right: 0,
    top: '56px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  }
}))

export default function ScreenBody({ children }) {
  const classes = useStyles()
  return (
    <section className={classes.body}>
      {children}
    </section>
  )
}