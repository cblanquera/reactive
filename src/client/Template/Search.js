//vendor imports
import React, { useState, useEffect } from 'react'
//vendor components
import Button from '@material-ui/core/Button'
import Pagination from '@material-ui/lab/Pagination'
//vendor icons
import AddIcon from '@material-ui/icons/Add'
import CameraIcon from '@material-ui/icons/Camera'
//local imports
import { Table, Thead } from '../Table'
//self imports
import SearchForm from './Search/Form'
import SearchRows from './Search/Rows'
import Form from './Form'
import Detail from './Detail'
import store from './store'
import styles from './styles'

//main component
export default function TemplateSearch(props) {
  const { backward, forward, open, crumbs, notify } = props
  //define listeners
  const form = () => open(
    <Form 
      forward={forward} 
      backward={backward} 
      notify={notify} 
    />
  )
  const detail = (id) => () => open(
    <Detail 
      id={id} 
      forward={forward} 
      backward={backward} 
      notify={notify} 
    />
  )
  //make classes
  const classes = styles()
  //get rows
  const [rows, setRows] = useState(false)
  //only on first mount
  useEffect(() => {
    //set the crumb trails
    crumbs([{ icon: CameraIcon, title: 'Template One' }])
    setTimeout(() => {
      store.get().then(res => setRows(res.results.rows))
    }, 2000)
  }, [])
  //render
  return (
    <>
      <header className={classes.searchHeader}>
        <h1 className={classes.searchHeaderTitle}>Template One</h1>
        <div className={classes.searchHeaderLinks}>
          <Button 
            variant="outlined" 
            color="primary" 
            onClick={form}
            fullWidth={true}
            startIcon={<AddIcon />}
          >
            Template Form
          </Button>
        </div>
        <SearchForm />
      </header>
      <Table>
        <Thead stickyTop stickyLeft>ID</Thead>
        <Thead stickyTop>Image</Thead>
        <Thead stickyTop>Name</Thead>
        <Thead stickyTop>Bio</Thead>
        <Thead stickyTop>Active</Thead>
        <Thead stickyTop>Created</Thead>
        <Thead stickyTop>Updated</Thead>
        <Thead stickyTop stickyRight>&nbsp;</Thead>
        <SearchRows tbody rows={rows} detail={detail} />
      </Table>
      <Pagination 
        style={{paddingTop: 10}} 
        count={10} 
        showFirstButton 
        showLastButton 
      />
    </>
  )
}