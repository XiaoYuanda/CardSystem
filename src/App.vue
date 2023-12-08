<script setup>
import { onMounted, ref } from 'vue';
import Side from './components/sides/leftSides/Side.vue'
import Bar from './components/bars/Bar.vue';
import ShowLeft from './components/sides/leftSides/ShowLeft.vue';
import MainSpace from './components/mainspace/MainSpace.vue';
import axios from 'axios'
const electron = window.require("electron");
const context = ref('')
let sideWidth = ref('180px')
const Data = ref({})

const sideWidthchange = function (){
  if(sideWidth.value == '180px'){
    sideWidth.value = '0px'
  }else{
    sideWidth.value = '180px'
  }
}
const getData = async function(){
  let res = await axios.get('http://localhost:9000/user/1')
  Data.value = res.data
}

const min = function () {
  electron.ipcRenderer.send('window-min')
}

const close = function (){
  electron.ipcRenderer.send('window-close')
}

onMounted(()=>{
  context.value = '<h1>Hello</h1><h2>OKOK</h2>'
  getData()
})
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="40px"><ShowLeft @some-event="sideWidthchange"></ShowLeft></el-aside>
      <el-aside :width="sideWidth"><Side :Data="Data.cardGroups"></Side></el-aside>
      <el-container style="transition-duration: 0.5s;">
        <el-header><Bar @close="close" @min="min"></Bar></el-header>
        <el-main><MainSpace></MainSpace></el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.el-header{
  padding: 0px;
  transition-duration: 0.5s;
  height: 30px;
}
</style>

