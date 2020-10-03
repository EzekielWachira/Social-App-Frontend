import Api from 'src/Api/Api'
import Csrf from 'src/Api/Csrf'

export default {
  async comment (commentData, post) {
    await Csrf.getCookie()
    return Api().post(`/comment/${post.id}`, commentData)
  }
}
