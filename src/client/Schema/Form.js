import React from 'react'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'

import CloseIcon from '@material-ui/icons/Close'
import CheckIcon from '@material-ui/icons/Check'
import FileCopyIcon from '@material-ui/icons/FileCopy'

import { makeStyles } from '@material-ui/core/styles'

import Screen from '../Screen'

const useStyles = makeStyles((theme) => ({
  publish: {
    display: 'flex',
    marginBottom: '5px',
    width: '100%'
  },
  copy: { 
    marginRight: 5,
    width: 'calc(50% - 2.5px)' 
  },
  remove: { 
    width: 'calc(50% - 2.5px)' 
  }
}))

export default function SchemaForm({ prev, next }) {
  const classes = useStyles()
  return (
    <>
      <Screen.Head title="Create Schema" onClick={prev} />
      <Screen.Body>
        <TextField 
          name="standard-basic" 
          label="Standard" 
          margin="normal"
          required 
        />
        <TextField
          error
          name="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={next}>
            Spawn New Screen
        </Button>
      </Screen.Body>
      <Screen.Foot>
        <Button 
          className={classes.publish} 
          variant="contained" 
          color="primary"
          startIcon={<CheckIcon />}
        >
          Publish
        </Button>
        <Button 
          className={classes.copy} 
          variant="outlined" 
          color="primary"
          startIcon={<FileCopyIcon />}
        >
          Copy
        </Button>
        <Button 
          className={classes.remove} 
          variant="outlined" 
          color="secondary"
          startIcon={<CloseIcon />}
        >
          Remove
        </Button>
      </Screen.Foot>
    </>
  )
}