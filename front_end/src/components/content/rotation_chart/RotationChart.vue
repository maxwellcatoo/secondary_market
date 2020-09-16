<template>
  <div id="rotation">
    <!-- 这里还要插入一个分类 -->
    <!-- 要轮播的图片 -->
    <div class="swiper">
      <!-- <slot></slot> -->
      <rotation-item v-for="(item,index) in imgSrc" :key="index">
        <img :src="require(`@/assets/rotation/${item}.jpg`)" alt="图片未正常显示">
      </rotation-item>
    </div>

    <!-- 展示轮播位置的小图标 -->
    <!-- <div class="indicator">

    </div> -->
  </div>
</template>

<script>
import RotationItem from './RotationChartItem'

export default {
  name: 'RotationChart',
  components: {
    RotationItem
  },
  data() {
    return {
      imgSrc: ['first','second','third'],
      currentIndex: 1, //当前index
      scrolling: false, //是否正在滚动
      swiperStyle: {}, //用来保存滚动的一系列样式，如滚动位置、滚动时间等
      totalWidth: 0,
    }
  },
  mounted() {
    setTimeout(() => {
      this.handleDom()
      
      this.setTransform()
      //轮播启动
      this.startTimer()
    }, 1000);
  },
  methods: {
    /**
      *定义定时器操作函数
     */
    startTimer() { //轮播启动
      this.playTimer = window.setInterval(() => {
        this.currentIndex++
        this.scrollContent(-this.currentIndex * this.totalWidth)
      },3000) //数值先写死，后边再写成由props赋值过来的
    },
    stopTimer() {
      window.clearInterval(this.playTimer)
    },
    /**
      *滚动到正确的位置
     */ 
    scrollContent(currentPosition) {
      //0.设置正在滚动
      this.scrolling = true
      //1.开始滚动
      this.swiperStyle.transition = 'transform 300ms';
      this.setTransform(currentPosition);
      //2.判断滚动的位置，若滚动到最前或最后，则调整位置
      this.checkPosition()
      //3.滚动完成
      this.scrolling = false
    },
    /**
     * 确定正确的位置
    */
    checkPosition() {
      //0.校验正确的位置
      window.setTimeout(() => {
        this.swiperStyle.transition = '0ms'
        if(this.currentIndex >= 4) { //图片一共有三张，三张前后补上第三张和第一张，用来调整轮播完一次后的转换
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.totalWidth) //900为轮播图的宽度
        }else if(this.currentIndex <= 0) {
          this.currentIndex = 3;
          this.setTransform(-this.currentIndex * this.totalWidth)
        }
      },300)
    },
    /**
     * 设置滚动位置
    */
    setTransform(position) {
      this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
      // this.swiperStyle.transform = `translate3d(-1800px, 0, 0)`;
      //若要考虑到浏览器兼容性，也可在后面补充语句
    },

    /**
     * 使用js获取要滚动的元素，并在其前后添加最后一个和第一个元素
    */
    handleDom() {
      //0.获取要操作的元素
      let swiperEl = document.querySelector('.swiper')
      let swiperEls = swiperEl.getElementsByClassName('rotation-item')
      // let swiperCount = 3  等到要改成通用组件的时候再设置数量
      //1.轮播图个数超过一个，在其前后添加元素
      let cloneFirst = swiperEls[0].cloneNode(true)
      let cloneLast = swiperEls[2].cloneNode(true)
      swiperEl.insertBefore(cloneLast,swiperEls[0])
      swiperEl.appendChild(cloneFirst)
      
      this.totalWidth = swiperEl.offsetWidth;
      this.swiperStyle = swiperEl.style;
      // 2.让swiper元素显示第一个元素
      this.setTransform(-this.totalWidth)
      // console.log(this.setTransform)
      // this.swiperStyle.transform = `translate3d(-1800px, 0, 0)`;
    }
  }
}
</script>

<style scoped>
  #rotation {
    width: 85%;
    float: left;
    position: relative;
    overflow: hidden;
    border-radius: 0 10px 0 0;
  }
  .swiper {
    display: flex;
  }
</style>
