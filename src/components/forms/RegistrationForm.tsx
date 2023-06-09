import React from 'react'
import Button from 'react-bootstrap/Button'
import FormInput from './forminput'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Form } from 'react-bootstrap'
import { UserRegistrationObj } from '../../types/FormObj'
import { Link } from 'react-router-dom'

type Props = {
  handleRegister: ({}: UserRegistrationObj) => void
}

const RegistrationForm = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema,
    onSubmit: (values, actions) => {
      props.handleRegister({ ...values })
    }
  })

  return (
    <>
      <div className='col-md-4 bg-white border border-light rounded-3 p-4 shadow'>
        <div>
          <h4 className='text-center'>Register for an account</h4>
        </div>
        <Form onSubmit={formik.handleSubmit}>
          <FormInput
            inputClass=''
            className='mb-2'
            controlId='firstnameInp'
            label='Firstname'
            placeholder='Enter your firstname'
            isInvalid={
              formik.touched.firstname && formik.errors.firstname ? true : false
            }
            errorMessage={formik.errors.firstname || ''}
            {...formik.getFieldProps('firstname')}
          />
          <FormInput
            inputClass=''
            className='mb-2'
            controlId='lastnameInp'
            label='Lastname'
            placeholder='Enter your lastname'
            isInvalid={
              formik.touched.lastname && formik.errors.lastname ? true : false
            }
            errorMessage={formik.errors.lastname || ''}
            {...formik.getFieldProps('lastname')}
          />
          <FormInput
            inputClass=''
            className='mb-2'
            controlId='emailInp'
            label='Email'
            placeholder='Enter your email'
            isInvalid={
              formik.touched.email && formik.errors.email ? true : false
            }
            errorMessage={formik.errors.email || ''}
            {...formik.getFieldProps('email')}
          />
          <FormInput
            inputClass=''
            className='mb-2'
            type='password'
            controlId='passwordInp'
            label='Password'
            placeholder='Enter your password'
            isInvalid={
              formik.touched.password && formik.errors.password ? true : false
            }
            errorMessage={formik.errors.password || ''}
            {...formik.getFieldProps('password')}
          />
          <FormInput
            inputClass=''
            type='password'
            className='mb-2'
            controlId='confirmPasswordInp'
            label='confirmPassword'
            placeholder='Enter your confirmPassword'
            isInvalid={
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? true
                : false
            }
            errorMessage={formik.errors.confirmPassword || ''}
            {...formik.getFieldProps('confirmPassword')}
          />
        </Form>

        <div className='mt-3 d-flex justify-content-between align-items-center'>
          <Button
            className=''
            variant='primary'
            type='submit'
            onClick={() => formik.submitForm()}
          >
            Register
          </Button>
          <Link to={'/login'}>Login?</Link>
        </div>
      </div>
    </>
  )
}

export default RegistrationForm

const validationSchema = yup.object({
  firstname: yup
    .string()
    .required('Please enter your firstname')
    .max(25, 'Firstname should have a max of 25 characters')
    .min(3, 'Fistname should have 3 or more charcters'),
  lastname: yup
    .string()
    .required('Please enter your lastname')
    .max(25, 'Lastname should have a max of 25 characters')
    .min(3, 'Lastname should have 3 or more charcters'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please enter your email'),
  password: yup
    .string()
    .required('Please enter your password')
    .min(8, 'Your password must be 8 characters or more'),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Password doesnt match')
})
