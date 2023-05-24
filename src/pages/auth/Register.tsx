import React from 'react'
import RegistrationForm from '../../components/forms/RegistrationForm'
import { UserRegistrationObj } from '../../types/FormObj'

type Props = {}

const Register = (props: Props) => {
  const resgisterUser = (user: UserRegistrationObj) => {}
  return (
    <div className='h-100'>
      <div className=' h-100 d-flex justify-content-center align-items-center'>
        <RegistrationForm handleRegister={resgisterUser} />
      </div>
    </div>
  )
}

export default Register
