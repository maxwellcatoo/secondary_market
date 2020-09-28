import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  state:{//相当于data
    classifyId: '',
    isLogin: false,
    goodsData: [],//加载首页时，获取的所有商品数据
    goodsDataTransmit: [],//经过分类筛选后，要传给goodslist组件的数据
    pageCounts: 0, //页数，默认为0
    pageStart: 0, //所在页的开始数据属于第几条数据，默认为0
    pageItems: 2, //每一页包含多少数据
  },
  mutations:{//相当于methods
    // homepage页加载时运行这个函数
    getClassData(state,data) {
      state.goodsData = data
      state.goodsDataCount = data.length
      state.pageCounts = Math.ceil(state.goodsDataCount/state.pageItems)
      
      state.goodsDataTransmit = state.goodsData.slice(state.pageStart,state.pageStart+state.pageItems)
    },
    // 在goodslist中使用，当切换商品分类时，触发该函数
    getClassifyId(state,data) {
      console.log('haha')
      //更新classifyID中的数据
      state.classifyId = data.a + data.b
      //根据classifyId来更新传给goodslist中的数据
      state.goodsDataTransmit = state.goodsData.filter(item => {
        return item.classify_id === state.classifyId
      })
      //重新计算页码数
      state.pageCounts = Math.ceil(state.goodsDataTransmit.length/state.pageItems)

      console.log(state.goodsDataTransmit)
    },
    turnPage(state,page) {
        state.pageStart = page * state.pageItems
        state.goodsDataTransmit = state.goodsData.slice(state.pageStart,state.pageStart+state.pageItems)
    }
  },
  actions:{},//将mutations里面处里数据的方法变成可异步的处理数据的方法，简单的说就是异步操作数据（但是还是通过mutation来操作，因为只有它能操作）
  getters:{//相当于computed
    getGoodslistData(state) {
      return state.goodsDataTransmit
    }
  },
  modules:{}
})

//3.导出store对象
export default store

