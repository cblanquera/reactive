import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  screen: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: '100%',
    height: '100%',
    position: 'relative',
    transition: '1s',
    width: '100%'
  },
  screenHead: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.inset,
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
  screenHeadBack: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    color: theme.palette.secondary.main,
    cursor: 'pointer',
    display: 'inline-block',
    padding: 0
  },
  screenHeadTitle: {
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
  screenBody: {
    bottom: 0,
    left: 0,
    overflowX: 'hidden',
    overflowY: 'auto',
    position: 'absolute',
    right: 0,
    top: 54,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  },
  screenFoot: {
    backgroundColor: theme.palette.background.inset,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    padding: '5px',
    position: 'absolute',
    right: 0,
    borderTop: `6px solid ${theme.palette.background.inset}`
  }
}))