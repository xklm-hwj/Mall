import {getToken} from 'utils/auth'
import {login} from 'api/user'

const state= {
  token: getToken(),
  userinfo: {},
  path: 0
}

const mutations = {
  setToken: (state,token) => state.token = token,
  setUserinfo: (state,userinfo) => state.userinfo = userinfo,
  setPath: (state,path) => state.path = path,
}

const actions = {
  login({commit},user) {
    login(user).then(res => {
      console.log(res)
    })
    // commit("setToken",token)
  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}