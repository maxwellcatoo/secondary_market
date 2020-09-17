<template>
  <div id="orderType">
      <div class="orderType-school"><div>所有学校</div></div>
      <div>
        <div class="orderTypeItem" :class="{active:index===currentIndex}" v-for="(item,index) in orderTypeItem" :key="index">{{item.value}}
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'OrderTypeDiscuss',
  data() {
    return {
      currentIndex: 0,
      orderTypeItem: [{value:'最新发表'},{value:'最新回复'},{value:'浏览量'}]
    }
  },
  mounted() {
    this.orderTypeDl()
  },
  methods: {
    orderTypeDl() {
      let orderTypeEl = document.getElementsByClassName('orderTypeItem')
      Array.from(orderTypeEl).forEach((item,index) => {
        item.onclick=() => {
          if(this.currentIndex === index){
            // this.orderTypeItem[index].order = !this.orderTypeItem[index].order
          }
          //点击一个时，其他的排序方式变为箭头向下
          // let next = index+1>2?index-2:index+1
          // let pre = index-1<0?index+2:index-1
          // this.orderTypeItem[pre].order = true
          // this.orderTypeItem[next].order = true

          this.currentIndex = index
        }
      })
      // Array.from(orderTypeEl).forEach((item) => {
      //   item.onclick = function() {
      //     Array.from(orderTypeEl).forEach((item) => {
      //       item.classList.remove('active')
      //     })
      //     item.classList.add('active')
      //     console.log(item.classList)
      //   }
      // })
    },

  }
}
</script>

<style scoped>
   #orderType {
    position: absolute;
    left: 15%;
    top: calc(0.85 * 70vw / 1020 * 360);
    bottom: 0;
    right: 0;
    background-color: white;
    border-radius: 0 0 10px 0;
    font-size: 13px;
    /* background-color: red; */
  }
  .orderType-school {
    position: relative;
    top: 1vw;
    width: 100%;
    height: 30px;
  }
  .orderType-school>div {
    width: 70px;
    text-align: center;
    border: 1px solid #ebeaec;
    border-radius: 2px;
    cursor: pointer;
    margin-left: 2vw;
    font-size: 14px;
  }
  #orderType>div:last-child {
    position: absolute;
    bottom: 0.35vw;
    width: 100%;
    height: 30px;
    text-align: center;
  }
  .orderTypeItem {
    display: inline-block;
    width: 120px;
    cursor: pointer;
  }
  .active {
    color: #2d8cf0;
  }
</style>
