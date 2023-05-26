import React from 'react'
import { Spinner } from 'react-bootstrap'

type Props = {}

const Loader = (props: Props) => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(0,0,0,0.7)',
        zIndex: 1000
      }}
    >
      <Spinner animation='border' role='status' variant='light'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </div>
  )
}

export default Loader
