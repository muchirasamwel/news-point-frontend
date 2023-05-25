import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import AuthContainer from '../pages/layout/AuthContainer'

const loginRoutes = {
  element: <AuthContainer />,
  children: [
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'register',
      element: <Register />
    }
  ]
}

export default loginRoutes
