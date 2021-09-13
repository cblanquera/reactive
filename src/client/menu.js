import CodeIcon from '@material-ui/icons/Code'
import StorageIcon from '@material-ui/icons/Storage'
import SettingsIcon from '@material-ui/icons/Settings'
import LocalCafeIcon from '@material-ui/icons/LocalCafe'

import Schema from './Schema'

export default [
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