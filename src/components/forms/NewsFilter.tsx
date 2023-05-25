import React from 'react'
import { Button } from 'react-bootstrap'

type Props = {}

const NewsFilter = (props: Props) => {
  return (
    <Button
      variant='outline-light'
      style={{ marginLeft: '10px', marginRight: '10px' }}
    >
      Filter Results
    </Button>
  )
}

export default NewsFilter
