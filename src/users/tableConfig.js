import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const columns = (users) => [
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
    text: 'First Name',
  },
  {
    dataField: 'email',
    text: 'Email',
  },
  {
    dataField: 'id',
    formatter: (id) => {
      return (
        <Link to={`/users/${id}`}>
          <Button variant='primary'>View</Button>
        </Link>
      )
    },
    text: 'Action',
  },
]
