<template>
  <div id="purchase">
    <purchase-info :info=dataInfoTo></purchase-info>
    <pages v-show="isLoad" :pageCounts='pageCounts' @turnPage=turnPage></pages>
  </div>
</template>

<script>
  import PurchaseInfo from './child/PurchaseInfo'
  import Pages from '@/components/common/page/Page'

  import {purchase} from '../../network/purchase'

  export default {
    name: "Purchase",
    components: {
      PurchaseInfo,Pages
    },
    data() {
      return {
        dataInfo: [],
        isLoad: false,
        pageStart: 0,
        pageItems: 2,
        pageCounts: 0
      }
    },
    created() {
      this.getPurchaseData()
    },
    computed: {
      dataInfoTo() {
        return this.dataInfo.slice(this.pageStart,this.pageStart+this.pageItems)
      }
    },
    methods: {
      getPurchaseData() {
        purchase().then(res => {
          this.dataInfo = res.data
          this.isLoad = true
          this.pageCounts = Math.ceil(res.data.length/this.pageItems)
          console.log(this.pageCounts,this.dataInfo.length)
        })
      },
      turnPage(page) {
        this.pageStart = page*this.pageItems
      }
    }
  };
</script>

<style scoped>
</style>
