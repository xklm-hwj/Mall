import router from './router'
import store from '../src/store'
import {getToken} from 'utils/auth'

router.beforeEach((to, from, next) => {
  let path =  0
  switch (to.path) {
    case '/body/category':
      path = 1
      break;
    case '/body/cart':
      path = 2
      break;
    case '/body/profile':
      path = 3
      break;
    default:
      path = 0
      break;
  }
  store.commit('user/setPath',path)
  const token = getToken()
  console.log(token)
  if(token) {
    console.log(111)
    store.dispatch('user/getUserinfo')
  }
  next()
})