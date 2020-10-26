import axios from 'axios'

export function request(config) {
  //0.创建axios实例
  const instance = axios.create({
    //本机调试时使用
    baseURL: 'http://localhost:3000/api',

    //项目部署到服务器中
    // baseURL: 'http://81.71.2.134:3000/api',
    timeout: 3000
  })
  //1.axios拦截器
  // instance.interceptors.request.use((config) => {
  //   return config
  // },err => {
  //   console.log(err)
  // })
  //2.发送真正的网络请求
  return instance(config)
}
