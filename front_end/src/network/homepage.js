import {request} from './request'

export function getHomepage(classid) {
  return request({
      url: '/homepage',
      params: {
        classid
      }
    })
}
