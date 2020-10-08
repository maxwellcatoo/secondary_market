<template>
  <div id="pages">
    <div class="pre">{{pre}}</div>

    <div class="page-index" :class="{active: index===pageIndex}" v-for="(item,index) in pageCounts"
     v-show="index===0||index===pageCounts-1||(index>pageIndex-4&&index<pageIndex+4)" :key="index">{{item}}</div>

    <div class="next">{{next}}</div>
    <div style="display:none" title="向前5页" class="ellipsis">...</div>
    <div style="display:none" title="向后5页" class="ellipsis">...</div>
  </div>
</template>

<script>
export default {
  name: 'Pages',
  data() {
    return {
      pre: '<',
      next: '>',
      pageIndex:0
    }
  },
  props: {
    pageCounts:{
      type: Number,
      default(){
        return 1
      }
    }
  },
  mounted() {
    // this.elipsis()
  },
  updated() {
    this.pageDl()
  },
  methods: {
    /**
     * 给每个翻页按钮赋予点击后翻页的功能
     * 每个点击事件都要运行一次  '判断向前或后翻五页按钮是否应该显现'  的elipsis函数
    */
    pageDl() {
      //-1.判断是否应该显示省略页码...标志
      this.elipsis()
      //0.获取元素
      let pageEls = document.getElementsByClassName('page-index')
      let pre = document.getElementsByClassName('pre')
      let next = document.getElementsByClassName('next')
      //1.所有数字页数赋予点击后翻到对应页的功能
      Array.from(pageEls).forEach((item,index) => {
        item.onclick = () => {
          this.pageIndex = index
          this.elipsis()
          this.turnPage()
        }
      })
      //2.向前一页
      pre[0].onclick = () => {
        if(this.pageIndex!==0){
          this.pageIndex--
          this.elipsis()
          this.turnPage()
        }
      }
      //3.向后一页
      next[0].onclick = () => {
        if(this.pageIndex!==this.pageCounts-1){
          this.pageIndex++
          this.elipsis()
          this.turnPage()
        }
      }
      //4.将前翻五页和后翻五页的元素在加载完成时就插入到对应的位置，等到该显现出来时直接将其display设置为inlineblock，该消失时设置为none
      let ellipsis = document.getElementsByClassName('ellipsis')
      if(pageEls[0]){
        pageEls[0].parentElement.insertBefore(ellipsis[0],pageEls[1])
        pageEls[0].parentElement.insertBefore(ellipsis[1],pageEls[this.pageCounts-1])
      }
      //5.点击向前（后）翻五页则翻五页
      ellipsis[0].onclick = () => {
        this.pageIndex -= 5
        this.elipsis()
        this.turnPage()
      }
      ellipsis[1].onclick = () => {
        this.pageIndex += 5
        this.elipsis()
        this.turnPage()
      }
    },
    //每翻一次页，更新要传给goodslist的内容
    turnPage() {
      this.$emit('turnPage',this.pageIndex)
    },
    /**
     * 在适当时机显示或隐藏‘向前翻五页’和‘向后翻五页’按钮
    */
    elipsis() {
      //0.获取元素
      let ellipsis = document.getElementsByClassName('ellipsis')
      let arr = Array.from(ellipsis)
      //1.判断向前翻五页后向后翻五页是否符合显示或隐藏条件，
      if(this.pageIndex>4){
        arr[0].style.display='inline-block'
      }else{
        arr[0].style.display='none'
      }
      if(this.pageIndex<this.pageCounts-5){
        arr[1].style.display='inline-block'
      }else{
        arr[1].style.display='none'
      }
    }
  }
}
</script>

<style scoped>
  #pages {
    margin: 100px auto 0;
    width: 70%;
    height: 80px;
    text-align: center;
  }
  .page-index,.pre,.next {
    width: 30px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    border: 1px solid #dcdee2;
    border-radius: 5px;
    margin-left: 10px;
    display: inline-block;
    cursor: pointer;
    background-color: #fff;
    font-size: 12px;
  }
  .ellipsis {
    width: 30px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    /* background-color: red; */
    margin-left: 10px;
    display: inline-block;
    cursor: pointer;
  }




  .active {
    border-color: #2d8cf0;
    color: #2d8cf0;
  }
</style>
