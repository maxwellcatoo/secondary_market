<template>
  <div id="pages">
    <div class="pre">{{pre}}</div>

    <div class="page" :class="{active: index===pageIndex}" v-for="(item,index) in 15"
     v-show="index===0||index===14||index>pageIndex-3&&index<pageIndex+3" :key="item">{{item}}</div>

    <div class="next">{{next}}</div>
    <div style="display:none" title="向前5页" class="ellipsis">...</div>
    <div style="display:inline-block" title="向后5页" class="ellipsis">...</div>
  </div>
</template>

<script>
export default {
  name: 'Pages',
  data() {
    return {
      pre: '<',
      next: '>',
      pageCount: 15,//一共有多少页是应该根据HomePage页的条件来查询有多少条数据，然后除以每页的数据数算出来，然后用props传过来的，这里因为没有数据，直接赋值
      pageIndex:0
    }
  },
  mounted() {
    this.pageDl()
    this.elipsis()
  },
  methods: {
    /**
     * 给每个翻页按钮赋予点击后翻页的功能
     * 每个点击事件都要运行一次  '判断向前或后翻五页按钮是否应该显现'  的elipsis函数
    */
    pageDl() {
      //0.获取元素
      let pageEls = document.getElementsByClassName('page')
      let pre = document.getElementsByClassName('pre')
      let next = document.getElementsByClassName('next')
      //1.所有数字页数赋予点击后翻到对应页的功能
      Array.from(pageEls).forEach((item,index) => {
        item.onclick = () => {
          this.pageIndex = index
          this.elipsis()
        }
      })
      //2.向前一页
      pre[0].onclick = () => {
        if(this.pageIndex!==0){
          this.pageIndex--
          this.elipsis()
        }
      }
      //3.向后一页
      next[0].onclick = () => {
        if(this.pageIndex!==14){
          this.pageIndex++
          this.elipsis()
        }
      }
      //4.将前翻五页和后翻五页的元素在加载完成时就插入到对应的位置，等到该显现出来时直接将其display设置为inlineblock，该消失时设置为none
      let ellipsis = document.getElementsByClassName('ellipsis')
      pageEls[0].parentElement.insertBefore(ellipsis[0],pageEls[3])
      pageEls[0].parentElement.insertBefore(ellipsis[1],pageEls[14])
      //5.点击向前（后）翻五页则翻五页
      ellipsis[0].onclick = () => {
        this.pageIndex -= 5
        this.elipsis()
      }
      ellipsis[1].onclick = () => {
        this.pageIndex += 5
        this.elipsis()
      }
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
      if(this.pageIndex<10){
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
    height: 100px;
    text-align: center;
  }
  .page,.pre,.next {
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
