<template>
  <div id="uses-info">
    <user-content></user-content>
    <router-view id="views"></router-view>
  </div>
</template>

<script>
import UserContent from './childComponents/UserContent'

export default {
  name: 'UserInfo',
  components: {
    UserContent
  }
}
</script>

<style scoped>
  /* 不清楚为啥，这边用views的话，排版就乱了，是因为跟app.vue中的那个id名冲突了吗？但是这个scoped为啥不起作用呢 */
  #views {
    width: calc(85vw - 2px);
    height: 100%;
    position: absolute;
    top: 0;
    left: calc(15vw + 2px);
    background-color: #fff;
    box-shadow: 1px 1px 10px 3px rgba(50, 50, 50, 0.1);
    overflow: auto;
    /* border: 1px solid red;  */
  }
</style>
