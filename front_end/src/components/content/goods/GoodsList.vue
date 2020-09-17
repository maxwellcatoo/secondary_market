<template>
  <div id="goods-list">
    <goods-item v-for="(item,index) in goods" :key="index">
      <img :src="item.imgSrc" alt="">
      <div class="title">{{item.goodsTitle}}</div>
      <div class="date"><div>{{item.update}}</div><div>1000人浏览</div></div>
      <div class="descri">{{item.describe}}</div>
      <div class="price"><div>￥{{item.price}}</div><div>{{item.school}}</div></div>
    </goods-item>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'

export default {
  name: 'GoodsList',
  components: {
    GoodsItem
  },
  data() {
    return {
      goods:[{imgSrc:'https://api.youzixy.com/public/uploads/attach/2020/05/09/5eb68e4492f77.png',goodsTitle:'衣品天成短袖',update:'2020-05-09',describe:'刚入手不久，全新',price:'49',school:'桂电'},{imgSrc:'https://api.youzixy.com/public/uploads/attach/2020/03/23/5e7801934da92.jpg',goodsTitle:'衣品天成短袖',update:'2020-05-09',describe:'刚入手不久，全新',price:'49',school:'桂电'},{imgSrc:'https://api.youzixy.com/public/uploads/attach/2020/03/17/5e7055632fc54.jpg',goodsTitle:'衣品天成短袖',update:'2020-05-09',describe:'刚入手不久，全新',price:'49',school:'桂电'},{imgSrc:'https://api.youzixy.com/public/uploads/attach/2020/03/03/5e5e155fe2e94.jpg',goodsTitle:'衣品天成短袖',update:'2020-05-09',describe:'刚入手不久，全新',price:'49',school:'桂电'},{imgSrc:'https://api.youzixy.com/public/uploads/attach/2020/02/29/5e5a7cde23b12.jpg',goodsTitle:'衣品天成短袖',update:'2020-05-09',describe:'刚入手不久，全新',price:'49',school:'桂电'},{imgSrc:'https://api.youzixy.com/public/uploads/attach/2020/02/22/5e50098a3cf9f.jpeg',goodsTitle:'衣品天成短袖',update:'2020-05-09',describe:'刚入手不久，全新',price:'49',school:'桂电'}],
      message: 'xiaoxi'
    }
  }
}
</script>

<style scoped>
  #goods-list {
    width: 70vw;
    margin: 20px auto 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  #goods-item {
    margin-top: 30px;
    width: 18.5%;
    height: auto;
    border-radius: 10px;
    overflow: hidden;
    font-size: 12px;
    color: #93999f;
    box-shadow: 0px 0px 2px 2px rgba(49, 50, 51, 0.1);
    background-color: #fff;
  }
  
  #goods-item>img {
    border-radius: 10px 10px 0 0;
    width: 100%;
    transition: all 300ms ease;
  }
  #goods-item>img:hover {
    transform: scale(1.1);
  }
  .title {
    width: 100%;
    height: 40px;
    margin-top: 15px;
    font-size: 15px;
    color: black;
  }
  .date {
    width: 100%;
    height: 20px;
  }
  .date>div {
    display: inline-block;
  }
  .date>div:last-child {
    margin-left: 30px;
  }
  .descri {
    width: 100%;
    height: 24px;
  }
  .price {
    display: inline-block;
    width: 100%;
    height: 24px;
  }
  .price>div:first-child {
    display: inline-block;
    color: #f2148e;
  }
  .price>div:last-child {
    display: inline-block;
    margin-left: 115px;
    color: #2d8cf0;
  }
  .title,.date,.descri,.price {
    padding: 0 5px;
  }
</style>
