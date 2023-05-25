import { useContext } from 'react'
import AuthContext from '../contexts/AuthContext'

const useAuth = () => {
  const { login, user, isLoggedIn } = useContext(AuthContext)
  return { login, user, isLoggedIn }
}
export default useAuth
