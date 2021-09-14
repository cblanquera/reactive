import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import StorageIcon from '@material-ui/icons/Storage'
import { makeStyles } from '@material-ui/core/styles'

import Form from './Form'
import { Table, Thead, Trow,  Tcol} from '../Table'

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: theme.spacing(2)
  },
  headerLinks: {
    float: 'right',
    textAlign: 'right'
  },
  headerTitle: {
    fontWeight: 400,
    textTransform: 'uppercase',
    margin: 0
  }
}))

const trail = [
  {
    icon: StorageIcon,
    title: 'Schemas'
  }
]

export default function SchemaSearch(props) {
  const { backward, forward, open, crumbs } = props
  //define listeners
  const prev = () => backward(1)
  const next = () => forward(<Form prev={prev} next={next} />)
  const add = () => open(<Form prev={prev} next={next} />)
  //make classes
  const classes = useStyles()

  useEffect(() => {
    //set the crumb trails
    crumbs(trail)
  }, [])

  return (
    <>
      <header className={classes.header}>
        <div className={classes.headerLinks}>
          <Button 
            variant="outlined" 
            color="secondary" 
            onClick={add}
            startIcon={<AddIcon />}
          >
            Create Schema
          </Button>
        </div>
        <h1 className={classes.headerTitle}>Schemas</h1>
      </header>
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
    </>
  )
}