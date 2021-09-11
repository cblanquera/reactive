import React from 'react'

import AddIcon from '@material-ui/icons/Add'
import StorageIcon from '@material-ui/icons/Storage'

import state from '../state'
import Button from '../Button'
import { Table, Thead, Trow,  Tcol} from '../Table'

import Form from './Form'

const styles = {
  links: {
    float: 'right',
    textAlign: 'right'
  },
  scroll: {
    overflow: 'auto',
    flexGrow: 1,
    width: '100%'
  },
  title: {
    fontWeight: 400,
    textTransform: 'uppercase',
    margin: '11px 0 0'
  }
}

export default function SchemaSearch() {
  const dispatch = state.withReact.dispatch()
  dispatch.setCrumbs({
    icon: StorageIcon,
    title: 'Schemas'
  })
  const form = () => dispatch.addScreen(
    '#schema-create', 
    <Form title="Add Schema" />
  )
  
  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <div style={styles.links}>
          <Button icon={AddIcon} outline primary onClick={form}>
            Create Schema
          </Button>
        </div>
        <h1 style={styles.title}>Schemas</h1>
      </div>
      <div style={styles.scroll}>
        <Table>
          <Thead sticky-top sticky-left>ID</Thead>
          <Thead sticky-top>Name</Thead>
          <Thead sticky-top>Text</Thead>
          <Thead sticky-top>Date</Thead>
          <Thead sticky-top>Active</Thead>
          <Thead sticky-top>Created</Thead>
          <Thead sticky-top sticky-right>Updated</Thead>
          <Trow>
            <Tcol sticky-left>1</Tcol>
            <Tcol wrap-1>John Doe</Tcol>
            <Tcol wrap-3>Lorem Ipsum</Tcol>
            <Tcol nowrap>Dec 01, 2021</Tcol>
            <Tcol>1</Tcol>
            <Tcol nowrap>Dec 01, 2021</Tcol>
            <Tcol sticky-right nowrap>Dec 01, 2021</Tcol>
          </Trow>
          <Trow stripe>
            <Tcol sticky-left>1</Tcol>
            <Tcol nowrap>John Doe</Tcol>
            <Tcol nowrap>Lorem Ipsum</Tcol>
            <Tcol nowrap>Dec 01, 2021</Tcol>
            <Tcol>1</Tcol>
            <Tcol nowrap>Dec 01, 2021</Tcol>
            <Tcol sticky-right nowrap>Dec 01, 2021</Tcol>
          </Trow>
          <Trow>
            <Tcol sticky-left>1</Tcol>
            <Tcol nowrap>John Doe</Tcol>
            <Tcol nowrap>Lorem Ipsum</Tcol>
            <Tcol nowrap>Dec 01, 2021</Tcol>
            <Tcol>1</Tcol>
            <Tcol nowrap>Dec 01, 2021</Tcol>
            <Tcol sticky-right nowrap>Dec 01, 2021</Tcol>
          </Trow>
          <Trow stripe>
            <Tcol sticky-left>1</Tcol>
            <Tcol nowrap>John Doe</Tcol>
            <Tcol nowrap>Lorem Ipsum</Tcol>
            <Tcol nowrap>Dec 01, 2021</Tcol>
            <Tcol>1</Tcol>
            <Tcol nowrap>Dec 01, 2021</Tcol>
            <Tcol sticky-right nowrap>Dec 01, 2021</Tcol>
          </Trow>
          <Trow>
            <Tcol sticky-left>1</Tcol>
            <Tcol nowrap>John Doe</Tcol>
            <Tcol nowrap>Lorem Ipsum</Tcol>
            <Tcol nowrap>Dec 01, 2021</Tcol>
            <Tcol>1</Tcol>
            <Tcol nowrap>Dec 01, 2021</Tcol>
            <Tcol sticky-right nowrap>Dec 01, 2021</Tcol>
          </Trow>
          <Trow stripe>
            <Tcol sticky-left>1</Tcol>
            <Tcol nowrap>John Doe</Tcol>
            <Tcol nowrap>Lorem Ipsum</Tcol>
            <Tcol nowrap>Dec 01, 2021</Tcol>
            <Tcol>1</Tcol>
            <Tcol nowrap>Dec 01, 2021</Tcol>
            <Tcol sticky-right nowrap>Dec 01, 2021</Tcol>
          </Trow>
          <Trow>
            <Tcol sticky-left>1</Tcol>
            <Tcol nowrap>John Doe</Tcol>
            <Tcol nowrap>Lorem Ipsum</Tcol>
            <Tcol nowrap>Dec 01, 2021</Tcol>
            <Tcol>1</Tcol>
            <Tcol nowrap>Dec 01, 2021</Tcol>
            <Tcol sticky-right nowrap>Dec 01, 2021</Tcol>
          </Trow>
          <Trow stripe>
            <Tcol sticky-left>1</Tcol>
            <Tcol nowrap>John Doe</Tcol>
            <Tcol nowrap>Lorem Ipsum</Tcol>
            <Tcol nowrap>Dec 01, 2021</Tcol>
            <Tcol>1</Tcol>
            <Tcol nowrap>Dec 01, 2021</Tcol>
            <Tcol sticky-right nowrap>Dec 01, 2021</Tcol>
          </Trow>
          <Trow>
            <Tcol sticky-left>1</Tcol>
            <Tcol nowrap>John Doe</Tcol>
            <Tcol nowrap>Lorem Ipsum</Tcol>
            <Tcol nowrap>Dec 01, 2021</Tcol>
            <Tcol>1</Tcol>
            <Tcol nowrap>Dec 01, 2021</Tcol>
            <Tcol sticky-right nowrap>Dec 01, 2021</Tcol>
          </Trow>
          <Trow stripe>
            <Tcol sticky-left>1</Tcol>
            <Tcol nowrap>John Doe</Tcol>
            <Tcol nowrap>Lorem Ipsum</Tcol>
            <Tcol nowrap>Dec 01, 2021</Tcol>
            <Tcol>1</Tcol>
            <Tcol nowrap>Dec 01, 2021</Tcol>
            <Tcol sticky-right nowrap>Dec 01, 2021</Tcol>
          </Trow>
          <Trow>
            <Tcol sticky-left>1</Tcol>
            <Tcol nowrap>John Doe</Tcol>
            <Tcol nowrap>Lorem Ipsum</Tcol>
            <Tcol nowrap>Dec 01, 2021</Tcol>
            <Tcol>1</Tcol>
            <Tcol nowrap>Dec 01, 2021</Tcol>
            <Tcol sticky-right nowrap>Dec 01, 2021</Tcol>
          </Trow>
          <Trow stripe>
            <Tcol sticky-left>1</Tcol>
            <Tcol nowrap>John Doe</Tcol>
            <Tcol nowrap>Lorem Ipsum</Tcol>
            <Tcol nowrap>Dec 01, 2021</Tcol>
            <Tcol>1</Tcol>
            <Tcol nowrap>Dec 01, 2021</Tcol>
            <Tcol sticky-right nowrap>Dec 01, 2021</Tcol>
          </Trow>
        </Table>
      </div>
    </>
  )
}