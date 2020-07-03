import request from 'utils/request'

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export class Goods{
  constructor(result) {
    result.columns.splice(2,1)
    this.columns = result.columns
    this.title = result.itemInfo.title
    this.nowPrice = result.itemInfo.price
    this.lowPrice = result.itemInfo.lowNowPrice
    this.oldPrice  = result.itemInfo.oldPrice
    this.shopInfo = result.shopInfo.services
  }
}

export class Shop {
  constructor(shopInfo) {
    this.name = shopInfo.name
    this.shopLogo = shopInfo.shopLogo
    this.goods = shopInfo.cGoods
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
  }
}