import { ReactNode, createContext } from 'react'
import useRegisterUser from '../hooks/useRegisterUser'
import useLoginUser from '../hooks/useLoginUser'
import { UserLoginObj, UserObj, UserRegistrationObj } from '../types/FormObj'

type Props = {
  children: ReactNode
}
type AuthContextType = {
  user?: UserObj
  login: (credentials: UserLoginObj) => Promise<void>
  register: (userDetails: UserRegistrationObj) => Promise<void>
}
const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = (props: Props) => {
  const { register } = useRegisterUser()
  const { user, login } = useLoginUser()

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {props.children}
    </AuthContext.Provider>
  )
}
export default AuthContext
