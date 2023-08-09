import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <Link to='/'>
        <Button variant='primary'>Login</Button>
      </Link>
      <Link to='/users?page=1'>
        <Button variant='primary'>Users</Button>
      </Link>
      <Outlet />
    </div>
  )
}

export default Header
