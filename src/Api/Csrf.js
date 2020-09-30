import Api from 'src/Api/Api'
export default {
  getCookie () {
    return Api().get('/csrf-cookie')
  }
}
