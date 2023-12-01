<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import Box from './components/Box.vue';
let windowInnerHeight = 0;
let windowInnerWidth = 0;

const h = ref(null)

const Data = ref({})
const getData = async function (){ //获取数据
  // 遇到的问题：跨域问题，无法请求数据，客户端浏览器的安全机制导致无法跨域请求。
  let res = await axios.get('http://localhost:9000/user/1')
  Data.value = res.data
  console.log(Data.value)
}

onMounted(()=>{
  windowInnerHeight = window.innerHeight; // 获取高度
  windowInnerWidth = window.innerWidth; // 获取宽度
  document.body.style.backgroundColor = '#f3f9f1'; // 设置背景颜色
  getData() // 加载数据
})
</script>

<template>
  
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

  <!-- <Card class="bigCard"></Card>
  <Box class="box"></Box>
  <Box class="box2"></Box>
  <Box class="box3"></Box> -->

<div class="screen" >
<Box class="box" v-for="(i, index) in Data.cardGroups" :cardGroupName="i.name" :cards="i.cards" :showDelay="index*0.5"></Box>
</div>
</template>

<style scoped>
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
