import Axios from 'axios'

const instance = Axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

instance.interceptors.response.use(response => {
  return response.data
})

export default instance