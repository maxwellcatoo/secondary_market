<template>
  <div id="discuss">
    <!-- 校园热点轮播图 -->
    <discuss-swiper></discuss-swiper>

    <!-- 论坛 -->
    <discuss-list></discuss-list>
  </div>
</template>

<script>
  import DiscussSwiper from './childDiscuss/DiscussSwiper'
  import DiscussList from './childDiscuss/DiscussList'

  export default {
    name: "Discuss",
    components: {
      DiscussSwiper,DiscussList
    },
  };
</script>

<style scoped>
</style>
