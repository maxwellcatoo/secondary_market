<template>
  <div id="goods-item">
    <router-link :to="'/goods_info/'+iid" tag="div">
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'GoodsItem',
  data() {
    return {
    }
  },
  methods: {
    PageJump() {
      this.$router.push('/goods_info')
    }
  },
  props: {
    iid: Number
  }
}
</script>

<style lang="stylus">

</style>
