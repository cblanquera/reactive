import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { Link } from 'react-router-dom'

import state from '../state'

function Item({ href, title, Icon, last, styles }) {
  const icon = Icon && <Icon style={styles['crumbs.icon']} />
  const separator = !last 
    ? <ChevronRightIcon style={styles['crumbs.separator']} /> 
    : null
  
  const item = href
    ? <Link to={href} style={styles['crumbs.link']}>{title}</Link>
    : <span style={styles['crumbs.span']}>{title}</span>
  
  return (
    <>
      {icon}
      {item}
      {separator}
    </>
  )
}

export default function Crumbs() {
  const reactState = state.withReact
  const crumbs = [
    {
      href: '/',
      icon: HomeIcon,
      title: 'Admin'
    }, 
    ...(reactState.getCrumbs())
  ]
  const styles = reactState.getStyles(
    'crumbs',
    'crumbs.link',
    'crumbs.span',
    'crumbs.icon',
    'crumbs.separator'
  )
  const items = crumbs.map((item, key) => (
    <Item 
      key={key} 
      href={item.href} 
      title={item.title} 
      Icon={item.icon} 
      styles={styles}
      last={key === (crumbs.length - 1)}
    />
  ))

  return (
    <nav style={styles['crumbs']}>{items}</nav>
  )
}