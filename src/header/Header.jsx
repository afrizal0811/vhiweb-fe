import React, { useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { checkValidToken } from '../utility/localStorages'
const Header = () => {
  const navigate = useNavigate()
  const isLogin = checkValidToken()

  useEffect(() => {
    if (isLogin) {
      navigate('/users')
    }
  }, [navigate, isLogin])

  const handleLogout = () => {
    localStorage.clear()
    navigate('/')
  }

  const renderUserButton = (
    <Link to='/users'>
      <Nav.Link href='#users'>Users</Nav.Link>
    </Link>
  )
  const renderLoginButton = (
    <Link to='/'>
      <Nav.Link href='#users'>Login</Nav.Link>
    </Link>
  )
  const renderLogoutButton = <Nav.Link onClick={handleLogout}>Logout</Nav.Link>

  return (
    <div>
      <Navbar
        bg='dark'
        data-bs-theme='dark'
      >
        <Container>
          <Navbar.Brand href='#'>VhiWEB-Test</Navbar.Brand>
          <Nav className='me-auto'>
            {isLogin && renderUserButton}
            {!isLogin ? renderLoginButton : renderLogoutButton}
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Outlet />
    </div>
  )
}

export default Header
