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
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1666256797,972082711&fm=26&gp=0.jpg" alt="">
        <span>登录</span>
      </div>
    </router-link>
    

    <router-link to="school" tag="div">
      <menu-item path='school' class="menu-item item-right"><span>开通学校</span></menu-item>
    </router-link>
    
    <menu-item id="release" path='release' class="menu-item item-right">
      <span>发布</span>
      <div id="release-item" style="display:none">
        <router-link to="release_goods" tag="div">
          <div>发布商品</div>
        </router-link>
        <router-link to="release_buy" tag="div">
          <div>发布求购</div>
        </router-link>
      </div>
    </menu-item>
    
  </div>
</template>

<script>
import MenuItem from './MenuItem'
export default {
  name: 'MenuBar',
  components: {
    MenuItem
  },
  data() {
    return {
      isReleaseHover: false
    }
  },
  mounted() {
    this.releaseDl()
  },
  methods: {
    releaseDl() {
      let releaseEl = document.getElementById('release')
      let releaseItem = document.getElementById('release-item')
      releaseEl.onmouseover = () => {
        releaseItem.style.display = 'block'
      }
      releaseEl.onmouseleave = () => {
        releaseItem.style.display = 'none'
      }
    }
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
    box-shadow: 1px 1px 10px 3px rgba(50, 50, 50, 0.1);
    z-index: 10;
    font-size: 14.5px;
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

  #release {
    position: relative;
  }
  #release-item {
    position: absolute;
    top: calc(100% + 1px);
    left: calc(50% - 100px);
    height: 100px;
    width: 200px;
    border-radius: 10px;
    background-color: #fff;
    z-index: 1;
  }
  #release-item>div {
    float: left;
    width: 50%;
    height: 100%;
  }
</style>
