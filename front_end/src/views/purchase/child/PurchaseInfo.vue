<template>
  <div id="purchase-info">
    <div id="purchase-info-space"></div>

    <purchase-info-item class='box' v-for="(item,index) in info" :key="index">
      <div class="user">
        <img :src="item.imgSrc?item.imgSrc:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1625322132,835120392&fm=26&gp=0.jpg'" alt=""><span>{{item.username}}</span><span>{{item.school}}</span><span>{{item.update}}</span>
      </div>

      <div class="title">{{item.title}}</div>
      <div class="desc">{{item.describes}}</div>
      <div class="phone">{{item.phone}}</div>
      <!-- <div class="nav">{{item.nav}}</div> -->
      <img class=img :src="item.imgsrc?(baseHost+item.imgsrc):('')" alt="">
    </purchase-info-item>
    
  </div>
</template>

<script>
import PurchaseInfoItem from './PurchaseInfoItem'

import {myMixin} from '../../../common/mixin'

export default {
  name: 'PurchaseInfo',
  components: {
    PurchaseInfoItem
  },
  mixins: [myMixin],
  mounted() {
    setTimeout(() => {
      // console.log(this.info)
    }, 3000);
  },
  props: {
    info: {
        type: Array,
        default() {
          return []
      }
    }
  }
}
</script>


<style scoped>
  #info-item {
    width: 60vw;
    border: 1px solid #e8eaec;
    /* border: 1px solid red; */
    border-radius: 5px;
    box-shadow: 1px 1px 10px 3px rgba(50, 50, 50, 0.1);
    margin: 20px auto;
    background-color: #ffffff;
  }
  #info-item>div {
    margin: 15px;
  }

  .box {
    position: relative;
  }
  /* 第一行样式 */
  .user {
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    color: #808695;
  }
  .user>img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
  .user>span:nth-child(2) {
    font-size: 14px;
    color: black;
  }
  .user>span {
    display: inline;
    margin-left: 15px;
    position: relative;
    top: -13px;
  }
  /* 标题样式 */
  .title {
    font-size: 15px;
    font: bold;
  }
  .desc {
    color: #946776;
    font-size: 14px;
  }
  .phone {
    color: #888888;
    font-size: 13px;
  }
  .nav {
    width: 60px;
    height: 20px;
    line-height: 20px;
    border: 1px solid #d8d8d8;
    border-radius: 5px;
    text-align: center;
    font-size: 12px;
    color:#777;
  }
  .img {
    position: absolute;
    height: 100px;
    width: 100px;
    right: 10px;
    top: 20px;
  }
</style>
