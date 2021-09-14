//vendor imports
import React from 'react'
//vendor icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
//self imports
import styles from './styles'

export default function ScreenHead({ classes, title, onClick }) {
  const classNames = classes || styles()
  return (
    <header className={classNames.screenHead}>
      <button onClick={onClick} className={classNames.screenHeadBack}>
        <ChevronLeftIcon style={{ fontSize: 30 }} />
      </button>
      <h6 className={classNames.screenHeadTitle}>{title}</h6>
    </header>
  )
}