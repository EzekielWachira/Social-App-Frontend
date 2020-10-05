import Api from 'src/Api/Api'
import Csrf from 'src/Api/Csrf'

export default {
  async like (post) {
    await Csrf.getCookie()
    return Api().post(`/like/${post.id}`)
  },

  async deleteLike (likeId) {
    await Csrf.getCookie()
    return Api().delete(`/like/${likeId}`)
  }
}
