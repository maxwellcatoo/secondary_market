<template>
  <div id="classify">
    <classify-item v-for="(item,index) in classifyData" :key="index">
      <div style="display:inline-block">{{ item }}&emsp;</div><span>&emsp;<svg t="1600230200678" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1649" width="10" height="10"><path d="M385.536 102.4l398.848 364.544c12.288 10.752 19.456 26.624 19.456 43.008s-7.168 32.256-19.456 43.008l-398.848 364.544c-18.944 17.92-46.08 23.552-70.656 14.336s-40.96-31.232-43.52-57.344V145.408c2.048-26.112 18.944-48.128 43.52-57.344 24.064-9.216 51.712-3.584 70.656 14.336z" fill="#aaaaaa" p-id="1650"></path></svg></span> 
    </classify-item>
  </div>
</template>

<script>
import ClassifyItem from './ClassifyItem'

export default {
  name: 'Classify',
  components: {
    ClassifyItem
  },
  data() {
    return {
      classifyData: ['数码产品','书籍教材','衣鞋帽伞','代步工具','书籍教材','衣鞋帽伞','代步工具','书籍教材','衣鞋帽伞','代步工具','书籍教材','衣鞋帽伞','代步工具','书籍教材','衣鞋帽伞','代步工具','书籍教材','衣鞋帽伞','代步工具']
    }
  }
}
</script>

<style scoped>
  #classify {
    padding: 10px 0;
    text-align: center;
    width: calc(0.15 * 70vw);
    height: calc(100% - 20px);
    /* border: 1px solid red; */
    float: left;
    background-color: #2b333b;
    color: #aaaaaa;
    cursor: pointer;
    border-radius: 10px 0 0 10px;
    overflow: auto;
    font-size: 15px;
  }
  #classify::-webkit-scrollbar {
    display: none;
  }
</style>
