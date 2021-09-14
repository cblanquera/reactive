import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Pagination from '@material-ui/lab/Pagination'


import AddIcon from '@material-ui/icons/Add'
import CameraIcon from '@material-ui/icons/Camera'

import { makeStyles } from '@material-ui/core/styles'
import { Table, Thead } from '../Table'

import SearchForm from './Search/Form'
import SearchRows from './Search/Rows'

import Form from './Form'
import Detail from './Detail'
import store from './store'

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexWrap: 'wrap'
    }
  },
  headerLinks: {
    [theme.breakpoints.up('md')]: {
      textAlign: 'right'
    }
  },
  headerTitle: {
    flexGrow: 1,
    fontWeight: 400,
    textTransform: 'uppercase',
    margin: 0
  }
}))

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
  const classes = useStyles()
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

  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.headerTitle}>Template One</h1>
        <div className={classes.headerLinks}>
          <Button 
            variant="outlined" 
            color="secondary" 
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
        <Thead sticky-top sticky-left>ID</Thead>
        <Thead sticky-top>Image</Thead>
        <Thead sticky-top>Name</Thead>
        <Thead sticky-top>Bio</Thead>
        <Thead sticky-top>Active</Thead>
        <Thead sticky-top>Created</Thead>
        <Thead sticky-top>Updated</Thead>
        <Thead sticky-top sticky-right>&nbsp;</Thead>
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