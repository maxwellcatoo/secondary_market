// 引入的系统组件
import Vue from 'vue'
import App from './App.vue'

//引入的自定义组件
import router from './router/index'
import store from './store/index'
import toast from "./components/common/toast"


Vue.use(toast)

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

//router注册到vue实例中再使用，方可以使用this.$router.push方法，所以写到后边
//是我天真了，写到后边还是不能用，还是老老实实用location吧
router.beforeEach((to,from,next) => {
  if(!to.meta.isLogin) {
    next()
  }else if(window.localStorage.getItem('phone')) {
    next()
  }else {
    // this.$router.push('/login')
    // window.location.assign('http://81.71.2.134/new/login_info')
    window.location.assign('http://localhost:3000/new/login_info')
  }
})
