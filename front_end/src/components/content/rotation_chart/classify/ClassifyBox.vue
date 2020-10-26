<template>
  <div id="classifyBox">
    <div class="title">
      <div>{{classifyInfo.title}}</div>
    </div>
    <div class="item-box">
      <classify-box-item class="box-item" v-for="(item,index) in classifyInfo.data" :key="index">
        <div @click="setClassifyBoxId(classifyInfo.classifyid,item.classifyid)" >
          <img :src="require(`@/assets/classify/${item.imgsrc}`)" alt="菜">
          <span>{{item.title}}</span>
        </div>
      </classify-box-item>
    </div>
  </div>
</template>

<script>
import ClassifyBoxItem from './ClassifyBoxItem'

export default {
  name: 'ClassifyBox',
  components: {
    ClassifyBoxItem
  },
  data() {
    return {
    }
  },
  props: {
    classifyInfo:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    //将分类数据中的classifyInfo.classifyid和classifyInfo.data.classifyid拼接起来
    setClassifyBoxId(a,b) {
      this.$bus.$emit('getClassifyId',a+b)  //将分类id传送到主页，更新显现的商品
      this.$bus.$emit('turnPageToOne')  //每次点击分类id，都重新将page页调整至第一页
      // console.log(a+b)
      // this.$store.commit('getClassifyId',{a,b})
    }
  }
}
</script>

<style scoped>
  #classifyBox {
    position: absolute;
    top: 0px;
    left: 100%;
    width: 40vw;
    height: calc(0.85 * 70vw / 1020 * 360 + 5vw);
    z-index: 1;
    background-color: #fff;
    color: #000;
    /* border: 1px solid red; */
  }
  .title {
    margin: 0 10px;
    border-bottom: 1px solid #ccc;
    width: calc(100% - 20);
    height: 30px;
    text-align: center;
  }
  .title>div {
    width: 100px;
    background-color: #fff;
    position: relative;
    left: calc(50% - 50px);
    top: 20px;
  }
  .item-box {
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 0;
    left: 0;
    right: 0;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    font-size: 12px;
    padding-right: 15px;
    padding-left: 15px;
    overflow: auto;
  }
  .box-item {
    width: 14%;
    text-align: center;
    margin-bottom: 5px;
    margin: 10px 6px;
  }
  .box-item:hover {
    color: #2d8cf0;
  }
  .box-item>div>img {
    width: 100%;
    /* height: 100%;  */
    /* height: 50px;
    width: 50px; */
  }
</style>
