import axios from 'axios'

export function request(config) {
  //0.创建axios实例
  const instance = axios.create({
    baseURL: 'http://localhost:3000/api/homepage',
    timeout: 1000
  })
  //1.axios拦截器
  instance.interceptors.request.use((config) => {
    return config
  },err => {
    console.log(err)
  })
  //2.发送真正的网络请求
  return instance(config)
}
