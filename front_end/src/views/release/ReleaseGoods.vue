<template>
  <div>
    <div id="release">
      <h3>发布商品</h3>
      <form :action="baseHost+'api/release_goods'" method="POST" enctype="multipart/form-data">
        <div class="title"><div>标题</div><input name="title" type="text" placeholder="很重要，显示在列表页"></div>
        <div class="easyInfo"><div>简介</div><textarea type="text" name="easyInfo" placeholder="很重要，显示在商品详情页"></textarea></div>
        <div class="price"><div>标价</div><input name="price" type="text" placeholder="填入数字，想卖的价格"></div>
        <div class="oldPrice"><div>原价</div><input name="oldprice" type="text" placeholder="填入数字，约购买时的价格，供买家参考"></div>

        <!-- <div class="nav"><div>商品标签</div></div>
        <div class="nav-self"><input type="text" placeholder="自定义标签，最多四个字"><input type="button" value="添加"></div> -->


        <div class="classify"><div>分类</div>
          <div>
            <input id="classify" type="text" placeholder="合适的分类买家能更好地找到您的商品">
            <div id="marker">x</div>
          </div>
        </div>


        <div class="emailPrice"><div>邮费</div><input name="emailPrice" type="text" value="商议"></div>
        <div class="weichart"><div>微信</div><input name="wechart" type="text" placeholder="微信号，手机号，QQ至少填一项"></div>
        <div class="phone"><div>手机</div><input name="phone" type="text" placeholder="微信号，手机号，QQ至少填一项"></div>
        <div class="qq"><div>Q&nbsp;Q</div><input name="qq" type="text" placeholder="微信号，手机号，QQ至少填一项"></div>

        <!-- 上传图片 -->
        <div class="imgonload" @click='imgload'><div>图片上传</div><div><input id="input" name="file" type="file"><img title="点击上传图片" src="" alt=""></div></div>

        <div class="submit"><input type="submit" value="提交"></div>
        <input type="hidden" id="user_phone" name="user_phone">


      </form>
    </div>
  </div>
</template>

<script>
import {myMixin} from '../../common/mixin'

  export default {
    name: "Release",
    mixins: [myMixin],
    data() {
      return {

      }
    },
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
    width: 60px;
  }
  input[type=text] {
    height: 25px;
  }
  .title>input,.easyInfo>textarea {
    width: 85%;
  }
  .price>input,.oldPrice>input {
    width: 40%;
  }

  /* 自定义标签输入框和添加按钮 */
  /* .nav-self>input:first-child {
    margin-left: 70px;
  }
  .nav-self>input:last-child {
    margin-left: 1%;
  } */
  /* 邮费、三种联系方式输入框宽度设置 */
  .emailPrice>input,.weichart>input,.phone>input,.qq>input {
    width: 40%;
  }
  /* 商品分类选择样式 */
  .classify>div:last-child {
    position: relative;
    width: 40% !important;
  }
  #classify {
    cursor: pointer;
    width: 100%;
  }
  #marker {
    line-height: 15px;
    text-align: center;
    /* font-size: 10px; */
    width: 15px;
    height: 15px;
    position: absolute;
    right: 0px;
    top: 12px;
    border: 1px solid red;
    cursor: pointer;
  }
  #marker:hover {
    background-color: #999;
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
  

  /* 上传图片的样式 */
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
  .submit {
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
