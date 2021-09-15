//vendor imports
import React from 'react'
//vendor components
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
//vendor icons
import CheckIcon from '@material-ui/icons/Check'
//local imports
import Screen from '../Screen'
//self imports
import styles from './styles'

//main component
export default function TemplateForm({ backward }) {
  const classes = styles()
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
          className={classes.formPublish} 
          variant="contained" 
          color="primary"
          startIcon={<CheckIcon />}
        >
          Publish
        </Button>
      </Screen.Foot>
    </>
  )
}