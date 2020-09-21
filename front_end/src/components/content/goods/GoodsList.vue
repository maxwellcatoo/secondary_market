<template>
  <div>
    <div id="goods-list">
      <goods-item v-for="(item,index) in goods" :key="index">
        <img :src="item.imgurl" alt="">
        <div class="title">{{item.title}}</div>
        <div class="date"><div>{{item.update}}</div><div>1000人浏览</div></div>
        <div class="descri">{{item.describe}}</div>
        <div class="price"><div>￥{{item.price}}</div><div>{{item.old_price}}</div></div>
      </goods-item>
    </div>
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
      
    }
  },
  props: {
    goods: Array
  }
}
</script>

<style scoped>
  #goods-list {
    width: 70vw;
    margin: 20px auto 0;
    display: flex;
    justify-content: space-around;
    align-content: flex-start;
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
    box-shadow: 0 0 10px 3px rgba(49, 50, 51, 0.1);
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
