import Header from './header/Header'
import Login from './login/Login'
import NotFound from './not_found/NotFound'
import Users from './users/Users'

export const routers = [
  {
    path: '/',
    element: <Header />,
    children: [
      { path: '/', element: <Login /> },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/users/:id',
        element: <Users />,
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]
