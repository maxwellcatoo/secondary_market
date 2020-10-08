import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  state:{//相当于data
    isLogin: false,
    loginName: '',
    imgsrc: {}
  },
  mutations:{//相当于methods
    changeIsLogin(state,data){
      state.loginName = data
      state.isLogin = !!data
    },
    changeImgsrc(state,data){
      state.imgsrc = data
    }
  },
  actions:{},//将mutations里面处里数据的方法变成可异步的处理数据的方法，简单的说就是异步操作数据（但是还是通过mutation来操作，因为只有mutation能操作）
  getters:{//相当于computed
    getIsLoginState(state) {
      return state.isLogin
    },
    getLoginName(state) {
      return state.loginName
    },
    getLoginUser(state) {
      return state.imgsrc
    }
  },
  modules:{}
})

//3.导出store对象
export default store

