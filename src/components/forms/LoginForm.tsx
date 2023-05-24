import React from 'react'
import Button from 'react-bootstrap/Button'
import FormInput from './forminput'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Form } from 'react-bootstrap'
import { UserLoginObj } from '../../types/FormObj'

type Props = {
  handleLogin: ({}: UserLoginObj) => void
}

const LoginForm = (props: Props) => {
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
      props.handleLogin({ ...values })
    }
  })

  return (
    <>
      <div className='col-md-4 bg-white border border-light rounded-3 p-4 shadow'>
        <div>
          <h4 className='text-center'>Login to access news</h4>
        </div>
        <Form onSubmit={formik.handleSubmit}>
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
        </Form>
        <Button
          className='mt-3'
          variant='primary'
          type='submit'
          onClick={() => formik.submitForm()}
        >
          Login
        </Button>
      </div>
    </>
  )
}

export default LoginForm

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please enter your email'),
  password: yup
    .string()
    .required('Please enter your password')
    .min(8, 'Your password must be 8 characters or more')
})
