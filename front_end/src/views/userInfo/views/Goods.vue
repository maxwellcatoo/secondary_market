<template>
  <div id="box">
    <div id="goods">
      <goods-list :goods="goods"></goods-list>
    </div>
  </div>
</template>

<script>
import GoodsList from '../../../components/content/goods/GoodsList'

export default {
  name: 'Goods',
  components: {
    GoodsList
  },
  data() {
    return {
      goods: [{imgSrc:'https://api.youzixy.com/public/uploads/attach/2020/05/09/5eb68e4492f77.png',goodsTitle:'衣品天成短袖',update:'2020-05-09',describe:'刚入手不久，全新',price:'49',school:'桂电'},{imgSrc:'https://api.youzixy.com/public/uploads/attach/2020/05/09/5eb68e4492f77.png',goodsTitle:'衣品天成短袖',update:'2020-05-09',describe:'刚入手不久，全新',price:'49',school:'桂电'},{imgSrc:'https://api.youzixy.com/public/uploads/attach/2020/05/09/5eb68e4492f77.png',goodsTitle:'衣品天成短袖',update:'2020-05-09',describe:'刚入手不久，全新',price:'49',school:'桂电'},{imgSrc:'https://api.youzixy.com/public/uploads/attach/2020/05/09/5eb68e4492f77.png',goodsTitle:'衣品天成短袖',update:'2020-05-09',describe:'刚入手不久，全新',price:'49',school:'桂电'},{imgSrc:'https://api.youzixy.com/public/uploads/attach/2020/05/09/5eb68e4492f77.png',goodsTitle:'衣品天成短袖',update:'2020-05-09',describe:'刚入手不久，全新',price:'49',school:'桂电'},{imgSrc:'https://api.youzixy.com/public/uploads/attach/2020/05/09/5eb68e4492f77.png',goodsTitle:'衣品天成短袖',update:'2020-05-09',describe:'刚入手不久，全新',price:'49',school:'桂电'}]
    }
  }
}
</script>

<style scoped>
  
</style>
