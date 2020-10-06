import Api from 'src/Api/Api'
import Csrf from 'src/Api/Csrf'

export default {
  async post (postData) {
    await Csrf.getCookie()
    return Api().post('/post', postData)
  },
  async getPosts () {
    await Csrf.getCookie()
    return Api().get('/posts')
  },
  async getNextPosts (page) {
    Csrf.getCookie()
    return Api().get(`/posts?page=${page}`)
  },
  async updatePost (postId, postData) {
    await Csrf.getCookie()
    const editedItem = {
      title: '',
      body: '',
      image: ''
    }
    let post
    Api().get(`/post/${postId}`)
      .then(response => {
        post = response.data
      })
    Object.assign(post, editedItem)
    return Api().patch('/post/', postData)
  },
  async getPost (postId) {
    await Csrf.getCookie()
    return Api().get(`/post/${postId}`)
  }
}
