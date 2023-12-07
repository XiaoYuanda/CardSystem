<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import CardBox from './components/CardBox.vue'
import EditCard from './components/EditCard.vue';
import GraphView from './components/GraphView.vue';
import Card from './components/cards/Card.vue';
import CardA from './components/cards/CardA.vue'
let windowInnerHeight = 0; // 屏幕高度
let windowInnerWidth = 0; // 屏幕宽度
let cardGroupMargin = 200 // 定义边距
let cardGroupWidth = 200 // 卡片组宽度
let cardGroupHeight = 200 // 卡片组高度
let cardGroupData = [1,1,2,4,7,9,9,9,9,9,9,9,9,99,9,9,9] // 卡片组数据
let temp = []

let groupShowData = ref([])
let selected = ref(-1)

const showGroup = function (){
  
  // 计算能放多少列
  let cols = Math.floor((windowInnerWidth-(cardGroupMargin*2)) / cardGroupWidth)
  // 计算要放多少行
  let rows = Math.floor(cardGroupData.length / cols) + 1
  
  // 算出整个卡片组列表所占的宽高
  let cardGroupSpace = {}
  cardGroupSpace.h = cardGroupHeight * rows
  cardGroupSpace.w = cardGroupWidth * cols
// 算出 CardContainerMarginTop
  let CardContainerMarginTop = (windowInnerHeight - cardGroupSpace.h)/2
  // 算出left偏移的附加值
  let addLeft = (windowInnerWidth - cols * cardGroupWidth) /2


  // 使用for循环添加 CardGroup 
  for(let i = 0 ; i < cardGroupData.length; i++){
    // 计算当前元素在Top的偏移
    let groupTopMargin = (Math.floor(i / cols)) * cardGroupHeight + CardContainerMarginTop
    // 计算当前元素在Left的偏移
    let groupLeftMargin =(i % cols) * cardGroupWidth + addLeft
    // console.log(groupTopMargin,groupLeftMargin)
    let group = {}
    group.top = groupTopMargin
    group.left = groupLeftMargin
    groupShowData.value.push(group)
  }
}

const deepCopy = (object) => {
  let result;
  if (Object.prototype.toString.call(object) == "[object Object]") {
    result = {};
  } else if (Object.prototype.toString.call(object) == "[object Array]") {
    result = [];
  } else {
    return "不符合深拷贝的数据类型";
  }
  // 遍历空对象或者是空数组  也就是要拷贝的对象
  for (let key in object) {
    if (typeof object[key] == "object") {
      result[key] = deepCopy(object[key]);
    } else {
      result[key] = object[key];
    }
  }
  return result;
}


const Data = ref({})
const getData = async function (){ //获取数据
  // 遇到的问题：跨域问题，无法请求数据，客户端浏览器的安全机制导致无法跨域请求。
  let res = await axios.get('http://localhost:9000/user/1')
  Data.value = res.data
}

let hahah = function (i,index){
  if(selected==index){
    selected = -1
    showGroup()
  }else{
    selected = index
    for(let t = 0; t< groupShowData.value.length; t++){
      groupShowData.value[t].top = i.top
      groupShowData.value[t].left = i.left
    }
  } 
  a()
}

const a = function (){
  let addLeft = (windowInnerWidth - cols * cardGroupWidth) /2
  for(let t = 0; t< groupShowData.value.length; t++){
      groupShowData.value[t].top = windowInnerHeight - 300
      groupShowData.value[t].left = addLeft
  }
}

onMounted(()=>{
  windowInnerHeight = window.innerHeight; // 获取高度
  windowInnerWidth = window.innerWidth; // 获取宽度
  document.body.style.backgroundColor = '#f3f9f1'; // 设置背景颜色
  
  getData() // 加载数据
  showGroup() // 显示组
})
</script>

<template>
  <CardA></CardA>
  <CardBox  v-for="(i,index) in groupShowData" :style="`top:`+ i.top+`px;left:`+i.left+`px;z-index:` + (index == selected ? 2 : 1)+`;` " :key="index" v-on:click="hahah(i,index)"></CardBox>
  <GraphView :height="windowInnerHeight" :width="windowInnerWidth" style="margin: 0;box-sizing: border-box;"></GraphView> 
  <!-- <EditCard></EditCard> -->
</template>



<style scoped>
</style>
