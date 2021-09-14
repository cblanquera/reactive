import React, { useEffect } from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { theme, ThemeProvider } from '../theme'

import PanelHead from './Head'
import PanelBody from './Body'
import PanelLeft from './Left'
import PanelRight from './Right'
import Notify from './Notify'

import menu from '../menu'
import screens from '../screens'

function getRoutes(menu) {
  const routes = []
  for (const item of menu) {
    if (item.href && item.body) {
      routes.push({ href: item.href, body: item.body })
    }

    if (Array.isArray(item.children)) {
      routes.push.apply(routes, getRoutes(item.children))
    }
  }

  return routes
}

export default function Panel({ src, href, title }) {
  //panel states
  const [ menuShown, showMenu ] = React.useState(false)
  const [ crumbs, setCrumbs ] = React.useState([])
  const [ notification, setNotification ] = React.useState({})
  const { open, close, forward, backward } = screens.useDispatch()
  //panel actions
  const ref = React.createRef()
  const toggle = () => showMenu(!menuShown)
  const notify = (message, type) => setNotification({ message, type })
  const clear = () => setNotification({})
  const routes = getRoutes(menu)
  const history = screens.get()

  useEffect(() => {
    //adjust size on responsive
    function handleResize() {
      const scrollTo = Math.max(history.length - 1, 0) * ref.current.clientWidth
      ref.current.scrollLeft = scrollTo
    }

    //if there is a reference
    if (ref.current) {
      //set the screens container
      screens.setEffectsContainer(ref.current)
      window.addEventListener('resize', handleResize, true)
    }
    
    return () => window.removeEventListener('resize', handleResize, true)
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PanelHead toggle={toggle} crumbs={crumbs} />
      <PanelBody 
        routes={routes} 
        open={open} 
        close={close} 
        forward={forward} 
        backward={backward}
        crumbs={setCrumbs}
        notify={notify}
      />
      <PanelLeft 
        src={src} 
        href={href} 
        title={title}
        menu={menu} 
        open={menuShown} 
        toggle={toggle} 
      />
      <PanelRight 
        ref={ref} 
        screens={history} 
        close={close} 
      />
      <Notify 
        clear={clear}
        message={notification.message || ''} 
        severity={notification.type || 'info'} 
      />
    </ThemeProvider>
  )
}
