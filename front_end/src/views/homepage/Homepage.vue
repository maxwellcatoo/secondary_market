<template>
  <div id="homepage">
    <div id="content-header">
      <home-rotation></home-rotation>
      <goods-list></goods-list>
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
  };
</script>

<style scoped>
  body,html {
    padding: 0;
    margin: 0;
    background-color: #F8F8F8;
  }
</style>
