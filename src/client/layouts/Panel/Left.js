//vendor imports
import React from 'react'
//vendor components
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
//vendor icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
//self imports
import Menu from './Menu'
import styles from './styles'

//main component
export default function PanelLeft(props) {
  //expand props
  const { src, href, title, menu, open, toggle } = props
  const classes = styles()
  //render
  return (
    <nav className={classes.panelLeft}>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={toggle}
          ModalProps={{ keepMounted: true }}
          classes={{
            paper: classes.panelLeftDrawer,
          }}
        >
          <header className={classes.panelLeftHeader}>
            <button 
              type="button" 
              className={classes.panelLeftHeaderBack} 
              onClick={toggle}
            >
              <ChevronLeftIcon />
            </button>
            <a className={classes.panelLeftHeaderLink} href={href}>
              {src && <img 
                src={src} 
                height="20" 
                width="20" 
                onError="this.style.display='none'" 
              />}
              {title}
            </a>
          </header>
          <Menu items={menu} />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer 
          variant="permanent" 
          classes={{
            paper: classes.panelLeftDrawer,
          }}
          open
        >
          <header className={classes.panelLeftHeader}>
            <a className={classes.panelLeftHeaderLink} href={href}>
              {src && <img 
                src={src} 
                height="20" 
                width="20" 
                onError="this.style.display='none'" 
              />}
              {title}
            </a>
          </header>
          <Menu items={menu} />
        </Drawer>
      </Hidden>  
    </nav>
  )
}