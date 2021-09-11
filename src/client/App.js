import React from 'react'
import { Provider } from 'react-redux'

import Panel from './Panel'
import state from './state'

export default function App() {
  return (
    <Provider store={state.store}>
      <Panel title="Incept" href="/" />
    </Provider>
  )
}