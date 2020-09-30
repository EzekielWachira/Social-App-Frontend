import Axios from 'axios'

const BaseApi = Axios.create({
  baseURL: 'http://localhost:8000/api'
})

const Api = () => {
  const token = localStorage.getItem('token')
  if (token) {
    BaseApi.defaults.headers.common.Authorization = `Bearer ${token}`
  }
  return BaseApi
}

export default Api
