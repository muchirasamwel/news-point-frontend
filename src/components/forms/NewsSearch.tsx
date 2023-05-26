import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import useNewsData from '../../hooks/useNewsData'

type Props = {}

const NewsSearch = (props: Props) => {
  const { setSearch } = useNewsData()
  const [searchText, setsearchText] = useState<string>('')
  return (
    <Form className='d-flex'>
      <Form.Control
        type='search'
        placeholder='Search'
        className='me-2'
        aria-label='Search'
        onChange={e => {
          const val = e.target.value
          setsearchText(val)
        }}
      />
      <Button
        variant='outline-light'
        onClick={() => {
          setSearch(searchText)
        }}
      >
        Search
      </Button>
    </Form>
  )
}

export default NewsSearch
