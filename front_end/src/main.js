// 引入的系统组件
import Vue from 'vue'
import App from './App.vue'

//引入的自定义组件
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')