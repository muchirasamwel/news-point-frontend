import React from 'react'
import useAuth from '../../hooks/useAuth'
import LoginForm from '../../components/forms/LoginForm'
import { UserLoginObj } from '../../types/FormObj'

type Props = {}

const Login = (props: Props) => {
  const { login } = useAuth()
  const loginUser = (user: UserLoginObj) => {
    login(user)
  }
  return (
    <div className='h-100'>
      <div className=' h-100 d-flex justify-content-center align-items-center'>
        <LoginForm handleLogin={loginUser} />
      </div>
    </div>
  )
}

export default Login
