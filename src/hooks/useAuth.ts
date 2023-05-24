import { useContext } from 'react'
import AuthContext from '../contexts/AuthContext'

const useAuth = () => {
  const { login, register, user } = useContext(AuthContext)
  return { login, register, user }
}
export default useAuth
