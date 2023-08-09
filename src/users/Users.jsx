import React, { useEffect, useState } from 'react'
import Tables from '../components/Table'
import { baseUrl } from '../constant/baseUrl'
import { getApi } from '../utility/getApi'
import { columns } from './tableConfig'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await getApi(`${baseUrl}/users?page=1`)
      setUsers(response)
    }
    fetchData()
  }, [])

  return (
    <div>
      <Tables
        data={users}
        columns={columns(users.id)}
      />
    </div>
  )
}

export default Users
