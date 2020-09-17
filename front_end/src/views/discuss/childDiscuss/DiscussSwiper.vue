<template>
  <div>
    <!-- 校内热点题头 -->
    <div id="news">
      <span><svg t="1600342947073" class="icon" viewBox="0 0 1114 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3234" width="25" height="25"><path d="M301.176471 428.122353l783.058823 0 0 559.284706-783.058823 0 0-559.284706Z" fill="#FFCB57" p-id="3235"></path><path d="M933.647059 1024H180.705882A180.705882 180.705882 0 0 1 0 843.294118V391.529412a180.705882 180.705882 0 0 1 180.705882-180.705883h752.941177a180.705882 180.705882 0 0 1 180.705882 180.705883v451.764706a180.705882 180.705882 0 0 1-180.705882 180.705882zM180.705882 271.058824a120.470588 120.470588 0 0 0-120.470588 120.470588v451.764706a120.470588 120.470588 0 0 0 120.470588 120.470588h752.941177a120.470588 120.470588 0 0 0 120.470588-120.470588V391.529412a120.470588 120.470588 0 0 0-120.470588-120.470588z" fill="#472D22" p-id="3236"></path><path d="M331.294118 828.235294a180.705882 180.705882 0 1 1 180.705882-180.705882 180.705882 180.705882 0 0 1-180.705882 180.705882z m0-301.17647a120.470588 120.470588 0 1 0 120.470588 120.470588 120.470588 120.470588 0 0 0-120.470588-120.470588zM722.823529 752.941176a30.117647 30.117647 0 0 1-30.117647-30.117647V557.176471a30.117647 30.117647 0 0 1 60.235294 0v165.647058a30.117647 30.117647 0 0 1-30.117647 30.117647zM933.647059 752.941176a30.117647 30.117647 0 0 1-30.117647-30.117647V557.176471a30.117647 30.117647 0 0 1 60.235294 0v165.647058a30.117647 30.117647 0 0 1-30.117647 30.117647zM828.235294 813.176471a30.117647 30.117647 0 0 1-30.117647-30.117647V496.941176a30.117647 30.117647 0 0 1 60.235294 0v286.117648a30.117647 30.117647 0 0 1-30.117647 30.117647zM873.411765 256a30.117647 30.117647 0 0 1-21.232941-8.884706l-195.764706-195.764706a30.117647 30.117647 0 0 1 0-42.465882 30.117647 30.117647 0 0 1 42.465882 0l195.764706 195.764706A30.117647 30.117647 0 0 1 873.411765 256z" fill="#472D22" p-id="3237"></path></svg></span><span>校园热点</span><span>/NEWS</span>
    </div>

    <div id="discuss-swiper">
      <!-- 轮播图 -->
      <rotation-chart>
        <rotation-item v-for="item in imgSrc" :key="item">
          <img :src="require(`@/assets/rotation/${item}.jpg`)" alt="图片未正常显示">
        </rotation-item>
      </rotation-chart>
      <!-- 排序方式 -->
      <order-type-discuss></order-type-discuss>
    </div>
  </div>
</template>

<script>
import {RotationChart,RotationItem} from '@/components/content/rotation_chart/index'
import OrderTypeDiscuss from './OrderTypeDiscuss'

export default {
  name: 'DiscussSwiper',
  components: {
    RotationChart,RotationItem,OrderTypeDiscuss
  },
  data() {
    return {
      imgSrc: ['first','second','third'],
    }
  }
}
</script>

<style scoped>
  #news {
    position: relative;
    left: 25vw;
    top: 1.5vw;
    height: 40px;
    line-height: 40px;
    width: 300px;
    /* border: 1px solid red; */
    background-color: #f8f8f8;
    font-size: 18px;
  }
  #news>span:first-child {
    margin-left: 0;
    position: relative;
    top: 3px;
  }
  #news>span {
    display: inline-block;
    margin-left: 20px;
  }
  #news>span:nth-child(2) {
    font: bold;
  }
  #news>span:last-child {
    color: #7a7a7a;
  }
  #discuss-swiper {
    width: 50vw;
    height: calc(50vw / 1020 * 360 + 5vw);
    margin: 30px auto 0;
    position: relative;
    box-shadow: 1px 1px 10px 3px rgba(49, 50, 51, 0.1);
    border-radius: 10px;
  }
  #rotation {
    width: 100%;
    float: left;
    position: relative;
    overflow: hidden;
    border-radius: 10px 10px 0 0;
  }
  #orderType {
      position: absolute;
      left: 0;
      top: calc(50vw / 1020 * 360);
      bottom: 0;
      right: 0;
      background-color: white;
      border-radius: 0 0 10px 10px;
      font-size: 13px;
    }
</style>
