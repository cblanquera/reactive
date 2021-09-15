//vendor imports
import React from 'react'
//vendor components
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
//vendor icons
import CheckIcon from '@material-ui/icons/Check'
//local imports
import Screen from '../../components/Screen'
import FileField from '../../components/Fields/FileField'
import TagListField from '../../components/Fields/TagListField'
import TextListField from '../../components/Fields/TextListField'
import MetadataField from '../../components/Fields/MetadataField'
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
        <TagListField 
          label="Tags Example"
          name="tags" 
          value={['foo', 'bar']} 
        />
        <TextListField 
          label="Text List Example"
          addLabel="Add Item"
          margin="normal"
          name="names" 
          value={['foo', 'bar']} 
        />
        <MetadataField 
          label="Metadata Example"
          addLabel="Add Item"
          margin="normal"
          name="names" 
          value={{ foo: 'bar', bar: 'foo' }} 
        />
        <FileField 
          label="File Example"
          addLabel="Upload File"
          margin="normal"
          limit={3}
          accept="image/*"
          name="file" 
          value={'https://randomuser.me/api/portraits/women/12.jpg'} 
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