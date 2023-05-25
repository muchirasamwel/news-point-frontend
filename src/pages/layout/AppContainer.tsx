import React from 'react'
import { Outlet } from 'react-router-dom'
import AppNavBar from '../../components/navbar/AppNavBar'

type Props = {}

const AppContainer = (props: Props) => {
  return (
    <div>
      <AppNavBar />
      <Outlet />
    </div>
  )
}
export default AppContainer
