import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  content: {
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    left: 0,
    overflow: 'auto',
    padding: theme.spacing(2),
    position: 'absolute',
    top: 98,
    transition: '1s',
    right: 0,
    [theme.breakpoints.up('md')]: {
      left: 240,
      top: 106,
      transition: '0s',
      width: `calc(100% - 240px)`
    }
  }
}))

export default function PanelBody(props) {
  const { routes, open, close, forward, backward, crumbs, notify } = props
  const classes = useStyles()
  routes.push({ href: '/', body: () => { return <h1>Hello</h1> } })
  const cases = routes.map((route, key) => (
    <Route key={key} path={route.href}>
      <route.body
        open={open} 
        close={close} 
        forward={forward} 
        backward={backward}
        crumbs={crumbs}
        notify={notify}
      />
    </Route>
  ))

  return (
    <main className={classes.content}>
      <Switch>{cases}</Switch>
    </main>
  )
}
