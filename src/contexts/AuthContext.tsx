import { ReactNode, createContext } from 'react'
import useLoginUser from '../hooks/useLoginUser'
import { UserLoginObj, UserObj, UserRegistrationObj } from '../types/FormObj'

type Props = {
  children: ReactNode
}
type AuthContextType = {
  user?: UserObj
  login: (credentials: UserLoginObj) => Promise<void>
  logout: () => Promise<void>
  isLoggedIn: boolean
}
const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = (props: Props) => {
  const auth = useLoginUser()

  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  )
}
export default AuthContext
