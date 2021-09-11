import React from 'react'

import CloseIcon from '@material-ui/icons/Close'
import CheckIcon from '@material-ui/icons/Check'
import FileCopyIcon from '@material-ui/icons/FileCopy'

import state from '../state'
import Button from '../Button'
import Screen from '../Screen'

const styles = {
  publish: {
    display: 'flex',
    marginBottom: '5px',
    width: '100%'
  },
  copy: { 
    marginRight: 5,
    width: 'calc(50% - 2.5px)' 
  },
  remove: { width: 'calc(50% - 2.5px)' }
}

export default function SchemaForm({ title }) {
  const dispatch = state.withReact.dispatch()
  const remove = () => {
    dispatch.removeScreen()
  }
  return (
    <>
      <Screen.Head title={title} onClick={remove} />
      <Screen.Body>
        <p>BODY</p>
      </Screen.Body>
      <Screen.Foot>
        <Button icon={CheckIcon} style={styles.publish} secondary>
          Publish
        </Button>
        <Button icon={FileCopyIcon} style={styles.copy} outline secondary>
          Copy
        </Button>
        <Button icon={CloseIcon} style={styles.remove} outline error>
          Remove
        </Button>
      </Screen.Foot>
    </>
  )
}