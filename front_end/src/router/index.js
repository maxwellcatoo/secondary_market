import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Homepage = () => import('../views/homepage/Homepage.vue')
const Purchase = () => import('../views/purchase/Purchase.vue')
const Discuss = () => import('../views/discuss/Discuss.vue')
const ReleaseBuy = () => import('../views/release/ReleaseBuy.vue')
const ReleaseGoods = () => import('../views/release/ReleaseGoods.vue')
const School = () => import('../views/school/School.vue')
const Login = () => import('../views/login/Login.vue')
const UserInfo = () => import('../views/userInfo/UserInfo.vue')

const routes = [
  {
      path: '/',
      redirect: '/homepage'
  },
  {
    path: '/homepage',
    component: Homepage  
  },
  {
    path: '/purchase',
    name: 'Purchase',
    component: Purchase
  },
  {
    path: '/discuss',
    name: 'Discuss',
    component: Discuss
  },
  {
    path: '/release_buy',
    name: 'ReleaseBuy',
    component: ReleaseBuy
  },
  {
    path: '/release_goods',
    name: 'ReleaseGoods',
    component: ReleaseGoods
  },
  {
    path: '/school',
    name: 'School',
    component: School
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/user_info',
    name: 'UserInfo',
    component: UserInfo,
    children: [
      {
        path: '',
        redirect: '/user_info/info'
      },
      {
        path: 'info',
        component: () => import('../views/userInfo/views/Info.vue')
      },
      {
        path: 'goods',
        component: () => import('../views/userInfo/views/Goods.vue')
      },
      {
        path: 'release',
        component: () => import('../views/userInfo/views/Release.vue')
      },
      {
        path: 'connection',
        component: () => import('../views/userInfo/views/Connection.vue'),
        children: [
          {
            path: '',
            redirect: '/user_info/connection/sell'
          },
          {
            path: 'sell',
            component: () => import('../views/userInfo/views/ConnectionSell.vue')
          },
          {
            path: 'release',
            component: () => import('../views/userInfo/views/ConnectionRelease.vue')
          }
        ]
      }
    ]
  }
]

export default new Router({
  routes,
  mode: 'history' //使用history模式
})
