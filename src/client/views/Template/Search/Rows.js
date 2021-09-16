//vendor imports
import React from 'react'
//vendor components
import IconButton from '@material-ui/core/IconButton'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
//local imports
import { Trow,  Tcol} from '../../../components/Table'

//main component
export default function SearchRows({rows, detail}) {
  if (!Array.isArray(rows)) {
    return <Trow><Tcol colSpan={8}>Loading...</Tcol></Trow>
  }

  const children = rows.map((row, key) => (
    <Trow key={key} stripe={key % 2 === 1}>
      <Tcol stickyLeft>{row.id}</Tcol>
      <Tcol><img src={row.image} width={50} height={50} /></Tcol>
      <Tcol wrap1>{row.name}</Tcol>
      <Tcol wrap5>{row.bio}</Tcol>
      <Tcol>{row.active? 'yes': 'no'}</Tcol>
      <Tcol noWrap>{row.created}</Tcol>
      <Tcol noWrap>{row.updated}</Tcol>
      <Tcol stickyRight>
        <IconButton onClick={detail(row.id !== 3? row.id: -1)}>
          <ChevronRightIcon />
        </IconButton>
      </Tcol>
    </Trow>
  ))

  return <>{children}</>
}