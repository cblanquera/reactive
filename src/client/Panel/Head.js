//vendor imports
import React from 'react'
//vendor components
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import Badge from '@material-ui/core/Badge'
//vendor icons
import MenuIcon from '@material-ui/icons/Menu'
import Brightness3Icon from '@material-ui/icons/Brightness3'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import NotificationsIcon from '@material-ui/icons/Notifications'
//local imports
import Crumbs from '../Crumbs'
import styles from './styles'

//main component
export default function PanelHead({ toggle, crumbs, ambiance }) {
  const classes = styles()
  
  //render
  return (
    <div>
      <AppBar 
        position="fixed"
        className={classes.panelHeadAppbar}
      >
        <Toolbar>
          <IconButton 
            color="inherit" 
            onClick={toggle}
            className={classes.panelHeadMenu}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ flexGrow: 1 }} />
          <IconButton color="inherit" >
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" onClick={ambiance.changeAmbiance}>
            {ambiance.ambiance
              ? <Brightness3Icon /> 
              : <Brightness7Icon />
            }
          </IconButton>
          <IconButton color="inherit" >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
        <Crumbs crumbs={crumbs} />
      </AppBar>
    </div>
  )
}