<script setup>
import { onMounted, ref } from 'vue';
import Side from './components/sides/leftSides/Side.vue'
import Bar from './components/bars/Bar.vue';
import ShowLeft from './components/sides/leftSides/ShowLeft.vue';
const electron = window.require("electron");
const context = ref('')
let sideStyle = ref('show')

const callback = function (){
  if(sideStyle.value == 'show'){
    sideStyle.value = 'hidden'
  }else{
    sideStyle.value = 'show'
  }
}

const min = function () {
  electron.ipcRenderer.send('window-min')
}

const close = function (){
  electron.ipcRenderer.send('window-close')
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
    <Bar @close="close" @min="min"></Bar>
    <!-- <Card :cardContext="context"></Card> -->
    <Side :class="sideStyle"></Side>
  </el-col>
</el-row>
</template>

