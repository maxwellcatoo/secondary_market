<template>
  <div>
    <div id="goods-list">
      <goods-item id="goodsitem" :iid="item.goods_id" v-for="(item,index) in goods" :key="index">
        <img :src="item.imgurl1?baseHost+item.imgurl1:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1704354617,2285391646&fm=26&gp=0.jpg'" alt="">
        <div class="title">{{item.title}}</div>
        <div class="date"><div>{{item.date | dateTime}}</div><div>{{item.watch_times}}人浏览</div></div>
        <div class="descri">{{item.describe}}</div>
        <div class="price"><div>￥{{item.price}}</div><div>{{item.school}}</div></div>
      </goods-item>
    </div>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'
import {myMixin} from '../../../common/mixin'

export default {
  name: 'GoodsList',
  components: {
    GoodsItem
  },
  mixins: [myMixin],
  data() {
    return {
      // goodListInfo: []
    }
  },
  watch: {
      // goods (val){
      //   this.goods = val.
      // }
  },
  methods: {
  },
  filters: {
    dateTime(date){
      if(date){
        return date.slice(0,10)
      }
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
  #goodsitem {
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
  
  #goodsitem img {
    border-radius: 10px 10px 0 0;
    width: 100%;
    transition: all 300ms ease;
  }
  #goodsitem img:hover {
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
    float: right;
    margin-right: 10px;
  }
  .descri {
    width: 100%;
    height: 24px;
  }
  .price {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 24px;
  }
  .price>div:first-child {
    float: left;
    margin-left: 0;
    color: #f2148e;
  }
  .price>div:last-child {
    color: #2d8cf0;
    margin-right: 10px;
    float: right;
  }
  .title,.date,.descri,.price {
    padding: 0 5px;
  }
</style>
