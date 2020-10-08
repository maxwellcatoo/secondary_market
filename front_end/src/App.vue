<template>
  <div id="app">
    <menu-bar v-show="isError"></menu-bar>
    <keep-alive exclude="GoodsInfo">
      <router-view id="view"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MenuBar from './components/content/menu/Menu'

export default {
  name: 'App',
  components: {
    MenuBar
  },
  data() {
    return {
      isError: true
    }
  },
  created() {
    this.$store.commit('changeIsLogin',window.localStorage.getItem('phone'))
    this.$store.commit('changeImgsrc',window.localStorage.getItem('imgsrc'))
  },
  updated() {
    this.errorBox()
  },
  methods: {
    //判断当前页面是否是404，若是，则隐藏菜单栏，全部显示404界面
    errorBox() {
      let view = document.getElementById('view')
      if(window.location.pathname === '/new/404') {
        this.isError = false
        view.style.top = '0'
      }else {
        this.isError = true
        view.style.top = '60px'
      }
    }
  }
}
</script>

<style scoped>
#view {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 60px;
  overflow: auto;
  background-color: #f8f8f8;
}
</style>
