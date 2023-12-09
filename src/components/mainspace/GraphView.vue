<script setup>
import { onMounted,ref } from 'vue';
defineProps(['groupData'])
let canvas=ref(null)
let ctx = ref()

const initContext = function (){
  ctx = canvas.value.getContext('2d')
}

const drawCircle = function (){
  console.log(groupData)
}

onMounted(()=>{
  initContext()
  drawCircle()
})


</script>


<template>
  <canvas ref="canvas" id="canvas" height="400" width="1600" style="background-color: azure;">
  </canvas>
</template>


<style scoped>
</style>