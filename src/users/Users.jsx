import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Paginations from '../components/Pagination'
import Tables from '../components/Table'
import { baseUrl } from '../constant/baseUrl'
import { getApi } from '../utility/getApi'
import { checkValidToken } from '../utility/localStorages'
import { columns } from './tableConfig'

const Users = () => {
  const navigate = useNavigate()

  const [users, setUsers] = useState([])
  const [page, setPage] = useState()
  const [totalPages, setTotalPages] = useState()
  const [hal, setHal] = useState()
  useEffect(() => {
    if (!checkValidToken()) {
      navigate('/')
    }
    const fetchData = async () => {
      const response = await getApi(`${baseUrl}/users?page=${hal}`)
      setUsers(response.data)
      setPage(response.page)
      setTotalPages(response.total_pages)
    }
    fetchData()
  }, [hal, navigate])

  const pageClicked = (data) => {
    setHal(data)
  }

  return (
    <Container className='d-flex justify-content-center align-items-center'>
      <Row className='w-75'>
        <Paginations
          className='justify-content-start align-items-start'
          page={page}
          total={totalPages}
          handleClick={pageClicked}
        />
        <Tables
          data={users}
          columns={columns()}
        />
      </Row>
    </Container>
  )
}

export default Users
