<template>
  <div id="app">
    <menu-bar></menu-bar>
    <!-- <div id='menu-space'></div> -->
    <router-view id="view"></router-view>
  </div>
</template>

<script>
import MenuBar from './components/content/menu/Menu'

export default {
  name: 'App',
  components: {
    MenuBar
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
