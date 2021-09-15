//vendor imports
import React from 'react'
//vendor components
import { Link } from 'react-router-dom'
import Collapse from '@material-ui/core/Collapse'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
//vendor icons
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
//self imports
import styles from './styles'

//local components
function MenuItem({ item, level, classes }) {
  const icon = item.icon? <item.icon />: null
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
          <ListItem 
            button 
            component={MenuLink} 
            className={classes.panelLeftMenuItem}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        </li>
      )
    }

    return (
      <li>
        <ListItem button className={classes.panelLeftMenuItem}>
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
      <ListItem 
        button 
        onClick={toggle} 
        className={classes.panelLeftMenuItem}
      >
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

//main component
export default function Menu({items, level = 0}) {
  const classes = styles()
  items = items.map((item, key) => (
    <MenuItem key={key} item={item} level={level} classes={classes} />
  ))

  const style = { 
    backgroundColor: `rgb(0, 0, 0, ${level / 12})`,
    padding: 0
  }
  return <List style={style}>{items}</List>
}