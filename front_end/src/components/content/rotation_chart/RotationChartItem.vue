<template>
  <div class="rotation-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'RotationItem'
}
</script>

<style scoped>
  .rotation-item {
    width: 100%;
    flex-shrink: 0;
  }
  .rotation-item img {
    width: 100%;
  }
</style>
