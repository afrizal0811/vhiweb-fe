import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'

const Tables = (props) => {
  const { data, columns } = props

  return (
    <div>
      <BootstrapTable
        bootstrap4
        keyField='id'
        data={data}
        columns={columns}
      />
    </div>
  )
}

export default Tables
