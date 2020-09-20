<template>
  <div id="Release">
    <purchase-info :info=info></purchase-info>
  </div>
</template>

<script>
import PurchaseInfo from '../../purchase/child/PurchaseInfo'

export default {
  name: 'Release',
  components: {
    PurchaseInfo
  },
  data() {
    return {
      info: [{imgSrc:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1625322132,835120392&fm=26&gp=0.jpg',username:'热心网友',school:'华北水利水电大学',update:'2020-01-06',title:'二手手机',describe:'小米、华为、苹果',phone:'手机：13279289285',nav:'原装正品'},]
    }
  }
}
</script>

<style scoped>

</style>
