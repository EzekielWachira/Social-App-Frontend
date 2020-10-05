// import state from './state'
// import * as getters from './getters'
// import * as mutations from './mutations'
// import * as actions from './actions'
import Api from 'src/Api/Api'
import Csrf from 'src/Api/Csrf'
export default {
  namespaced: true,
  state: {
    posts: [],
    postComments: [],
    post: null
  },
  getters: {
    getPosts: state => {
      return this.state.posts
    }
  },
  mutations: {

  },
  actions: {

  }
}
