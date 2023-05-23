import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const AuthContainer = (props: Props) => {
  return (
    <div>
      <div>Auth Container here</div>
      <Outlet />
    </div>
  )
}
export default AuthContainer
