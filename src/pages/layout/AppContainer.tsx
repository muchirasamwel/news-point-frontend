import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const AppContainer = (props: Props) => {
  return (
    <div>
      <div>App Container here</div>
      <Outlet />
    </div>
  )
}
export default AppContainer
