<template>
  <div id="home-rotation">
    <!-- 分类列表 -->
    <classify id="classify"></classify>
    <!-- 轮播图 -->
    <rotation-chart>
      <rotation-item v-for="(item,index) in imgSrc" :key="index">
        <img :src="require(`@/assets/rotation/${item}.jpg`)" alt="图片未正常显示">
      </rotation-item>
    </rotation-chart>
    <!-- 排序方式 -->
    <order-type></order-type>
  </div>
</template>

<script>
import Classify from '@/components/content/rotation_chart/classify/Classify'
import {RotationChart,RotationItem} from '@/components/content/rotation_chart/index'
import OrderType from '@/components/content/rotation_chart/OrderType'

export default {
  name: 'HomeRotation',
  components: {
    Classify,RotationChart,RotationItem,OrderType
  },
  data() {
    return {
      imgSrc: ['first','second','third'],
      classifyIndex: 0,
      data:{}
    }
  },
  methods: {
    classifyItem(message) {
      this.classifyIndex = message
    }
  }

}
</script>

<style scoped>
  #home-rotation {
    /* overflow: hidden; */
    width: 70vw;
    height: calc(0.85 * 70vw / 1020 * 360 + 5vw);
    margin: 80px auto 0;
    position: relative;
    box-shadow: 1px 1px 10px 3px rgba(49, 50, 51, 0.1);
    border-radius: 10px;
    /* overflow: hidden; */
  }
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
