//vendor imports
import React from 'react'
//vendor components
import { Link } from 'react-router-dom'
//vendor icons
import HomeIcon from '@material-ui/icons/Home'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
//self imports
import styles from './styles'

function Item({ href, title, Icon, last, classes }) {
  const icon = Icon && <Icon className={classes.panelHeadCrumbsIcon} />
  const separator = !last 
    ? <ChevronRightIcon className={classes.panelHeadCrumbsSep} /> 
    : null
  
  const item = href
    ? <Link to={href} className={classes.panelHeadCrumbsLink}>{title}</Link>
    : <span className={classes.panelHeadCrumbsItem}>{title}</span>
  
  return (
    <>
      {icon}
      {item}
      {separator}
    </>
  )
}

export default function Crumbs({ crumbs }) {
  const classes = styles()
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

  return <nav className={classes.panelHeadCrumbs}>{items}</nav>
}