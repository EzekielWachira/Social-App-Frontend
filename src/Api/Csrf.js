import Api from 'src/Api/Api'
import Cookie from 'js-cookie'
export default {
  getCookie () {
    const token = Cookie.get('XSRF-TOKEN')
    if (token) {
      return new Promise(resolve => {
        resolve(token)
      })
    }
    return Api().get('/csrf-cookie')
  }
}
