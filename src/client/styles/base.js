import theme, { font, background, color } from './theme'

const button = {
  alignItems: 'center',
  borderRaduis: 0,
  borderStyle: 'solid',
  borderWidth: 1,
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'center',
  paddingBottom: 10,
  paddingLeft: 10,
  paddingTop: 10,
  paddingRight: 10
}

const base = {
  'button': button,
  'button.icon': {
    fontSize: 16,
    marginRight: 3
  },
  'button.outline.default': {
    ...button,
    backgroundColor: 'transparent',
    borderColor: '#909090',
    color: color.default
  },
  'button.outline.primary': {
    ...button,
    backgroundColor: 'transparent',
    borderColor: color.primary,
    color: color.primary
  },
  'button.outline.secondary': {
    ...button,
    backgroundColor: 'transparent',
    borderColor: color.secondary,
    color: color.secondary
  },
  'button.outline.error': {
    ...button,
    backgroundColor: 'transparent',
    borderColor: color.error,
    color: color.error
  },
  'button.outline.warning': {
    ...button,
    backgroundColor: 'transparent',
    borderColor: color.warning,
    color: color.warning
  },
  'button.outline.success': {
    ...button,
    backgroundColor: 'transparent',
    borderColor: color.success,
    color: color.success
  },
  'button.solid.default': {
    ...button,
    backgroundColor: '#909090',
    borderColor: '#909090',
    color: color.default
  },
  'button.solid.primary': {
    ...button,
    backgroundColor: color.primary,
    borderColor: color.primary,
    color: '#FFFFFF'
  },
  'button.solid.secondary': {
    ...button,
    backgroundColor: color.secondary,
    borderColor: color.secondary,
    color: '#FFFFFF'
  },
  'button.solid.error': {
    ...button,
    backgroundColor: color.error,
    borderColor: color.error,
    color: '#FFFFFF'
  },
  'button.solid.warning': {
    ...button,
    backgroundColor: color.warning,
    borderColor: color.warning,
    color: '#FFFFFF'
  },
  'button.solid.success': {
    ...button,
    backgroundColor: color.success,
    borderColor: color.success,
    color: '#FFFFFF'
  },
  'panel': { 
    backgroundColor: background[0],
    bottom: 0,
    color: color.default,
    fontFamily: font,
    fontSize: 14,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  'panel.head': {
    backgroundColor: background[0],
    borderBottom: '1px solid rgba(0,0,0,.40)',
    display: 'flex',
    flexFlow: 'row nowrap',
    left: 0,
    justifyContent: 'flex-start',
    minHeight: 25,
    overflow: 'hidden',
    padding: 14,
    position: 'absolute',
    top: 0,
    transition: '1s',
    width: '100%'
  },
  'panel.head.icon': {
    display: 'block',
    fontSize: 25
  },
  'panel.body': {
    backgroundColor: background[0],
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    left: 0,
    overflow: 'auto',
    padding: 20,
    position: 'absolute',
    top: 54,
    transition: '1s',
    right: 0
  },
  'panel.left': {
    backgroundColor: background[2],
    borderRight: '1px solid rgba(0,0,0,.40)',
    bottom: 0,
    color: color.default,
    left: -220,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    transition: '1s',
    width: 220,
    zIndex: 100
  },
  'panel.left.head': {
    backgroundColor: background[1],
    padding: 14,
    textTransform: 'uppercase'
  },
  'panel.left.head.link': {
    color: color.default,
    display: 'block',
    paddingBottom: 5,
    paddingLeft: 10,
    paddingTop: 5,
    textDecoration: 'none'
  },
  'panel.left.head.button': {
    background: 0,
    border: 0,
    borderRadius: 0,
    color: color.secondary,
    display: 'block',
    cursor: 'pointer',
    float: 'right',
    height: 30,
    padding: 0
  },
  'panel.left.menu': {
    bottom: 0,
    overflow: 'auto',
    position: 'absolute',
    top: 54,
    width: '100%'
  },
  'panel.left.menu.list': {
    listStyle: 'none',
    margin: 0,
    overflow: 'hidden',
    paddingLeft: 0
  },
  'panel.left.menu.icon': {
    fontSize: 20,
    marginRight: 5
  },
  'panel.left.menu.link': {
    alignItems: 'center',
    borderBottom: '1px solid rgba(0,0,0,.12)',
    color: color.default,
    cursor: 'pointer',
    display: 'flex',
    lineHeight: '60px',
    paddingLeft: 20,
    textDecoration: 'none'
  },
  'panel.right': {
    alignItems: 'flex-start',
    backgroundColor: background[2],
    borderLeft: '1px solid rgba(0,0,0,.40)',
    bottom: 0,
    color: color.default,
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    position: 'absolute',
    right: '-100%',
    scrollBehavior: 'smooth',
    top: 0,
    transition: '1s',
    width: '100%',
    zIndex: 99
  },
  'screen': {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: '100%',
    height: '100%',
    position: 'relative',
    transition: '1s',
    width: '100%'
  },
  'screen.head': {
    alignItems: 'center',
    backgroundColor: background[1],
    borderBottom: '1px solid rgba(0,0,0,.40)',
    display: 'flex',
    left: 0,
    overflow: 'hidden',
    padding: '10px',
    position: 'absolute',
    right: 0,
    top: 0,
    whiteSpace: 'nowrap'
  },
  'screen.head.back': {
    backgroundColor: 'transparent',
    borderWidth: 0,
    color: color.secondary,
    cursor: 'pointer',
    display: 'inline-block',
    padding: 0
  },
  'screen.head.title': {
    display: 'inline-block',
    fontSize: '15px',
    fontWeight: 'bold',
    lineHeight: '18px',
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: -4,
    overflow: 'hidden',
    textTransform: 'uppercase',
    textOverflow: 'ellipsis',
    verticalAlign: 'text-top',
    width: '95%'
  },
  'screen.body': {
    left: 0,
    overflowX: 'hidden',
    overflowY: 'auto',
    position: 'absolute',
    right: 0,
    top: '56px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  },
  'screen.foot': {
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    padding: '5px',
    position: 'absolute',
    right: 0,
    backgroundColor: background[1],
    borderTop: `6px solid ${background[1]}`
  }
}

const xs = { ...base }
const sm = { ...base }

const md = {
  ...base,
  'panel.head': {
    ...base['panel.head'],
    left: 220,
    transition: '0s'
  },
  'panel.head.icon': {
    ...base['panel.head.icon'],
    display: 'none'
  },
  'panel.body': {
    ...base['panel.body'],
    left: 220,
    transition: '0s'
  },
  'panel.left': {
    ...base['panel.left'],
    left: 0,
    transition: '0s'
  },
  'panel.left.head.button': {
    ...base['panel.left.head.button'],
    display: 'none'
  },
  'panel.right': {
    ...base['panel.right'],
    right: -550,
    width: 550
  }
}

const lg = { ...md }

export { theme, base, xs, sm, md, lg }

