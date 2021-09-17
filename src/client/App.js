//vendor imports
import React, { useState, useEffect } from 'react'
import { Provider } from 'react-redux'
//local imports
import Panel from './layouts/Panel'
//config imports
import menu from '../config/menu'
import routes from '../config/routes'
import screens from '../config/screens'
import settings from '../config/settings'
import { light, dark, ThemeProvider } from '../config/theme'

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
        <Panel 
          title={settings.title} 
          href={settings.href} 
          src={settings.src}
          menu={menu}
          routes={routes} 
          screens={screens}
          ambiance={ambianceState} 
        />
      </ThemeProvider>
    </Provider>
  )
}