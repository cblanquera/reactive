//vendor imports
import React from 'react'
//vendor components
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
//vendor icons
import MenuIcon from '@material-ui/icons/Menu'
//local imports
import Crumbs from '../Crumbs'
import styles from './styles'

//main component
export default function PanelHead({ classes, toggle, crumbs }) {
  const classNames = classes || styles()
  //render
  return (
    <div>
      <AppBar 
        position="fixed"
        className={classNames.panelHeadAppbar}
      >
        <Toolbar>
          <IconButton 
            color="inherit" 
            onClick={toggle}
            className={classNames.panelHeadMenu}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Crumbs crumbs={crumbs} />
      </AppBar>
    </div>
  )
}