const getters =  {
  token: state => state.user.token,
  path: state => state.user.path,
  userinfo: state => state.user.userinfo
}

export default getters