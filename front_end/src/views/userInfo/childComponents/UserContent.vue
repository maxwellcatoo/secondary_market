<template>
  <div id="user-info">
    <router-link :to="item.src" tag="div" v-for="(item,index) in userItem" :key="index">
      <user-content-item :path="item.src">{{item.name}}</user-content-item>
    </router-link>
  </div>
</template>

<script>
import UserContentItem from './UserContentItem'

export default {
  name: 'UserContent',
  components: {
    UserContentItem
  },
  data() {
    return {
      userItem: [{name:'我的资料',src:'/user_info/info'},{name:'我的商品',src:'/user_info/goods'},{name:'我的求购',src:'/user_info/release'},{name:'我的收藏',src:'/user_info/connection'}]
    }
  }
}
</script>

<style scoped>
  #user-info {
    width: 15vw;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0px;
    background-color: #fff;
    cursor: pointer;
    box-shadow: 1px 1px 10px 3px rgba(50, 50, 50, 0.1);
    text-align: center;
  }
</style>
