import {request} from './request'

export function watchTimes(goods_id) {
  return request({
      url: '/watch_times',
      params: {
        goods_id
      }
    })
}
