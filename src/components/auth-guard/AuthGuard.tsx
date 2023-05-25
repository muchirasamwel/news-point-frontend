import React, { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { getFromStorage } from '../../utils/storageHelper'

type Props = {
  children: ReactNode
}

const AuthGuard = (props: Props) => {
  const navigate = useNavigate()
  const { isLoggedIn } = useAuth()
  useEffect(() => {
    const userStatus = getFromStorage('isLoggedIn')
    if (!userStatus && !isLoggedIn) {
      navigate('login', { replace: true })
    }
  }, [navigate, isLoggedIn])
  return <>{props.children}</>
}

export default AuthGuard
