<template>
  <div>
    <div id="releasebuy">
      <h3>发布求购</h3>
      <form :action="baseHost+'api/release_buy'" method="POST" enctype="multipart/form-data">
        <div class="title"><div>标题</div><input name="title" type="text" placeholder="很重要，让别人对你的需求一目了然"></div>
        <div class="easyInfo"><div>简介</div><textarea name="easyInfo" type="text" placeholder="让别人更清晰了解您的需求(可选)"></textarea></div>
        <!-- <div class="price"><div>可接受价格</div><input name="price" type="text" placeholder="数字或文字，可接受的价格，如'100-150'之间"></div> -->

        <!-- <div class="nav"><div>卖家标签</div></div> -->
        <!-- <div class="nav-self"><input name="navSelf" type="text" placeholder="自定义标签，最多四个字"><input type="button" value="添加"></div> -->
        
        <div class="weichart"><div>微信</div><input name="wechart" type="text" placeholder="微信号，手机号，QQ至少填一项"></div>
        <div class="phone"><div>手机</div><input name="phone" type="text" placeholder="微信号，手机号，QQ至少填一项"></div>
        <div class="qq"><div>Q&nbsp;Q</div><input name="qq" type="text" placeholder="微信号，手机号，QQ至少填一项"></div>
        
        <div class="imgonload" @click='imgload'><div>图片上传</div><div><input id="input" name="file" type="file"><img title="点击上传图片" src="" alt=""></div></div>

        <div class="submit"><input type="submit" value="提交"></div>
        <input type="hidden" name="user_phone" id="user_phone">
      </form>
    </div>
  </div>
</template>

<script>
import {myMixin} from '../../common/mixin'

  export default {
    name: "Release",
    mixins: [myMixin],
    mounted() {
      document.getElementById('user_phone').value = localStorage.getItem('phone')
    },
    methods: {
      imgload() {
        let upload = document.querySelector('.imgonload')
        upload.onchange = function() {
            let obj = document.querySelector('.imgonload input')
            // let obj = this
            document.querySelector('.imgonload img').src = window.URL.createObjectURL(obj.files[0])
        }
      }
    }
  };
</script>

<style scoped>
  /* 容器样式 */
  #releasebuy {
    width: 50vw;
    margin: 40px auto;
    background-color: #ffffff;
    text-align: center;
    font-size: 15px;
    box-shadow: 1px 1px 10px 3px rgba(50, 50, 50, 0.1);
    border-radius: 15px;
    padding-top: 1px; /* 加了这个h3的margin-top才有效果，不然会跟容器的重叠 */
  }
  #releasebuy>h3 {
    margin-top: 50px;
  }
  /* 所有div均设置为inline-block */
  #releasebuy div {
    display: inline-block;
  }

  /* 简介信息较为独特，独立出来设置 */
  .easyInfo {
    height: 70px;
  }
  .easyInfo>textarea {
    min-height: 60px;
    max-height: 120px;
    resize: vertical;
    overflow-y: hidden;
  }
  .easyInfo>div {
    /* position: relative; */
    /* top: -10px; */
    line-height: 15px;
    vertical-align: top;
  }
  #releasebuy>form>div {
    display: inline-block;
    width: 90%;
    height: 40px;
    line-height: 40px;
    text-align: left;
    margin-top: 20px;
  }

  /* 使得所有输入框前说明和输入框有10px的间隔 */
  #releasebuy>form>div>div {
    margin-right: 10px;
    text-align: right;
    width: 60px;
  }
  input[type=text] {
    height: 25px;
  }
  .title>input,.easyInfo>textarea {
    width: 80%;
  }
  .price>input {
    width: 40%;
  }

  /* 自定义标签输入框和添加按钮 */
  /* .nav-self>input:first-child {
    margin-left: 90px;
  }
  .nav-self>input:last-child {
    margin-left: 1%;
  } */
  /* 邮费、三种联系方式输入框宽度设置 */
  .emailPrice>input,.weichart>input,.phone>input,.qq>input {
    width: 40%;
  }

  .imgonload {
    position: relative;
  }
  input[type=file] {
    position: absolute;
    height: 120px;
    width: 120px;
    border-radius: 10px;
    left: 90px;
    top: 0;
    opacity: 0;
    z-index: 1;
  }
  .imgonload img {
    position: absolute;
    height: 120px;
    width: 120px;
    border: 1px dashed #999;
    border-radius: 10px;
    left: 90px;
    top: 0;
  }

  .submit{
    text-align: center;
    margin-bottom: 120px;
  }
  .submit>input {
    margin-top: 85px;
    width: 80%;
    margin-left: 70px;
    height: 40px;
    color: white;
    background-color: #2d8cf0;
    border-radius: 5px;
  }

</style>
