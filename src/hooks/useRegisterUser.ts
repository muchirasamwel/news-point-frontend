import axios from '../utils/axios'
import APIs from '../utils/APIs'
import { UserRegistrationObj } from '../types/FormObj'
import { useNavigate } from 'react-router-dom'

const useRegisterUser = () => {
  const navigate = useNavigate()
  const register = async (user: UserRegistrationObj) => {
    try {
      const response = await axios.post(APIs.REGISTER, user)
      if (response.status == 201) {
        navigate('/login')
      } else {
        // show erorr
      }
    } catch (e) {
      // show erorr
    }
  }
  return { register }
}
export default useRegisterUser
