import {request} from './request'

export function getGoodsInfo(goodsid) {
  return request({
      url: '/good_info',
      params: {
        goodsid
      }
    })
}
