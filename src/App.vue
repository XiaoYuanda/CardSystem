<script setup>
import { onMounted, ref } from 'vue';
import Card from './components/Card.vue'
import Box from './components/Box.vue'


const h = ref(null)



onMounted(()=>{
  console.log(h.value)
  document.body.style.backgroundColor = '#f3f9f1';
})
</script>

<template>
  <div class="screen" >
  <!-- <div style="margin-top: 200px;position: relative;transform: scale(0.35);transform-origin: 0% 0%;margin-left: 50px;">
    <Card class="cardlist" style="top:0px"></Card>
    <Card class="cardlist" style="top:120px"></Card>
    <Card class="cardlist" style="top:240px"></Card>
    <Card class="cardlist" style="top:360px"></Card>
    <Card class="cardlist" style="top:480px"></Card>
    <Card class="cardlist" style="top:600px"></Card>
    <Card class="cardlist" style="top:720px"></Card>
    <Card class="cardlist" style="top:840px"></Card>
    <Card class="cardlist" style="top:960px"></Card>
    <Card class="cardlist" style="top:1080px"></Card>
    <Card class="cardlist" style="top:1200px"></Card>
    <Card class="cardlist" style="top:1320px"></Card>
    <Card class="cardlist" style="top:1440px"></Card>
  </div> -->

  <!-- <Card class="bigCard"></Card> -->
  <Box class="box"></Box>
  <Box class="box2"></Box>
  <Box class="box3"></Box>
</div>
  
</template>

<style scoped>

.cardlist{
  transition-duration: 0.6s;
}
.cardlist:hover{
  transform: translate(0%, -60%);
  transition-duration: 0.6s;
  cursor: pointer;
}
.bigCard{
position: absolute;
top:50%;
left: 50%;
transform: translate(-50%,-50%);
}

.screen{
  width: 2920px;
  height: 1080px;
  /* perspective: 3000px; */
  transform: scale3d(0.4, 0.4, 0.4) rotateY(-1deg) rotateX(1deg) translateZ(1px) translate(-50%, -50%);
  background-color: #f3f9f1;
  transform-origin: 0% 0%;
  font-weight: lighter;
  /* transform: rotateY(-1deg) rotateX(1deg) translateZ(1px); */
  position: absolute;
  top: 50%;
  left: 50%;
  perspective: 10000px;
}
.box{
  float: left;
  margin-right: 80px;
  margin-top: 100px;
}
</style>
