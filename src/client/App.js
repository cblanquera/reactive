import React from 'react'
import { Provider } from 'react-redux'

import Panel from './Panel'
import screens from './screens'

export default function App() {
  return (
    <Provider store={screens.store}>
      <Panel title="Reactive" href="/" />
    </Provider>
  )
}