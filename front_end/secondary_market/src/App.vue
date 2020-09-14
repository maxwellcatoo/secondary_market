<template>
  <div id="app">
    <menu-bar></menu-bar>
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

<style>
#view {
  margin-top: 60px;
}
</style>
