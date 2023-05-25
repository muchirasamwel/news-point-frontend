import React, { ReactNode } from 'react'

import { Link, useLocation } from 'react-router-dom'
type Props = { title: string | ReactNode; path: string }
const NavLink = (props: Props) => {
  const location = useLocation()
  console.log('location.pathname', location.pathname, props.path)
  return (
    <Link
      to={props.path}
      className={`menu-link ${location.pathname == props.path ? 'active' : ''}`}
    >
      {props.title}
    </Link>
  )
}

export default NavLink
