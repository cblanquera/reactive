//vendor imports
import React from 'react'
//vendor components
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
//vendor icons
import SearchIcon from '@material-ui/icons/Search'
import FilterListIcon from '@material-ui/icons/FilterList'
//local imports
import styles from '../styles'

//main component
export default function SearchForm() {
  const classes = styles();

  return (
    <Paper component="form" className={classes.searchForm}>
      <IconButton className={classes.searchFormButton}>
        <FilterListIcon />
      </IconButton>
      <InputBase
        className={classes.searchFormInput}
        placeholder="Enter Keyword"
      />
      <IconButton type="submit" className={classes.searchFormButton}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}