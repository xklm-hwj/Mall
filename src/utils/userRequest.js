import Axios from 'axios'
import {getToken,removeToken} from 'utils/auth'

const instance = Axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

instance.interceptors.response.use(response => {
  return response.data
},error => {
  console.log(error)
  removeToken()
})

instance.interceptors.request.use(config => {
  config.headers['x-token'] = getToken()
  return config
})

export default instance