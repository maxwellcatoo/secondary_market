import {request} from './request'

export function purchase(){
  return request({
    url: '/purchase'
  })
}
