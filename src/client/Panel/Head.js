import React from 'react'

import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'

import Crumbs from '../Crumbs'

const useStyles = makeStyles((theme) => {
  const styles = {
    appBar: {
      borderBottom: '1px solid rgba(0, 0, 0, 0.40)',
      boxShadow: 'none',
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - 240px)`,
        marginLeft: 240,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    }
  }

  if (theme.palette.type === 'dark') {
    styles.appBar.backgroundColor = '#2F343F'
  }

  return styles
})

export default function PanelHead({ toggle, crumbs }) {
  const classes = useStyles()

  return (
    <div>
      <AppBar 
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton 
            color="inherit" 
            onClick={toggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Crumbs crumbs={crumbs} />
      </AppBar>
    </div>
  )
}