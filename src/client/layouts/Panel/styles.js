//vendor imports
import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => {
  const styles = {
    panelHeadAppbar: {
      backgroundColor: '#AAAAAA',
      borderBottom: '1px solid rgba(0, 0, 0, 0.10)',
      boxShadow: 'none',
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - 240px)`,
        marginLeft: 240,
      }
    },
    panelHeadMenu: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none',
      }
    },
    panelHeadCrumbs: {
      alignItems: 'center',
      backgroundColor: theme.palette.background.inset,
      borderTop: '1px solid rgba(0, 0, 0, 0.40)',
      color: theme.palette.text.primary,
      display: 'flex',
      padding: 10
    },
    panelHeadCrumbsLink: {
      alignItems: 'center',
      color: theme.palette.primary.main,
      display: 'inline-flex',
      textDecoration: 'none'
    },
    panelHeadCrumbsItem: {
      alignItems: 'center',
      display: 'inline-flex'
    },
    panelHeadCrumbsIcon: {
      fontSize: 16,
      marginRight: 5
    },
    panelHeadCrumbsSep: {
      color: '#AAAAAA'
    },
    panelBody: {
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      left: 0,
      overflow: 'auto',
      padding: theme.spacing(2),
      position: 'absolute',
      top: 98,
      transition: '1s',
      right: 0,
      [theme.breakpoints.up('md')]: {
        left: 240,
        top: 106,
        transition: '0s',
        width: `calc(100% - 240px)`
      }
    },
    panelLeft: {
      [theme.breakpoints.up('md')]: {
        width: 240,
        flexShrink: 0,
      },
    },
    panelLeftDrawer: {
      borderRight: '1px solid rgba(0, 0, 0, 0.10)',
      width: 240,
    },
    panelLeftHeader: {
      backgroundColor: theme.palette.background.inset,
      borderBottom: '1px solid rgba(0, 0, 0, 0.10)',
      paddingBottom: 17,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 17,
      textTransform: 'uppercase'
    },
    panelLeftHeaderLink: {
      color: theme.palette.text.primary,
      display: 'block',
      paddingBottom: 5,
      paddingLeft: 10,
      paddingTop: 5,
      textDecoration: 'none'
    },
    panelLeftHeaderBack: {
      background: 0,
      border: 0,
      borderRadius: 0,
      color: theme.palette.primary.main,
      display: 'block',
      cursor: 'pointer',
      float: 'right',
      height: 30,
      padding: 0
    },
    panelLeftMenuItem: {
      borderBottom: '1px solid rgba(0, 0, 0, 0.10)',
      paddingBottom: 15,
      paddingTop: 15
    },
    panelRight: {
      overflowY: 'hidden',
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 550
      }
    },
    panelRightScreens: {
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
  }

  if (theme.palette.type === 'dark') {
    styles.panelHeadAppbar.backgroundColor = '#2F343F'
    styles.panelHeadAppbar.borderBottom = '1px solid rgba(0, 0, 0, 0.40)'
    styles.panelLeftDrawer.borderRight = '1px solid rgba(0, 0, 0, 0.40)'
    styles.panelLeftHeader.borderBottom = '1px solid rgba(0, 0, 0, 0.40)'
    styles.panelLeftMenuItem.borderBottom = '1px solid rgba(0, 0, 0, 0.25)'
  }

  return styles
}, { name: 'ReactiveLayoutPanel' })