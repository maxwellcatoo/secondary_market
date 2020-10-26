<template>
  <div id="homepage">
    <div id="content-header">
      <home-rotation></home-rotation>
      <goods-list :goods='goodsDataToList'></goods-list>
      <pages @turnPage=turnPage :pageCounts='pageCounts'></pages>
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
        goodsData: [], //页面加载时获取所有数据，用来给goodsDataTransmit提供所有数据

        goodsDataTransmit: [], //主要用来存储当前分类下的商品数据，未点击商品分类时为所有商品

        goodsDataTransmitSort: [], //排好序的要发到组件goodslist中的数据

        goodsDataCount: 0, //发送到子组件中的数据个数
        pageCounts: 0, //页数
        pageStart: 0, //所在页的开始数据属于第几条数据
        pageItems: 10, //每一页包含多少数据
        classifyId: '', //商品分类id
      }
    },
    created() {
      this.getGoodsData()
    },
    mounted() {
      //点击分类查询时，触发
      this.$bus.$on('getClassifyId',(classid) => {
      // console.log(classid)
      this.getGoodsDataTransformit(classid)
      })
      //点击排序方式后，触发该函数
      this.$bus.$on('orderRuleTransmit',(rule) => {
      // console.log(typeof(rule))
      this.goodsDataTransmitSort = this.goodsDataTransmit.sort(this.orderRuleSort(rule))
      // console.log(this.goodsDataTransmit)
      })
    },
    computed: {
      goodsDataToList() {
        return this.goodsDataTransmitSort.slice(this.pageStart,this.pageStart + this.pageItems)
      },
    },
    methods: {
      //1.（方法）创建页面时将数据存储到data中
      getGoodsData() {
        //通过后台接口访问数据
        getHomepage().then(res => {
          // console.log(typeof(res.data[0].price))
          res.data.reverse()
          this.goodsData = res.data
          this.goodsDataTransmit = res.data //

          this.goodsDataTransmitSort = res.data  //初次加载并没有点击排序方式，且初次的排序方式和默认排序方式相同，所以在这里给排好序要传给goodslist组件的goodsDataTransmitSort赋值

          this.goodsDataCount = res.data.length //总数据数，用来计算页数
          this.pageCounts = Math.ceil(this.goodsDataCount/this.pageItems) //页数,取的ceil，这个数是真实等于页数的
          // console.log(res.data.length)
          
          // this.$store.commit('getClassData',res.data)
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
      },
      //给sort排序判断条件
      orderRuleSort(rule){
        return function(a,b){
          switch(rule) {
            case '00':
              return Date.parse(b.date) - Date.parse(a.date)
              // break;
            case '01':
              return Date.parse(a.date) - Date.parse(b.date)
              // break;
            case '10':
              return a.price - b.price
              // break;
            case '11':
              return b.price - a.price
              // break;
            case '20':
              return b.watch_times - a.watch_times
              // break;
            case '21':
              return a.watch_times - b.watch_times
              // break;
          }
        }
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
