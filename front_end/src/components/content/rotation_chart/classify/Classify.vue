<template>
  <div id="classify">
    <classify-item class="classify-item" v-for="(item,index) in classifyData" :key="index">
      <span>{{ item.title }}&emsp;</span><span>&emsp;<svg t="1600230200678" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1649" width="10" height="10"><path d="M385.536 102.4l398.848 364.544c12.288 10.752 19.456 26.624 19.456 43.008s-7.168 32.256-19.456 43.008l-398.848 364.544c-18.944 17.92-46.08 23.552-70.656 14.336s-40.96-31.232-43.52-57.344V145.408c2.048-26.112 18.944-48.128 43.52-57.344 24.064-9.216 51.712-3.584 70.656 14.336z" fill="#aaaaaa" p-id="1650"></path></svg></span> 
      <!-- <div id="item">{{item.title}}</div> -->
    </classify-item>
    <classify-box :classifyInfo=classifyData[classifyIndex] id="classifyBox" style="display:none"></classify-box>
  </div>
</template>

<script>
import ClassifyItem from './ClassifyItem'
import ClassifyBox from './ClassifyBox'

export default {
  name: 'Classify',
  components: {
    ClassifyItem,ClassifyBox
  },
  data() {
    return {
      classifyData: [
        {title:'数码产品',
        data:[
          {title:'手机',imgsrc:"shuma/phone.jpg"},
          {title:'平板',imgsrc:"shuma/ipad.jpg"},
          {title:'笔记本',imgsrc:"shuma/notebook.png"},
          {title:'台式机',imgsrc:"shuma/computer.jpg"},
          {title:'手表手环',imgsrc:"shuma/watch.jpg"},
          {title:'单反相机',imgsrc:"shuma/camera.jpg"},
          {title:'充电宝',imgsrc:"shuma/battery.jpg"},
          {title:'耳机',imgsrc:"shuma/headset.jpg"},
          {title:'手机配件',imgsrc:"shuma/mobileAcc.jpg"},
          {title:'电脑配件',imgsrc:"shuma/computerAcc.jpg"},
          {title:'路由器',imgsrc:"shuma/router.jpg"},
          {title:'其他',imgsrc:"shuma/others.png"}
          ]
          },
      
      {title:'书籍教材'},
      
      {title:'衣鞋帽伞'},
      
      {title:'代步工具'},
      
      {title:'体育健身'},
      
      {title:'家用电器'},
      
      {title:'日常用品'},
      
      {title:'虚拟产品'},
      
      {title:'手工设计'},
      
      {title:'乐器'},
      
      {title:'其他'}],
      classifyIndex: 0
    }
  },
  mounted() {
    this.classifyItemHover()
    // console.log(this.data)
  },
  methods: {
    classifyItemHover() {
      let itemEl = document.getElementsByClassName('classify-item')
      let classifyBox = document.getElementById('classifyBox')

      Array.from(itemEl).forEach((item,index) => {
        item.onmouseover = () => {
          this.classifyIndex = index
          classifyBox.style.display = 'block'
        }
      });
      classifyBox.onmouseover = () => {
        classifyBox.style.display = 'block'
      }

      Array.from(itemEl).forEach((item) => {
        item.onmouseleave = () => {
          classifyBox.style.display = 'none'
        }
      });
      classifyBox.onmouseleave = () => {
          classifyBox.style.display = 'none'
      }
    }
  },
  props: {
    data: Object
  }
}
</script>

<style scoped>
  #classify {
    position: relative;
    padding: 10px 0;
    text-align: center;
    width: calc(0.15 * 70vw);
    height: calc(100% - 20px);
    float: left;
    background-color: #2b333b;
    color: #aaaaaa;
    cursor: pointer;
    border-radius: 10px 0 0 10px;
    font-size: 13px;
  }
  /* #classify::-webkit-scrollbar {
    display: none;
  } */
  .classify-item>div {
    height: 100%;
    margin: 0;
  }
  .classify-item {
    /* vertical-align: text-bottom; */
    height: 9%;
    line-height: calc((0.85 * 70vw / 1020 * 360 + 5vw) * 0.09);
    /* line-height: 300%; */
  }
  .classify-item:hover {
    background-color: #6b7176;
  }
</style>
