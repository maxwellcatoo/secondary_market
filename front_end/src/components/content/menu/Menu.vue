<template>
  <div id="menu">
    <!-- 菜单栏左侧内容 -->
    <img class='logo' src="../../../assets/logo.png" alt="logo图片">
    <router-link to="homepage" tag="div">
      <menu-item path='homepage' class="menu-item item-left"><span>首页</span></menu-item>
    </router-link>

    <router-link to="purchase" tag="div">
      <menu-item path='purchase' class="menu-item item-left"><span>求购</span></menu-item>
    </router-link>

    <router-link to="discuss" tag="div">
      <menu-item path='discuss' class="menu-item item-left"><span>校园论坛</span></menu-item>
    </router-link>

    <!-- 菜单栏右侧内容 -->
    <router-link to="login" tag="div">
      <div path='/login' id="login">
        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1625322132,835120392&fm=26&gp=0.jpg" alt="">
        <span>登录</span>
      </div>
    </router-link>
    

    <router-link to="school" tag="div">
      <menu-item path='school' class="menu-item item-right"><span>开通学校</span></menu-item>
    </router-link>
    
    <router-link to="release" tag="div">
      <menu-item path='release' class="menu-item item-right"><span>发布</span></menu-item>
    </router-link>
    
  </div>
</template>

<script>
import MenuItem from './MenuItem'
export default {
  name: 'MenuBar',
  components: {
    MenuItem
  }
}
</script>

<style scoped>
  #menu {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    line-height: 60px;
    background-color: #ffffff;
    box-shadow: 0 1px 1px 1px #e6e7e9;
  }
  .logo {
    float: left;
    height: 60px;
    width: 100px;
    margin: 0 30px;
  }
  .menu-item {
    padding: 0 20px;
    height: 58px;
    line-height: 58px;
    text-align: center;
    cursor: pointer;
  }
  .item-left {
    float: left;
  }
  .item-right {
    float: right;
  }
  #login {
    vertical-align: middle;
    height: 60px;
    line-height: 60px;
    float: right;
    margin-right: 60px;
    cursor: pointer;
  }
  #login:hover {
    color: #2D8CF0;
  }
  #login>img {
    transform: translate(0,10px);
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  #login>span {
    display: inline-block;
    margin-left: 10px;
    transform: translate(0,-5px);
  }
</style>
