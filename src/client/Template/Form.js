import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import CheckIcon from '@material-ui/icons/Check'

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

export default function TemplateForm({ backward }) {
  const classes = useStyles()
  const prev = () => backward(1)
  return (
    <>
      <Screen.Head title="Create Schema" onClick={prev} />
      <Screen.Body withFoot style={{ padding: 10 }}>
        <TextField 
          name="text" 
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
      </Screen.Body>
      <Screen.Foot>
        <Button 
          className={classes.publish} 
          variant="contained" 
          color="secondary"
          startIcon={<CheckIcon />}
        >
          Publish
        </Button>
      </Screen.Foot>
    </>
  )
}