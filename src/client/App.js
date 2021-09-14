//vendor imports
import React from 'react'
import { Provider } from 'react-redux'
//local imports
import Panel from './Panel'
//self imports
import screens from './screens'
import { theme, ThemeProvider } from './theme'

export default function App() {
  return (
    <Provider store={screens.store}>
      <ThemeProvider theme={theme}>
        <Panel title="Reactive" href="/" />
      </ThemeProvider>
    </Provider>
  )
}