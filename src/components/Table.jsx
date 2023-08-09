import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'

const Tables = (props) => {
  const { data, columns } = props

  return (
    <BootstrapTable
      bootstrap4
      keyField='id'
      data={data}
      columns={columns}
    />
  )
}

export default Tables
