<template>
  <div>
    <div id="login">
      <div class="box">

        <div class="phone">
          <div>手机号</div>
          <input type="text" placeholder="请输入手机号">
        </div>
        <div class="verification">
          <div>验证码</div>
          <input type="text" placeholder="请输入验证码">
          <input type="button" value="获取验证码">
        </div>
        <div class="login">
          <input type="button" value="登录">
        </div>
        <div class="explain">首次登录将自动注册为平台用户</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
#login {
  position: absolute;
  height: 100%;
  width: 100%;
  background: url('./login_background.jpg') no-repeat 100% 100% !important;
  z-index: 10;
}
.box {
  width: 350px;
  height: 300px;
  position: absolute;
  top: calc(50% - 200px);
  left: calc(50% - 175px);
  background-color: #fff;
  border-radius: 10px;
}
.phone,.verification,.login,.explain {
  position: relative;
  margin: 30px auto;
  width: 80%;
  height: 35px;
  line-height: 35px;
  /* border: 1px solid red */
}

/* 手机号 */
.phone {
  margin-top: 40px;
}
.phone>div {
  display: inline-block;
  width: 20%;
  height: 100%;
  text-align: left;
  margin-left: 5px;
  font-size: 12px;
}
.phone>input {
  display: inline-block;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 210px;
}

/* 验证码 */
.verification>div {
  display: inline-block;
  width: 20%;
  height: 100%;
  text-align: left;
  margin-left: 5px;
  font-size: 12px;
}
.verification>input:nth-of-type(1) {
  display: inline-block;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 210px;
}
.verification>input:nth-of-type(2) {
  display: inline-block;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 80px;
}

/* 登录 */
.login {
  margin-top: 50px;
  margin-bottom: 10px;
}
.login>input {
  width: 100%;
  height: 100%;
}
/* 说明 */
.explain {
  text-align: center;
  margin-top: 0;
  font-size: 12px;
  color: #666;
}
</style>
