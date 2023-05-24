import { useCallback, useEffect, useState } from 'react'
import axios from '../utils/axios'
import APIs from '../utils/APIs'
import { UserLoginObj, UserObj } from '../types/FormObj'
import { useNavigate } from 'react-router-dom'

const useLoginUser = () => {
  const [user, setUser] = useState<UserObj>()
  const navigate = useNavigate()
  const login = async (credentials: UserLoginObj) => {
    try {
      const response = await axios.post(APIs.LOGIN, credentials)
      if (response.status == 200) {
        const loggedUser: UserObj = response.data
        setUser(loggedUser)
        navigate('/', { replace: true })
      } else {
        // show error message
      }
    } catch (e) {
      // show error message
    }
  }

  const getUser = useCallback(
    () => async () => {
      try {
        const response = await axios.post(APIs.ACCOUNT)
        if (response.status == 200) {
          const loggedUser: UserObj = response.data
          setUser(loggedUser)
        } else {
          // show error message
        }
      } catch (e) {
        // show error message
      }
    },
    []
  )

  useEffect(() => {})

  return { user, login }
}
export default useLoginUser
