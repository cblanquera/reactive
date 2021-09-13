import React from 'react'

import Drawer from '@material-ui/core/Drawer'

import Hidden from '@material-ui/core/Hidden'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    overflowY: 'hidden',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 550
    }
  },
  screens: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    height: '100%',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    scrollBehavior: 'smooth',
    width: '100%',
  }
}))

export default React.forwardRef(function PanelRight(props, ref) {
  const { screens, close } = props
  const classes = useStyles()

  return (
    <Hidden smUp implementation="css">
      <Drawer
        variant="temporary"
        anchor="right"
        open={!!screens.length}
        onClose={close}
        ModalProps={{ keepMounted: true }}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div ref={ref} className={classes.screens}>
          {screens}
        </div>
      </Drawer>
    </Hidden>
  )
})