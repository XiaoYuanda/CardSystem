<script setup>
import { onMounted, ref } from 'vue';
import Side from './components/sides/leftSides/Side.vue'
import Card from './components/cards/Card.vue';
import Bar from './components/bars/Bar.vue';
import ShowLeft from './components/sides/leftSides/ShowLeft.vue';
const context = ref('')
let sideStyle = ref('show')

const callback = function (){
  if(sideStyle.value == 'show'){
    sideStyle.value = 'hidden'
  }else{
    sideStyle.value = 'show'
  }
}

onMounted(()=>{
  context.value = '<h1>Hello</h1><h2>OKOK</h2>'
})
</script>

<template>
  <el-row>
  <el-col :span="1" style="max-width: 40px;">
    <ShowLeft @some-event="callback"></ShowLeft>
  </el-col>
  <el-col :span="23">
    <Bar></Bar>
    <!-- <Card :cardContext="context"></Card> -->
    <Side :class="sideStyle"></Side>
  </el-col>
</el-row>
</template>

