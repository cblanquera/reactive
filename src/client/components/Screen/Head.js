//vendor imports
import React from 'react'
//vendor icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
//self imports
import styles from './styles'

export default function ScreenHead({ title, onClick }) {
  const classes = styles()
  return (
    <header className={classes.screenHead}>
      <button onClick={onClick} className={classes.screenHeadBack}>
        <ChevronLeftIcon style={{ fontSize: 30 }} />
      </button>
      <h6 className={classes.screenHeadTitle}>{title}</h6>
    </header>
  )
}