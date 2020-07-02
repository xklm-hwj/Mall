import Axios from 'axios'

const instance = Axios.create({
  baseURL: 'http://152.136.185.210:8000/api/n3',
  timeout: 5000
})

instance.interceptors.response.use(response => {
  return response.data
})

export default instance