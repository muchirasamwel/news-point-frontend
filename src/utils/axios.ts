import axios from 'axios'
import APIs from './APIs'

const axiosServices = axios.create({
  baseURL: APIs.BASE_URL,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

// interceptor for http

axiosServices.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error?.response?.status == 401) {
      localStorage.removeItem('authenticated')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default axiosServices
