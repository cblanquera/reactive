//vendor imports
import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  searchHeader: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexWrap: 'wrap'
    }
  },
  searchHeaderLinks: {
    [theme.breakpoints.up('md')]: {
      textAlign: 'right'
    }
  },
  searchHeaderTitle: {
    flexGrow: 1,
    fontWeight: 400,
    textTransform: 'uppercase',
    margin: 0
  },
  searchForm: {
    alignItems: 'center',
    display: 'flex',
    marginTop: theme.spacing(1),
    padding: '2px 4px',
    width: '100%'
  },
  searchFormInput: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  searchFormButton: {
    padding: 10
  },
  formPublish: {
    display: 'flex',
    marginBottom: '5px',
    width: '100%'
  },
  detailEdit: {
    display: 'flex',
    marginBottom: '5px',
    width: '100%'
  },
  detailCopy: { 
    marginRight: 5,
    width: 'calc(50% - 2.5px)' 
  },
  detailRemove: { 
    width: 'calc(50% - 2.5px)' 
  }
}))