import Cookie from 'js-cookie'

const tokenKey = 'jwt-token'

export function getToken() {
  Cookie.get(tokenKey)
}
export function setToken(token) {
  Cookie.set(tokenKey,token)
}
export function removeToken() {
  Cookie.remove(tokenKey)
}