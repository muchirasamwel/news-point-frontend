import config from '../config'

const api_base_url = config.REACT_APP_BASE_URL
const APIs = {
  BASE_URL: config.REACT_APP_BASE_URL,

  // auth
  LOGIN: api_base_url + '/login',
  ACCOUNT: api_base_url + '/account',
  LOGOUT: api_base_url + '/logout',
  REGISTER: api_base_url + '/register',

  UPDATE_PREFERENCES: api_base_url + '/user-preferences',
  NEWS: api_base_url + '/news'
}

export default APIs
