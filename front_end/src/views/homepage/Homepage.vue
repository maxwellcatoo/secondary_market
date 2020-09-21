<template>
  <div id="homepage">
    <div id="content-header">
      <home-rotation></home-rotation>
      <goods-list :goods='goodsDataTransmit'></goods-list>
      <pages @turnPage=turnPage :pageCounts='pageCounts'></pages>
    </div>
  </div>
</template>

<script>
  import HomeRotation from './childComponents/HomeRotation'
  import GoodsList from '@/components/content/goods/GoodsList'
  import Pages from '@/components/common/page/Page'

  import {request} from '../../network/axios'

  export default {
    name: "Homepage",
    components: {
      HomeRotation,GoodsList,Pages
    },
    data() {
      return {
        goodsData: [],
        goodsDataCount: 0,
        pageCounts: 0,
        pageStart: 0,
        pageEnd: 1,
        pageItems: 1
      }
    },
    created() {
      this.getGoodsData()
    },
    computed: {
      goodsDataTransmit() {
        return this.goodsData.slice(this.pageStart,this.pageEnd)
      }
    },
    methods: {
      getGoodsData() {
        request().then(res => {
          this.goodsData = res.data
          this.goodsDataCount = this.goodsData.length
          this.pageCounts = this.goodsDataCount/this.pageItems
          // console.log(this.goodsData)
        })
      },
      turnPage(page) {
        this.pageStart = page * this.pageItems
        this.pageEnd = (page+1) * this.pageItems
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
