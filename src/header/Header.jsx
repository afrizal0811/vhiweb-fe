import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import { HandleButton } from '../utility/handleButton'

const Header = () => {
  const { loggedIn, handleLogout } = HandleButton()
  
  const renderUserButton = (
    <Link to='/users?page=1'>
      <Button variant='primary'>Users</Button>
    </Link>
  )
  const renderLoginButton = (
    <Link to='/'>
      <Button variant='primary'>Login</Button>
    </Link>
  )
  const renderLogoutButton = (
    <Button
      onClick={handleLogout}
      variant='primary'
    >
      Logout
    </Button>
  )

  return (
    <div>
      {!loggedIn ? renderLoginButton : renderLogoutButton}
      {loggedIn && renderUserButton}
      <Outlet />
    </div>
  )
}

export default Header
