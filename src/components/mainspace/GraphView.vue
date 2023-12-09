<script setup>
import { onMounted,ref } from 'vue';
defineProps(['groupData'])
let canvas=ref(null)

const draw = function (ctx){
  ctx.fillStyle = 'red'
  ctx.fillRect(0,0,10,10)
}

onMounted(()=>{
  const ctx = canvas.value.getContext('2d')
  draw(ctx)
})


</script>


<template>
  <canvas ref="canvas" id="canvas" height="400" width="1600" style="background-color: azure;">
  </canvas>
</template>


<style scoped>
</style>