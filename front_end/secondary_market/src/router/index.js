import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Homepage = () => import('../views/homepage/Homepage.vue')
const Purchase = () => import('../views/purchase/Purchase.vue')
const Discuss = () => import('../views/discuss/Discuss.vue')
const Release = () => import('../views/release/Release.vue')
const School = () => import('../views/school/School.vue')
const Login = () => import('../views/login/Login.vue')

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
    path: '/release',
    name: 'Release',
    component: Release
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
  }
]

export default new Router({
  routes,
  mode: 'history' //使用history模式
})
