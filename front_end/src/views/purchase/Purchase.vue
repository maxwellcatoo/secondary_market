<template>
  <div id="purchase">
    <purchase-info></purchase-info>
    <pages></pages>
  </div>
</template>

<script>
  import PurchaseInfo from './child/PurchaseInfo'
  import Pages from '@/components/common/page/Page'

  export default {
    name: "Purchase",
    components: {
      PurchaseInfo,Pages
    },
  };
</script>

<style scoped>
</style>
