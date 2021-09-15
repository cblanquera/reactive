import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  crumbs: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.inset,
    borderTop: '1px solid rgba(0, 0, 0, 0.40)',
    color: theme.palette.text.primary,
    display: 'flex',
    padding: 10
  },
  crumbsLink: {
    alignItems: 'center',
    color: theme.palette.primary.main,
    display: 'inline-flex',
    textDecoration: 'none'
  },
  crumbsItem: {
    alignItems: 'center',
    display: 'inline-flex'
  },
  crumbsIcon: {
    fontSize: 16,
    marginRight: 5
  },
  crumbsSep: {
    color: '#AAAAAA'
  },
}))

function Item({ href, title, Icon, last, classes }) {
  const icon = Icon && <Icon className={classes.crumbsIcon} />
  const separator = !last 
    ? <ChevronRightIcon className={classes.crumbsSep} /> 
    : null
  
  const item = href
    ? <Link to={href} className={classes.crumbsLink}>{title}</Link>
    : <span className={classes.crumbsItem}>{title}</span>
  
  return (
    <>
      {icon}
      {item}
      {separator}
    </>
  )
}

export default function Crumbs({ crumbs }) {
  const classes = useStyles()
  const trail = [
    {
      href: '/',
      icon: HomeIcon,
      title: 'Admin'
    }, 
    ...crumbs
  ]
  const items = trail.map((item, key) => (
    <Item 
      key={key} 
      href={item.href} 
      title={item.title} 
      Icon={item.icon} 
      classes={classes}
      last={key === (trail.length - 1)}
    />
  ))

  return <nav className={classes.crumbs}>{items}</nav>
}