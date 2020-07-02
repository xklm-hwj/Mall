import request from 'utils/request'

export function getBanner() {
  return request({
    url: '/home/multidata'
  })
}

export function getGoods(type,page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}