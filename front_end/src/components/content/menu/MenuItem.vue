<template>
  <div :style="activeStyle" class="menu-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  computed:{
    isActive(){
      // console.log(this.$route.path==='/'+this.path)
      return this.$route.path === '/'+this.path
    },
    activeStyle(){
      return this.isActive?{borderBottomColor: '#2D8CF0'}:{}
      //如果上一行的大括号不为空，而是{borderBottomColor:'#ffffff'}的话，那么下边写的css样式:hover的样式将不起作用，元素被鼠标覆盖时，只有字体颜色变化，边框不再变化。（产生的原因尚不清楚）
    }
  },
  props: {
    path: String
  }
}
</script>

<style scoped>
.menu-item {
  border: 1px solid #FFFFFF;
}
.menu-item:hover {
  border-bottom: 1px solid #2D8CF0;
  color: #2D8CF0;
}
</style>
