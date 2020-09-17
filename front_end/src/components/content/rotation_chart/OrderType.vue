<template>
  <div id="orderType">
      <div class="orderType-school"><div>所有学校</div></div>
      <div>
        <div class="orderTypeItem" :class="{active:index===currentIndex}" v-for="(item,index) in orderTypeItem" :key="index">{{item.value}}
          <span v-if="currentIndex!==index"></span>
          <span v-else-if="orderTypeItem[index].order"><svg t="1600242786057" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="702" width="12" height="12"><path d="M511.99011254 141.21142578c10.23376465 0 18.95471191 3.60900903 26.2122798 10.81713891 7.25262451 7.20812988 10.86657691 15.96862769 10.86657763 26.2666626v577.89129615l196.1619873-196.43884254c7.099365-7.00543237 15.90435815-10.61444068 26.34082031-10.61444139 10.61938477 0 19.43426538 3.50518822 26.51385474 10.51062059 7.04498291 7.10430908 10.54522705 15.96862769 10.54522706 26.57318092 0 10.40679908-3.54473877 19.16235352-10.69354248 26.37542748l-259.55694604 259.48278761C531.23156714 879.28833008 522.44635033 882.78857422 512.00988746 882.78857422c-10.45623779 0-19.24145531-3.50024414-26.3704834-10.71331811l-259.55200195-259.48278761C218.94848656 605.37939453 215.36914062 596.62384009 215.36914062 586.21704102c0-10.60949731 3.52496314-19.46887183 10.56994606-26.57318092C232.99395776 552.63842773 241.82861328 549.12829614 252.44799805 549.12829614c10.42163062 0 19.2167356 3.60900903 26.36553931 10.61444068l196.1125493 196.43884253V178.29522729c0-10.30297828 3.60900903-19.05853271 10.88635255-26.2666626C493.05517555 144.81549073 501.80084252 141.21142578 512.02966309 141.21142578h-0.03955055z" p-id="703" fill="#2d8cf0"></path></svg></span>
          <span v-else><svg t="1600242869788" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="938" width="12" height="12"><path d="M512.00988746 141.21142578c10.45623779 0 19.24145531 3.50024414 26.37542748 10.71331811l259.5421145 259.55200196C805.03668189 418.58105492 808.63085938 427.33660865 808.63085938 437.84228516c0 10.60949731-3.53485132 19.46887183-10.56994606 26.46936011-7.02026391 7.00543237-15.88952661 10.60949731-26.50891137 10.60949731-10.44140625 0-19.22167969-3.60900903-26.35565185-10.71331811L549.09863305 267.79370094V845.7097168c0 10.19915748-3.62384057 18.94976782-10.89624071 26.16284179-7.23284888 7.31195068-15.97357177 10.91601563-26.2122798 10.91601563-10.23376465 0-18.959656-3.60900903-26.22216796-10.91601563-7.24273705-7.21307397-10.87646508-15.96862769-10.87646508-26.16284179V267.79370094l-196.10760522 196.41906761C271.65484619 471.31213355 262.87951684 474.92114258 252.41833496 474.92114258c-10.61938477 0-19.45898438-3.60900903-26.4990232-10.60949731C218.86444068 457.31115699 215.36914062 448.45178247 215.36914062 437.84228516c0-10.50567651 3.55462623-19.26123023 10.69354248-26.36553931l259.53717042-259.55200196C492.7288816 144.71166992 501.52398658 141.21142578 511.97033691 141.21142578h0.03955055z" p-id="939" fill="#2d8cf0"></path></svg></span>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'OrderType',
  data() {
    return {
      currentIndex: 0,
      orderTypeItem: [{value:'时间',order:true},{value:'价格',order:true},{value:'浏览量',order:true}]
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
            this.orderTypeItem[index].order = !this.orderTypeItem[index].order
          }
          //点击一个时，其他的排序方式变为箭头向下
          let next = index+1>2?index-2:index+1
          let pre = index-1<0?index+2:index-1
          this.orderTypeItem[pre].order = true
          this.orderTypeItem[next].order = true

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
    width: 70px;
    cursor: pointer;
  }
  .active {
    color: #2d8cf0;
  }
</style>
