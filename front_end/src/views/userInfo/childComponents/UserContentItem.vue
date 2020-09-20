<template>
  <div :style="activeStyle" id="user-content-item">
    <slot></slot>
  </div>
</template>

<script>


export default {
  name: 'UserContentItem',
  computed: {
    isActive() {
      //return !this.$route.path.indexOf(this.path)//这个逻辑是两个字符串从第一个位置到后边的字符串结束都完全相同（返回0）和前边字符串不包含后边字符串时（返回-1）为true，在这里，主要的情况是1.两个字符串完全相同2.前边的字符串比后边的字符串只在末尾多一些字母。（逻辑漏洞其实蛮大的，不过因为这里的path传值时经过一次筛选，数据较为特殊，所以在这里可以这么用，这个方法用的时候要非常慎重）
      return (this.$route.path.indexOf(this.path) === 0)//这样用保险一点，之前那样用太离谱了，完全不相同也会返回true
    },
    activeStyle() {
      return this.isActive?{borderRightColor:'#2D8CF0',backgroundColor: '#f0faff'}:{}
    }
  },
  props: {
    path:String
  }
}
</script>

<style scoped>
  #user-content-item {
    display: inline-block;
    height: 60px;
    line-height: 60px;
    width: 100% ;
    border-right: 2px solid #ddd;
  }
  #user-content-item:hover {
    /* border-right: 2px solid #2D8CF0; */
    color: #2D8CF0;
  }
</style>
