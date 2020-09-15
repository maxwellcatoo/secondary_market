<template>
  <div id="homepage">
    <rotation-chart></rotation-chart>
  </div>
</template>

<script>
  import RotationChart from '../../components/content/rotation_chart/RotationChart'
  export default {
    name: "Homepage",
    components: {
      RotationChart
    },
  };
</script>

<style scoped>
</style>
