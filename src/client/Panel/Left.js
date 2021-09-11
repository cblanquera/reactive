import React, { useState } from 'react'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { Link } from "react-router-dom"

import state from '../state'

function getStyles(reactState) {
  const show = reactState.showMenu()
  const responsive = reactState.getResponsive()
  const shouldShow = responsive === 'md' || responsive === 'lg' || show
  const styles = reactState.getStyles(
    'panel.left',
    'panel.left.head',
    'panel.left.head.link',
    'panel.left.head.button',
    'panel.left.menu',
    'panel.left.menu.list',
    'panel.left.menu.icon',
    'panel.left.menu.link'
  )

  if (shouldShow) {
    styles['panel.left'].left = 0 
  }

  return styles
}

function Menu({ items, styles, opened = true, level = 0 }) {
  items = items.map((item, i) => (
    <MenuItem 
      item={item} 
      key={i} 
      level={level} 
      styles={styles} 
    />
  ))

  const list = {
    ...styles['panel.left.menu.list'], 
    height: opened ? 'auto': 0
  }

  return <ul style={list}>{items}</ul>
}

function MenuItem({item, level, styles}) {
  const link = { 
    ...styles['panel.left.menu.link'], 
    paddingLeft: (25 * level) + 20 
  }

  const icon = item.icon
    ? <item.icon style={styles['panel.left.menu.icon']} />
    : null

  if (item.children) {
    const [ opened, open ] = useState(false)
    const onClick = () => { open(!opened) }
    return (
      <li>
        <a style={link} onClick={onClick}>
          {icon}
          <span>{item.title}</span>
        </a>
        <Menu 
          items={item.children} 
          styles={styles} 
          opened={opened} 
          level={level + 1} 
        />
      </li>
    )
  }

  if (item.href) {
    return (
      <li>
        <Link to={item.href} style={link}>
          {icon}
          <span>{item.title}</span>
        </Link>
      </li>
    )
  }

  const dispatch = state.withReact.dispatch()
  const onClick = () => {
    dispatch.toggleMenu()
  }
  
  return (
    <li>
      <a style={link} onClick={onClick}>
        {icon}
        <span>{item.title}</span>
      </a>
    </li>
  )
}

export default function PanelLeft(props) {
  const { src, href, title } = props
  const reactState = state.withReact
  const items = reactState.getMenuItems()
  const dispatch = reactState.dispatch()
  const toggle = () => dispatch.toggleMenu()

  const image = src ? <img 
    src={src} 
    height="20" 
    width="20" 
    onError="this.style.display='none'" 
  /> : null

  const styles = getStyles(reactState)
  
  return (
    <aside style={styles['panel.left']}>
      <header style={styles['panel.left.head']}>
        <button 
          type="button" 
          style={styles['panel.left.head.button']} 
          onClick={toggle}
        >
          <ChevronLeftIcon />
        </button>
        <a style={styles['panel.left.head.link']} href={href}>
          {image}
          {title}
        </a>
      </header>
      <main style={styles['panel.left.menu']}>
        <Menu items={items} styles={styles} />
      </main>
    </aside>
  )
}