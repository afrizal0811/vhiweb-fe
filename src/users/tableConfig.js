import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const columns = () => [
  {
    dataField: 'id',
    text: 'User ID',
  },
  {
    dataField: 'first_name',
    text: 'First Name',
  },
  {
    dataField: 'last_name',
    text: 'Last Name',
  },
  {
    dataField: 'id',
    formatter: (id) => {
      return (
        <Container className='d-flex justify-content-center align-items-center'>
          <Link to={`/users/${id}`}>
            <Button variant='primary'>View</Button>
          </Link>
        </Container>
      )
    },
    text: 'Action',
  },
]
