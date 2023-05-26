import React from 'react'
import RegistrationForm from '../../components/forms/RegistrationForm'
import { UserRegistrationObj } from '../../types/FormObj'
import useRegisterUser from '../../hooks/useRegisterUser'

type Props = {}

const Register = (props: Props) => {
  const { register } = useRegisterUser()
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
