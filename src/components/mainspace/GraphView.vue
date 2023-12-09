<script setup>
import { onMounted,ref,watch } from 'vue';
// defineProps(['groupData'])

const props = defineProps({
  groupData: Array
})
let canvas=ref(null)
let ctx = ref()

const initContext = function (){
  ctx = canvas.value.getContext('2d')
}

const drawCircle = function (x,y){
  ctx.fillStyle = 'red'
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, 2*Math.PI);
  ctx.fill(); // 绘制路径
}

watch(props,()=>{
  ctx.clearRect(0,0,canvas.value.width,canvas.value.height)
  for(let i = 0; i < props.groupData.length;i++){
    drawCircle(40*i + 20,20)
  }
})

onMounted(()=>{
  initContext()
  // drawCircle()
})


</script>


<template>
  <canvas ref="canvas" id="canvas" height="400" width="1600" style="background-color: azure;">
  </canvas>
</template>


<style scoped>
</style>