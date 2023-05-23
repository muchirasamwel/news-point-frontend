import React from 'react'
import { Outlet } from 'react-router-dom'
import background from '../../assets/news-read.jpg'

type Props = {}

const AuthContainer = (props: Props) => {
  return (
    <>
      <div
        style={{
          zIndex: '-1',
          position: 'absolute',
          top: '0',
          left: '0',
          height: '100%',
          width: '100%',
          backgroundImage: `url(${background})`,
          filter: 'blur("8px")',
          WebkitFilter: 'blur(8px)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div
        style={{
          height: '100vh'
        }}
      >
        <Outlet />
      </div>
    </>
  )
}
export default AuthContainer
