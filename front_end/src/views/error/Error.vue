<template>
  <div id="error">
    <div class="error">
      <span>页面404</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error'
}
</script>

<style scoped>
  .error {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .error>span {
    display: inline-block;
    margin-top: 50px;
    margin-left: 100px;
    font-size: 30px;
    font-weight: bold;
  }
</style>
