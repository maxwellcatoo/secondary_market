import {request} from './request'

export function getGoodsInfo(goodsid) {
  return request({
      url: '/good_info',
      params: {
        goodsid
      }
    })
}

export function onloadComment(goodsid,phone,stars,component) {
  return request({
    url: '/upload_comment',
    params: {
      goodsid,phone,stars,component
    }
  })
}
