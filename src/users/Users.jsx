import React, { useEffect, useState } from 'react'
import Paginations from '../components/Pagination'
import Tables from '../components/Table'
import { baseUrl } from '../constant/baseUrl'
import { getApi } from '../utility/getApi'
import { columns } from './tableConfig'
import { Container, Row } from 'react-bootstrap'
const Users = () => {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState()
  const [totalPages, setTotalPages] = useState()
  const [hal, setHal] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const response = await getApi(`${baseUrl}/users?page=${hal}`)
      setUsers(response.data)
      setPage(response.page)
      setTotalPages(response.total_pages)
    }
    fetchData()
  }, [hal])

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
