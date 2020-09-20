<template>
  <div>
    <div id="connection">
      <div class="top">
        <router-link class="menu" :style="active_left_style" to="/user_info/connection/sell" tag="div">
          <div>出售</div>
        </router-link>
        <router-link class="menu" :style="active_right_style" to="/user_info/connection/release" tag="div">
          <div>求购</div>
        </router-link>
        <router-view id="connection-view"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Connection',
  computed: {
    active_left() {
      return this.$route.path === '/user_info/connection/sell'
    },
    active_right() {
      return this.$route.path === '/user_info/connection/release'
    },
    active_left_style() {
      return this.active_left?{backgroundColor:"#f0faff"}:{}
    },
    active_right_style() {
      return this.active_right?{backgroundColor:"#f0faff"}:{}
    }
  }
}
</script>

<style scoped>
  .top {
    width: 100%;
    height: 50px;
  }
  .menu {
    display: inline-block;
    width: 50%;
    height: 100%;
    line-height: 50px;
    text-align: center;
    box-shadow: 1px 1px 10px 3px rgba(50,50,50,0.1);
    cursor: pointer;
    background-color: white;
    /* border: 1px solid red; */
  }
  #connection-view {
    height: calc(100vh - 190px);
    width: calc(85vw - 2px);
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #f8f8f8;
    box-shadow: 1px 1px 10px 3px rgba(50, 50, 50, 0.1);
    padding-bottom: 80px;
  }
</style>
