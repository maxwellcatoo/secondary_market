<template>
  <div id="homepage">
    <div id="content-header">
      <home-rotation></home-rotation>
      <goods-list :goods='goodsDataToList'></goods-list>
      <pages v-show="isLogin" @turnPage=turnPage :pageCounts='pageCounts'></pages>
    </div>
  </div>
</template>

<script>
  import HomeRotation from './childComponents/HomeRotation'
  import GoodsList from '@/components/content/goods/GoodsList'
  import Pages from '@/components/common/page/Page'

  import {getHomepage} from '../../network/homepage'

  export default {
    name: "Homepage",
    components: {
      HomeRotation,GoodsList,Pages
    },
    data() {
      return {
        isLogin: false,
        goodsData: [], //页面加载时获取所有数据
        goodsDataTransmit: [], //经挑选后发送到子组件中goodslist中的数据
        goodsDataCount: 0, //发送到子组件中的数据个数
        pageCounts: 0, //页数
        pageStart: 0, //所在页的开始数据属于第几条数据
        pageItems: 2, //每一页包含多少数据
        classifyId: ''
      }
    },
    created() {
      this.getGoodsData()
    },
    mounted() {
      this.$bus.$on('getClassifyId',(classid) => {
        console.log(classid)
        this.getGoodsDataTransformit(classid)
      })
    },
    computed: {
      goodsDataToList() {
        return this.goodsDataTransmit.slice(this.pageStart,this.pageStart + this.pageItems)
      },
      // pageCountsToPages() {
      //   return this.pageCounts
      // }
    },
    methods: {
      //1.（方法）创建页面时将数据存储到data中
      getGoodsData() {
        //通过后台接口访问数据
        getHomepage().then(res => {
          this.goodsData = res.data
          this.goodsDataTransmit = res.data
          this.goodsDataCount = res.data.length //总数据数，用来计算页数
          this.pageCounts = Math.ceil(this.goodsDataCount/this.pageItems) //页数,取的ceil，这个数是真实等于页数的
          // console.log(res.data.length)
          
          // this.$store.commit('getClassData',res.data)
          this.isLogin = true
        })
      },
      //2.(方法)处理要发送给goodslist组件的数据
      getGoodsDataTransformit(classid) {
        this.classifyId = classid
        if(this.classifyId !== ''){
          this.goodsDataTransmit = this.goodsData.filter(item => {return item.classify_id === this.classifyId})
        }else{
          this.goodsDataTransmit = this.goodsData
        }
        this.pageCalculation()
      },
      //计算要传给goodslist中的数据量和数据页码数并传给goodslist组件
      pageCalculation() {
        this.goodsDataCount = this.goodsDataTransmit.length
        this.pageCounts = Math.ceil(this.goodsDataCount/this.pageItems)
      },
      //page组件点击翻页后触发该事件，修改pagestart数据，从而调整传递给goodslist的数据
      turnPage(page) {
        this.pageStart = page * this.pageItems
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
