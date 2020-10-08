<template>
  <div>
    <div id="box">
      <span>您当前未登录，无法访问该界面......</span><br>
      <span id="login_page" style="color:blue;cursor:pointer">点击跳转登录页面</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginInfo',
  mounted() {
    this.turnPage()
  },
  methods: {
    turnPage() {
      let loginPage = document.getElementById('login_page')
      loginPage.onclick = () => {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped>
  #box {
    font-size: 18px;
    width: 20%;
    height: 100px;
    margin: 200px auto;
    text-align: center;
  }
  #box>span:last-child {
    display: inline-block;
    margin-top: 30px;
  }
</style>
