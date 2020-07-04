import Cookies from 'js-cookie'

const TokenKey = 'jwt_token'

export function getToken() {
  return Cookies.get(TokenKey)==undefined?false:Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
