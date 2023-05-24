import axios from '../utils/axios'
import APIs from '../utils/APIs'
import { UserRegistrationObj } from '../types/FormObj'

const useRegisterUser = () => {
  const register = async (user: UserRegistrationObj) => {
    try {
      const response = await axios.post(APIs.REGISTER, user)
      if (response.status == 201) {
        //redirect to login
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
