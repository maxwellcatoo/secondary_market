import Vue from 'vue'
import Router from 'vue-router'
// import { component } from 'vue/types/umd'

Vue.use(Router)

const Homepage = () => import('../views/homepage/Homepage.vue')
const Purchase = () => import('../views/purchase/Purchase.vue')
// const Discuss = () => import('../views/discuss/Discuss.vue')
const ReleaseBuy = () => import('../views/release/ReleaseBuy.vue')
const ReleaseGoods = () => import('../views/release/ReleaseGoods.vue')
const School = () => import('../views/school/School.vue')
const Login = () => import('../views/login/Login.vue')
const UserInfo = () => import('../views/userInfo/UserInfo.vue')
const GoodsInfo = () => import('../views/homepage/GoodsInfo.vue')
const Error = () => import('../views/error/Error.vue')
const LoginInfo = () => import ('../views/error/LoginInfo.vue')

const routes = [
  {
      path: '/',
      redirect: '/homepage'
  },
  {
    path: '/homepage',
    component: Homepage,
    meta: {
      isLogin: false  //不需要登录即可访问
    }
  },
  {
    path: '/purchase',
    name: 'Purchase',
    component: Purchase,
    meta: {
      isLogin: false
    }
  },
  // {
  //   path: '/discuss',
  //   name: 'Discuss',
  //   component: Discuss
  // },
  {
    path: '/release_buy',
    name: 'ReleaseBuy',
    component: ReleaseBuy,
    meta: {
      isLogin: true  //需要登录才能访问
    }
  },
  {
    path: '/release_goods',
    name: 'ReleaseGoods',
    component: ReleaseGoods,
    meta: {
      isLogin: true
    }
  },
  {
    path: '/school',
    name: 'School',
    component: School,
    meta: {
      isLogin: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      isLogin: false
    }
  },

  //有问题
  {
    path: '/goods_info/:iid',
    name: 'GoodsInfo',
    component: GoodsInfo
  },
  {
    path: '/user_info',
    component: UserInfo,
    meta: {
      isLogin: true
    },
    children: [
      {
        path: '',
        redirect: '/user_info/info',
      },
      {
        path: 'info',
        component: () => import('../views/userInfo/views/Info.vue'),
        meta: {
          isLogin: true
        }
      },
      {
        path: 'goods',
        component: () => import('../views/userInfo/views/Goods.vue'),
        meta: {
          isLogin: true
        }
      },
      {
        path: 'release',
        component: () => import('../views/userInfo/views/Release.vue'),
        meta: {
          isLogin: true
        }
      },
      {
        path: 'connection',
        component: () => import('../views/userInfo/views/Connection.vue'),
        meta: {
          isLogin: true
        },
        children: [
          {
            path: '',
            redirect: '/user_info/connection/sell'
          },
          {
            path: 'sell',
            component: () => import('../views/userInfo/views/ConnectionSell.vue'),
            meta: {
              isLogin: true
            }
          },
          {
            path: 'release',
            component: () => import('../views/userInfo/views/ConnectionRelease.vue'),
            meta: {
              isLogin: true
            }
          }
        ]
      }
    ]
  },
  {
      path: '/login_info',
      component: LoginInfo,
      meta: {
        isLogin: false
      }
  },
  {
      path: '*',
      redirect: '/404'
  },
  {
      path: '/404',
      component: Error,
      meta: {
        isLogin: false
      }
  }
]

export default new Router({
  routes,
  base:'/new/',
  mode: 'history' //使用history模式
})
