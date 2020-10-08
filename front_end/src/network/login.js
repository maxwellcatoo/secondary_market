import {request} from './request'

export function login(phone) {
  return request({
      url: '/login',
      params: {
        phone
      }
    })
}
