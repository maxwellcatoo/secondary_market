<template>
  <div id="homepage">
    <div id="content-header">
      <home-rotation></home-rotation>
      <goods-list :goods='goods'></goods-list>
      <pages></pages>
    </div>
  </div>
</template>

<script>
  import HomeRotation from './childComponents/HomeRotation'
  import GoodsList from '@/components/content/goods/GoodsList'
  import Pages from '@/components/common/page/Page'

  export default {
    name: "Homepage",
    components: {
      HomeRotation,GoodsList,Pages
    },
    data() {
      return {
        goods: [{imgSrc:'https://api.youzixy.com/public/uploads/attach/2020/05/09/5eb68e4492f77.png',goodsTitle:'衣品天成短袖',update:'2020-05-09',describe:'刚入手不久，全新',price:'49',school:'桂电'},{imgSrc:'https://api.youzixy.com/public/uploads/attach/2020/03/23/5e7801934da92.jpg',goodsTitle:'衣品天成短袖',update:'2020-05-09',describe:'刚入手不久，全新',price:'49',school:'桂电'},{imgSrc:'https://api.youzixy.com/public/uploads/attach/2020/03/17/5e7055632fc54.jpg',goodsTitle:'衣品天成短袖',update:'2020-05-09',describe:'刚入手不久，全新',price:'49',school:'桂电'},{imgSrc:'https://api.youzixy.com/public/uploads/attach/2020/03/03/5e5e155fe2e94.jpg',goodsTitle:'衣品天成短袖',update:'2020-05-09',describe:'刚入手不久，全新',price:'49',school:'桂电'},{imgSrc:'https://api.youzixy.com/public/uploads/attach/2020/02/29/5e5a7cde23b12.jpg',goodsTitle:'衣品天成短袖',update:'2020-05-09',describe:'刚入手不久，全新',price:'49',school:'桂电'},{imgSrc:'https://api.youzixy.com/public/uploads/attach/2020/02/22/5e50098a3cf9f.jpeg',goodsTitle:'衣品天成短袖',update:'2020-05-09',describe:'刚入手不久，全新',price:'49',school:'桂电'}]
      }
    }
  };
</script>

<style scoped>
  body,html {
    padding: 0;
    margin: 0;
    background-color: #F8F8F8;
  }
</style>
