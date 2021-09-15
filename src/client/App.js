//vendor imports
import React, { useState, useEffect } from 'react'
import { Provider } from 'react-redux'
//local imports
import Panel from './Panel'
//self imports
import screens from './screens'
import { light, dark, ThemeProvider } from './theme'

export default function App() {
  const [ambiance, setAmbiance] = useState(false)
  const changeAmbiance = () => {
    localStorage.setItem('reactiveAmbiance', !ambiance)
    setAmbiance(!ambiance)
  }

  useEffect(() => {
    setAmbiance(localStorage.getItem('reactiveAmbiance') === 'true')
  }, [])
  const ambianceState = { ambiance, setAmbiance, changeAmbiance }

  return (
    <Provider store={screens.store}>
      <ThemeProvider theme={ambiance? dark: light}>
        <Panel title="Reactive" href="/" ambiance={ambianceState} />
      </ThemeProvider>
    </Provider>
  )
}