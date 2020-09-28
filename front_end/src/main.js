// 引入的系统组件
import Vue from 'vue'
import App from './App.vue'

//引入的自定义组件
import router from './router/index'
import store from './store/index'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
