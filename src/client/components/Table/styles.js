//vendor components
import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  table: {
    borderSpacing: 0,
    width: '100%'
  },
  tableScroll: {
    overflow: 'auto',
    flexGrow: 1,
    width: '100%'
  },
  tableHead: {
    backgroundColor: theme.palette.background.inset,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    position: 'relative',
    textAlign: 'left'
  },
  tableFoot: {
    backgroundColor: theme.palette.background.inset,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    position: 'relative',
    textAlign: 'left'
  },
  tableRow: {
    backgroundColor: theme.palette.background.paper
  },
  tableRowStriped: {
    backgroundColor: theme.palette.background.accent
  },
  tableCol: {
    backgroundColor: 'inherit',
    borderTop: '1px solid rgba(0, 0, 0, 0.25)',
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20
  }
}))