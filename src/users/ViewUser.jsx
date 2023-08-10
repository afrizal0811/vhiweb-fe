import React, { useEffect, useState } from 'react'
import { baseUrl } from '../constant/baseUrl'
import { getApi } from '../utility/getApi'
import { useLocation } from 'react-router-dom'

const ViewUser = () => {
  const [user, setUser] = useState([])
  const pathname = useLocation().pathname
  const userId = pathname.split('/').pop()
  useEffect(() => {
    const fetchData = async () => {
      const response = await getApi(`${baseUrl}/users/${userId}`)
      setUser(response.data)
    }
    fetchData()
  }, [userId])

  return (
    <div>
      <img src={user.avatar} alt='avatar'/>
      <h1>
        {user.first_name} {user.last_name}
      </h1>
      <p>{user.email}</p>
    </div>
  )
}

export default ViewUser
