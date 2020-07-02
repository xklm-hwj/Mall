import userRequest from 'utils/userRequest'

export function login(user) {
  return userRequest({
    url: 'user/login/login',
    method: 'post',
    data: {
      user
    }
  })
}

export function getUserinfo(user) {
  return userRequest({
    url: '/user/index/userinfo'
  })
}