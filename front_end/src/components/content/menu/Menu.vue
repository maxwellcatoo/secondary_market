<template>
  <div id="menu">
    <!-- 菜单栏左侧内容 -->
    <img class='logo' src="../../../assets/logo.png" alt="logo图片">
    <router-link to="/homepage" tag="div">
      <menu-item path='homepage' class="menu-item item-left"><span>首页</span></menu-item>
    </router-link>

    <router-link to="/purchase" tag="div">
      <menu-item path='purchase' class="menu-item item-left"><span>求购</span></menu-item>
    </router-link>

    <!-- <router-link to="/discuss" tag="div">
      <menu-item path='discuss' class="menu-item item-left"><span>校园论坛</span></menu-item>
    </router-link> -->

    <!-- 菜单栏右侧内容 -->
      <!-- 根据用户是否登录展示不同的内容 -->
    <router-link v-if="!$store.getters.getIsLoginState" to="/login" tag="div">
      <div path='/login' id="login">
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1666256797,972082711&fm=26&gp=0.jpg" alt="">
        <span>登录</span>
      </div>
    </router-link>
      <div v-else path='/user_info' id="user-info">
        <!-- <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1666256797,972082711&fm=26&gp=0.jpg" alt=""> -->
        <img :src="baseHost+$store.state.imgsrc" alt="菜">
        <span>{{$store.getters.getLoginName}}</span>
        <div style="display:none" id="userbox">
          <router-link to="/user_info" tag="div">
            <div class="user-center">用户中心</div>
          </router-link>
          <div class="login-out">退出</div>
        </div>
      </div>
    

    <router-link to="/school" tag="div">
      <menu-item path='school' class="menu-item item-right"><span>开通学校</span></menu-item>
    </router-link>
    
    <menu-item id="release" path='release' class="menu-item item-right">
      <span>发布</span>
      <div id="release-item" style="display:none">
        <router-link to="/release_goods" tag="div">
          <div id="release-goods">发布商品</div>
        </router-link>
        <router-link to="/release_buy" tag="div">
          <div id="release-buy">发布求购</div>
        </router-link>
      </div>
    </menu-item>
    
  </div>
</template>

<script>
import MenuItem from './MenuItem'
import {myMixin} from '../../../common/mixin'

export default {
  name: 'MenuBar',
  components: {
    MenuItem
  },
  mixins: [myMixin],
  data() {
    return {
    }
  },
  // created() {
  //   this.username = window.localStorage.getItem('phone')
  //   this.isLogin = !!this.username
  // },
  mounted() {
    // 页面加载完成后运行此函数
    this.releaseDl()
    if(this.$store.getters.getIsLoginState){
      this.userbox(),
      this.loginOut()
    }
  },
  updated() {
    if(this.$store.getters.getIsLoginState){
      this.userbox(),
      this.loginOut()
    }
  },
  methods: {
    //鼠标悬浮在发布上时，显现出分类发布内容，离开时继续隐藏
    releaseDl() {
      let releaseEl = document.getElementById('release')
      let releaseItem = document.getElementById('release-item')


      releaseEl.onmouseover = () => {
        releaseItem.style.display = 'block'
      }
      releaseEl.onmouseleave = () => {
        releaseItem.style.display = 'none'
      }
    },
    userbox() {
      let userInfo = document.getElementById('user-info')
      let userbox = document.getElementById('userbox')
      let userCenter = document.getElementsByClassName('user-center')

      //用户信息页状态
      userInfo.onmouseover = () => {
        userbox.style.display = 'block'
      }
      userInfo.onmouseleave = () => {
        userbox.style.display = 'none'
      }
      //点击完用户中心后，盒子继续隐藏
      userCenter[0].onclick = () => {
        userbox.style.display = 'none'
      }
    },
    loginOut() {
      let loginOut = document.getElementsByClassName('login-out')
      loginOut[0].onclick = () => {
        window.localStorage.removeItem('phone')
        window.localStorage.removeItem('imgsrc')
        this.$store.commit('changeIsLogin',window.localStorage.getItem('phone'))
        this.$router.replace('/login')
      }
    }
  }
}
</script>

<style scoped>
  /* 菜单栏盒子 */
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
  /* 菜单栏项目共用属性 */
  .menu-item {
    padding: 0 20px;
    height: 58px;
    line-height: 58px;
    text-align: center;
    cursor: pointer;
  }
  /* 方便左右浮动的属性 */
  .item-left {
    float: left;
  }
  .item-right {
    float: right;
  }
  /* 未登录时的样式 */
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
  /* 用户已登录时的样式 */
  #user-info {
    position: relative;
    vertical-align: middle;
    height: 60px;
    line-height: 60px;
    float: right;
    margin-right: 60px;
    cursor: pointer;
  }
  #user-info:hover {
    color: #2D8CF0;
  }
  #user-info>img {
    transform: translate(0,10px);
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  #user-info>span {
    display: inline-block;
    margin-left: 10px;
    transform: translate(0,-5px);
  }
  #userbox {
    width: 100px;
    height: 100px;
    position: absolute;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    top: 60px;
    left: 40px;
    box-shadow: 1px 1px 10px 3px rgba(50, 50, 50, 0.1);
  }
  #userbox>div {
    color: black;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  #userbox>div:hover {
    color: #2D8CF0;
    background-color: rgba(50, 50, 50, 0.2);
  }
  /* 发布商品和求购信息的样式 */
  #release {
    position: relative;
  }
  #release-item {
    position: absolute;
    top: calc(100% + 1px);
    left: calc(50% - 100px);
    height: 100px;
    width: 200px;
    border-radius: 5px;
    background-color: #fff;
    z-index: 1;
    box-shadow: 1px 1px 10px 3px rgba(50, 50, 50, 0.1);
    color: black;
  }
  #release-item>div {
    float: left;
    width: 50%;
    height: 100%;
    border-radius: 5px;
  }
  #release-item>div:hover {
    color: #2D8CF0;
    background-color: rgba(50, 50, 50, 0.2);
  }
</style>
