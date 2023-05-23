import React from 'react'
import RegistrationForm from '../../components/forms/RegistrationForm'

type Props = {}

const Register = (props: Props) => {
  return (
    <div className='h-100'>
      <div className=' h-100 d-flex justify-content-center align-items-center'>
        <RegistrationForm />
      </div>
    </div>
  )
}

export default Register
