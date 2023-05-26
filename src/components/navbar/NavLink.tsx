import React, { ReactNode } from 'react'

import { Link, useLocation } from 'react-router-dom'
type Props = { title: string | ReactNode; path: string }
const NavLink = (props: Props) => {
  const location = useLocation()
  return (
    <Link
      to={props.path}
      className={`menu-link d-flex justify-content-center align-items-center ${
        location.pathname == props.path ? 'active' : ''
      }`}
    >
      {props.title}
    </Link>
  )
}

export default NavLink
