import React from 'react'
import state from '../state'
import { Switch, Route } from "react-router-dom"

export default function Body({ routes }) {
  const style = state.withReact.getStyle('panel.body')
  routes.push({ href: '/', body: () => { return <h1>Hello</h1> } })
  routes = routes.map((route, key) => (
    <Route key={key} path={route.href} component={route.body} />
  ))

  return (
    <main style={style}>
      <Switch>
        {routes}
      </Switch>
    </main>
  )
}