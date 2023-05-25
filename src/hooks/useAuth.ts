import { useContext } from 'react'
import AuthContext from '../contexts/AuthContext'

const useAuth = () => {
  const { login, register, user, isLoggedIn } = useContext(AuthContext)
  return { login, register, user, isLoggedIn }
}
export default useAuth
