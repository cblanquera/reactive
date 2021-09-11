import React from 'react'

import CodeIcon from '@material-ui/icons/Code'
import StorageIcon from '@material-ui/icons/Storage'
import SettingsIcon from '@material-ui/icons/Settings'
import LocalCafeIcon from '@material-ui/icons/LocalCafe'

import Head from './Head'
import Body from './Body'
import Left from './Left'
import Right from './Right'

import state from '../state'
import Schema from '../Schema'

const menu = [
  {
    icon: LocalCafeIcon,
    title: 'Admin',
    children: [
      {
        title: 'Profile'
      },
      {
        title: 'Auth'
      },
      {
        title: 'Roles'
      }
    ]
  }, 
  {
    icon: CodeIcon,
    title: 'API',
    children: [
      {
        title: 'Applications'
      },
      {
        title: 'Sessions'
      },
      {
        title: 'Scopes'
      },
      {
        title: 'REST Calls'
      },
      {
        title: 'Webhooks'
      }
    ]
  }, 
  {
    icon: StorageIcon,
    title: 'System',
    children: [
      {
        title: 'Schemas',
        href: '/admin/schema/search',
        body: Schema.Search
      },
      {
        title: 'Fieldsets'
      }
    ]
  }, 
  {
    icon: SettingsIcon,
    title: 'Configuration',
    children: [
      {
        title: 'Languages'
      },
      {
        title: 'Settings'
      }
    ]
  }
]

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
  //start responsive state
  state.useResponsive()
  //set up the menu
  state.withReact.updateMenu(menu)
  //get routes
  const routes = getRoutes(menu)
  //get the panel style
  const style = state.withReact.getStyle('panel')
  return (
    <section style={style}>
      <Left src={src} href={href} title={title} />
      <Right />
      <Head />
      <Body routes={routes}></Body>
    </section>
  )
}