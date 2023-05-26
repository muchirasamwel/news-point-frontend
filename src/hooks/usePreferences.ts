import axios from '../utils/axios'
import APIs from '../utils/APIs'
import { UserRegistrationObj } from '../types/FormObj'
import { useNavigate } from 'react-router-dom'
import { PrefObj } from '../types/News'

const usePreferences = () => {
  const updatePreferences = async (pref: PrefObj) => {
    try {
      const response = await axios.put(APIs.UPDATE_PREFERENCES, {
        user_preferences: pref
      })
      if (response.status == 202) {
        // success
      } else {
        // show erorr
      }
    } catch (e) {
      // show erorr
    }
  }
  return { updatePreferences }
}
export default usePreferences
