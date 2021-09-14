import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import { Trow,  Tcol} from '../../Table'

export default function SearchRows({rows, detail}) {
  if (!Array.isArray(rows)) {
    return <Trow><Tcol colSpan={8}>Loading...</Tcol></Trow>
  }

  const children = rows.map((row, key) => (
    <Trow key={key} stripe={key % 2}>
      <Tcol sticky-left>{row.id}</Tcol>
      <Tcol><img src={row.image} width={50} height={50} /></Tcol>
      <Tcol wrap-1>{row.name}</Tcol>
      <Tcol wrap-5>{row.bio}</Tcol>
      <Tcol>{row.active? 'yes': 'no'}</Tcol>
      <Tcol nowrap>{row.created}</Tcol>
      <Tcol nowrap>{row.updated}</Tcol>
      <Tcol sticky-right>
        <IconButton onClick={detail(row.id !== 3? row.id: -1)}>
          <ChevronRightIcon />
        </IconButton>
      </Tcol>
    </Trow>
  ))

  return <>{children}</>
}