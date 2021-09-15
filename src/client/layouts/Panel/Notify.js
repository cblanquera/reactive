//vendor imports
import React from 'react'
//vendor components
import Alert from '@material-ui/lab/Alert'
import Snackbar from '@material-ui/core/Snackbar'

const origin = { vertical: 'bottom', horizontal: 'left' }

//main component
export default function Notify({ clear, message, severity = 'info' }) {
  if (!message.length) {
    return <></>
  }

  const close = () => clear()

  return (
    <Snackbar 
      open={open} 
      anchorOrigin={origin}
      autoHideDuration={5000} 
      onClose={close}
    >
      <Alert 
        elevation={6} 
        variant="filled" 
        severity={severity}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}