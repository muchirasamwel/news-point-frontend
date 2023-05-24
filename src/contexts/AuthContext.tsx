import { ReactNode, createContext } from 'react'
import useRegisterUser from '../hooks/useRegisterUser'
import useLoginUser from '../hooks/useLoginUser'

type Props = {
  children: ReactNode
}

const AuthContext = createContext({})

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
