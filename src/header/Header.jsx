import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const Header = () => {
  return (
    <div>
      <Link to='/'>
        <Button variant='primary'>Login</Button>
      </Link>
      <Link to='/users'>
        <Button variant='primary'>Users</Button>
      </Link>
      <Outlet />
    </div>
  );
};

export default Header;
