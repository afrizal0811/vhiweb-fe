import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import Loader from '../components/Loader'
import { baseUrl } from '../constant/baseUrl'
import { getApi } from '../utility/getApi'
const ViewUser = () => {
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)
  const pathname = useLocation().pathname
  const userId = pathname.split('/').pop()
  useEffect(() => {
    const fetchData = async () => {
      const response = await getApi(`${baseUrl}/users/${userId}`)
      setUser(response.data)
      setLoading(false)
    }
    fetchData()
  }, [userId])

  const renderLoading = <Loader />
  const renderUserCard = (
    <Card style={{ width: '15rem' }}>
      <Card.Img
        variant='top'
        src={user.avatar}
      />
      <Card.Body className='text-center'>
        <Card.Title>
          {user.first_name} {user.last_name}
        </Card.Title>
        <Card.Text>{user.email}</Card.Text>
      </Card.Body>
    </Card>
  )

  return (
    <div className='d-flex justify-content-center align-items-center m-5'>
      {loading ? renderLoading : renderUserCard}
    </div>
  )
}

export default ViewUser
