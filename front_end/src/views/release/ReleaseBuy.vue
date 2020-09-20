<template>
  <div>
    <div id="release">
      <h3>发布求购</h3>
      <form action="">
        <div class="title"><div>标题</div><input type="text" placeholder="很重要，让别人对你的需求一目了然"></div>
        <div class="easyInfo"><div>简介(可选)</div><textarea type="text" placeholder="让别人更清晰了解您的需求"></textarea></div>
        <div class="price"><div>可接受价格</div><input type="text" placeholder="数字或文字，可接受的价格，如'100-150'之间"></div>
        <div class="nav"><div>卖家标签</div></div>
        <div class="nav-self"><input type="text" placeholder="自定义标签，最多四个字"><input type="button" value="添加"></div>
        
        <div class="weichart"><div>微信</div><input type="text" placeholder="微信号，手机号，QQ至少填一项"></div>
        <div class="phone"><div>手机</div><input type="text" placeholder="微信号，手机号，QQ至少填一项"></div>
        <div class="qq"><div>Q&nbsp;Q</div><input type="text" placeholder="微信号，手机号，QQ至少填一项"></div>
        <div class="imgonload"><div>图片上传</div><div><input type="file"></div></div>
        <div class="submit"><input type="submit" value="提交"></div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Release"
  };
</script>

<style scoped>
  /* 容器样式 */
  #release {
    width: 50vw;
    margin: 40px auto;
    /* border: 1px solid red; */
    background-color: #ffffff;
    text-align: center;
    font-size: 15px;
    box-shadow: 1px 1px 10px 3px rgba(50, 50, 50, 0.1);
    border-radius: 15px;
    padding-top: 1px; /* 加了这个h3的margin-top才有效果，不然会跟容器的重叠 */
  }
  #release>h3 {
    margin-top: 50px;
  }
  /* 所有div均设置为inline-block */
  #release div {
    display: inline-block;
  }

  /* 简介信息较为独特，独立出来设置 */
  .easyInfo {
    height: 70px;
  }
  .easyInfo>textarea {
    min-height: 50px;
    max-height: 80px;
    resize: vertical;
    overflow-y: hidden;
  }
  .easyInfo>div {
    /* position: relative; */
    /* top: -10px; */
    line-height: 15px;
    vertical-align: top;
  }
  #release>form>div {
    display: inline-block;
    width: 90%;
    height: 40px;
    line-height: 40px;
    text-align: left;
    margin-top: 20px;
  }

  /* 使得所有输入框前说明和输入框有10px的间隔 */
  #release>form>div>div {
    margin-right: 10px;
    text-align: right;
    width: 80px;
  }
  input[type=text] {
    height: 25px;
  }
  .title>input,.easyInfo>textarea {
    width: 85%;
  }
  .price>input {
    width: 40%;
  }

  /* 自定义标签输入框和添加按钮 */
  .nav-self>input:first-child {
    margin-left: 90px;
  }
  .nav-self>input:last-child {
    margin-left: 1%;
  }
  /* 邮费、三种联系方式输入框宽度设置 */
  .emailPrice>input,.weichart>input,.phone>input,.qq>input {
    width: 40%;
  }

  .submit{
    text-align: center;
    margin-bottom: 50px;
  }
  .submit>input {
    width: 80%;
    margin-left: 70px;
    height: 40px;
    color: white;
    background-color: #2d8cf0;
    border-radius: 5px;
  }
</style>
