//vendor imports
import React from 'react'
import PropTypes from 'prop-types'
//vendor icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
//self imports
import styles from './styles'

export default function ScreenHead({ title, onClick, style, children }) {
  const classes = styles()
  return (
    <header className={classes.screenHead} style={style}>
      <button onClick={onClick} className={classes.screenHeadBack}>
        <ChevronLeftIcon style={{ fontSize: 30 }} />
      </button>
      <h6 className={classes.screenHeadTitle}>{title}</h6>
      {children}
    </header>
  )
}

ScreenHead.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
}