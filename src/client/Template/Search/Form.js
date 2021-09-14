import React from 'react'
import IconButton from '@material-ui/core/IconButton'

import SearchIcon from '@material-ui/icons/Search'
import FilterListIcon from '@material-ui/icons/FilterList'

import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    marginTop: theme.spacing(1),
    padding: '2px 4px',
    width: '100%'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}));

export default function SearchForm() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton}>
        <FilterListIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Enter Keyword"
      />
      <IconButton type="submit" className={classes.iconButton}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}