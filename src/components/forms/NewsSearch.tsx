import React from 'react'
import { Button, Form } from 'react-bootstrap'

type Props = {}

const NewsSearch = (props: Props) => {
  return (
    <Form className='d-flex'>
      <Form.Control
        type='search'
        placeholder='Search'
        className='me-2'
        aria-label='Search'
      />
      <Button variant='outline-light'>Search</Button>
    </Form>
  )
}

export default NewsSearch
