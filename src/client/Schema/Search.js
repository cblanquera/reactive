import React from 'react'

import AddIcon from '@material-ui/icons/Add'

import state from '../state'
import Button from '../Button'

import Form from './Form'

const styles = {
  links: {
    float: 'right',
    textAlign: 'right'
  },
  title: {
    margin: '7px 0 0'
  }
}

export default function SchemaSearch() {
  const dispatch = state.withReact.dispatch()
  const form = () => dispatch.addScreen('#schema-create', <Form title="Create Schema" />)
  return (
    <>
      <div>
        <div style={styles.links}>
          <Button icon={AddIcon} outline primary onClick={form}>Create Schema</Button>
        </div>
        <h1 style={styles.title}>Schemas</h1>
      </div>
    </>
  )
}