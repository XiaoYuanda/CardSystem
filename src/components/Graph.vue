<script setup>
const props = defineProps({
  height: Number,
  width: Number,
})
</script>
<template>
  <div class="container">
    <canvas id="canvas" :height="height" :width="width"></canvas>
  </div>
</template>

<style scoped>
.container{
  /* height: 200px;
  width: 200px; */
  background-color: rgb(138, 138, 138);
  box-sizing: border-box;
}
</style>