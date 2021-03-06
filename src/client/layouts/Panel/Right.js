//vendor imports
import React from 'react'
//vendor components
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
//self imports
import styles from './styles'

//main component
export default React.forwardRef(function PanelRight(props, ref) {
  //expand props
  const { screens, close } = props
  const classes = styles()
  //render
  return (
    <Hidden smUp implementation="css">
      <Drawer
        variant="temporary"
        anchor="right"
        open={!!screens.length}
        onClose={close}
        ModalProps={{ keepMounted: true }}
        classes={{
          paper: classes.panelRight,
        }}
      >
        <div ref={ref} className={classes.panelRightScreens}>
          {screens}
        </div>
      </Drawer>
    </Hidden>
  )
})