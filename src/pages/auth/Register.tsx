import React from 'react'
import RegistrationForm from '../../components/forms/RegistrationForm'
import { UserRegistrationObj } from '../../types/FormObj'
import useAuth from '../../hooks/useAuth'

type Props = {}

const Register = (props: Props) => {
  const { register } = useAuth()
  const resgisterUser = (user: UserRegistrationObj) => {
    register(user)
  }
  return (
    <div className='h-100'>
      <div className=' h-100 d-flex justify-content-center align-items-center'>
        <RegistrationForm handleRegister={resgisterUser} />
      </div>
    </div>
  )
}

export default Register
