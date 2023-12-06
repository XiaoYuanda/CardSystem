<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import Box from './components/Box.vue';
import EditCard from './components/EditCard.vue';
import GraphView from './components/GraphView.vue';
let windowInnerHeight = 0; // 屏幕高度
let windowInnerWidth = 0; // 屏幕宽度

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
  // document.body.classList.add("custom-body-style"); 
  
  getData() // 加载数据
})
</script>

<template>
  <GraphView></GraphView>
  <div class="screen" >
  <Box class="box" v-for="(i, index) in Data.cardGroups" :cardGroupName="i.name" :cardGroupId="i.id" :cards="i.cards" :showDelay="index*0.5"></Box>
  </div>
  <EditCard></EditCard>
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
