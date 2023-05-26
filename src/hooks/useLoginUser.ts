import { useCallback, useEffect, useState } from 'react'
import axios from '../utils/axios'
import APIs from '../utils/APIs'
import { UserLoginObj, UserObj } from '../types/FormObj'
import { useNavigate } from 'react-router-dom'
import { getFromStorage, saveToStorage } from '../utils/storageHelper'

const useLoginUser = () => {
  const [user, setUser] = useState<UserObj>()
  const [isLoggedIn, setisLoggedIn] = useState(false)
  useEffect(() => {
    try {
      const loggedIn = getFromStorage('isLoggedIn')
      setisLoggedIn(loggedIn)
      if (loggedIn && !user) {
        getUser()
      }
    } catch (e) {
      //show error
    }
  }, [])
  const navigate = useNavigate()
  const login = async (credentials: UserLoginObj) => {
    try {
      const response = await axios.post(APIs.LOGIN, credentials)
      if (response.status == 200) {
        setisLoggedIn(true)
        saveToStorage('isLoggedIn', JSON.stringify(true))
        await getUser()

        navigate('/', { replace: true })
      } else {
        // show error message
      }
    } catch (e) {
      // show error message
    }
  }

  const getUser = async () => {
    try {
      const response = await axios.get(APIs.ACCOUNT)
      if (response.status == 200) {
        const loggedUser: UserObj = response.data.data
        setUser(loggedUser)
      } else {
        // show error message
      }
    } catch (e) {
      // show error message
    }
  }

  const logout = async () => {
    try {
      const response = await axios.post(APIs.LOGOUT)
      if (response.status == 200) {
        setisLoggedIn(false)
        localStorage.removeItem('isLoggedIn')
        setUser({} as UserObj)
        navigate('/login', { replace: true })
      } else {
        // show error message
      }
    } catch (e) {
      // show error message
    }
  }

  return { user, login, isLoggedIn, logout }
}
export default useLoginUser
