import React from 'react'
import { Link } from 'react-router-dom'

import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import Hidden from '@material-ui/core/Hidden'
import Collapse from '@material-ui/core/Collapse'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 240,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    borderRight: '1px solid rgba(0,0,0,.40)',
    width: 240,
  },
  header: {
    backgroundColor: theme.palette.background.inset,
    borderBottom: '1px solid rgba(0,0,0,.40)',
    paddingBottom: 17,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 17,
    textTransform: 'uppercase'
  },
  headerLink: {
    color: theme.palette.text.primary,
    display: 'block',
    paddingBottom: 5,
    paddingLeft: 10,
    paddingTop: 5,
    textDecoration: 'none'
  },
  headerBack: {
    background: 0,
    border: 0,
    borderRadius: 0,
    color: theme.palette.secondary.main,
    display: 'block',
    cursor: 'pointer',
    float: 'right',
    height: 30,
    padding: 0
  }
}))

function Menu({items, level = 0}) {
  items = items.map((item, key) => (
    <MenuItem key={key} item={item} level={level} />
  ))

  const style = { 
    backgroundColor: `rgb(0, 0, 0, ${level / 6})`,
    padding: 0
  }
  return <List style={style}>{items}</List>
}

function MenuItem({ item, level }) {
  const icon = item.icon? <item.icon />: null
  const style = {
    borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
    paddingBottom: 15,
    paddingTop: 15
  }
  if (!item.children) {
    if (item.href) {
      //see: https://material-ui.com/guides/composition/#caveat-with-inlining
      const MenuLink = React.useMemo(() =>
        React.forwardRef((linkProps, ref) => (
          <Link ref={ref} to={item.href} {...linkProps} />
        )),
        [item.href]
      )
      return (
        <li>
          <ListItem button component={MenuLink} style={style}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        </li>
      )
    }

    return (
      <li>
        <ListItem button style={style}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItem>
      </li>
    )
  }

  const [open, setOpen] = React.useState(false)
  const chevron = open ? <ExpandLessIcon /> : <ExpandMoreIcon />
  const toggle = () => setOpen(!open)

  return (
    <li>
      <ListItem button onClick={toggle} style={style}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={item.title} />
        {chevron}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Menu items={item.children} level={level + 1} />
      </Collapse>
    </li>
  )
}

export default function PanelLeft(props) {
  const { src, href, title, menu, open, toggle } = props
  const classes = useStyles()

  const image = src ? <img 
    src={src} 
    height="20" 
    width="20" 
    onError="this.style.display='none'" 
  /> : null

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={toggle}
          ModalProps={{ keepMounted: true }}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <header className={classes.header}>
            <button 
              type="button" 
              className={classes.headerBack} 
              onClick={toggle}
            >
              <ChevronLeftIcon />
            </button>
            <a className={classes.headerLink} href={href}>
              {image}
              {title}
            </a>
          </header>
          <Menu items={menu} />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer 
          variant="permanent" 
          classes={{
            paper: classes.drawerPaper,
          }}
          open
        >
          <header className={classes.header}>
            <a className={classes.headerLink} href={href}>
              {image}
              {title}
            </a>
          </header>
          <Menu items={menu} />
        </Drawer>
      </Hidden>  
    </nav>
  )
}