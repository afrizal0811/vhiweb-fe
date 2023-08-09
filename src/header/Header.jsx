import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to='/'>
        <button>Login</button>
      </Link>
      <Link to='/users'>
        <button>Users</button>
      </Link>
      <Outlet />
    </div>
  );
};

export default Header;
