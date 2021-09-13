import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

const useStyles = makeStyles((theme) => ({
  head: {
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
  back: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    color: theme.palette.secondary.main,
    cursor: 'pointer',
    display: 'inline-block',
    padding: 0
  },
  title: {
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
  }
}))

export default function ScreenHead({ title, onClick }) {
  const classes = useStyles()
  return (
    <header className={classes.head}>
      <button onClick={onClick} className={classes.back}>
        <ChevronLeftIcon style={{ fontSize: 30 }} />
      </button>
      <h6 className={classes.title}>{title}</h6>
    </header>
  )
}