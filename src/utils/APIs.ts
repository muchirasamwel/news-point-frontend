const api_base = process.env.REACT_APP_API_BASE
const APIs = {
  dateFormat: 'MMMM DD, YYYY',
  BASE_URL: process.env.REACT_APP_BASE_URL,

  // auth
  LOGIN: api_base + '/login',
  ACCOUNT: api_base + '/account',
  LOGOUT: api_base + '/logout',
  REGISTER: api_base + '/register'
}

export default APIs
