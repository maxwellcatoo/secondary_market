<template>
  <div id="classify-item">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'ClassifyItem'
}
</script>

<style scoped>
  #classify-item {
    height: 40px;
    line-height: 40px;
    width: 100%;
  }
  #classify-item:hover {
    background-color: #6b7176;
  }
</style>
