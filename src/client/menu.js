import CodeIcon from '@material-ui/icons/Code'
import CameraIcon from '@material-ui/icons/Camera'
import StorageIcon from '@material-ui/icons/Storage'
import SettingsIcon from '@material-ui/icons/Settings'
import LocalCafeIcon from '@material-ui/icons/LocalCafe'

import Schema from './views/Schema'
import Template from './views/Template'

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
  },
  {
    icon: CameraIcon,
    title: 'Template',
    href: '/admin/template',
    body: Template.Search
  }
]