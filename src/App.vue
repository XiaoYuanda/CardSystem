<script setup>
import { onMounted, ref } from 'vue';
import Side from './components/sides/leftSides/Side.vue'
import Bar from './components/bars/Bar.vue';
import ShowLeft from './components/sides/leftSides/ShowLeft.vue';
import MainSpace from './components/mainspace/MainSpace.vue';
import axios from 'axios'
import { ElNotification } from 'element-plus'
import { h } from 'vue'
// const drawer = ref(true)
const electron = window.require("electron");
const devTools = ref(false)
const context = ref('')
let sideWidth = ref('180px')
const currentGroupName = ref('')
const Data = ref({})

let currentCards = ref(null)

const devToolsToggle = function (){
  devTools.value = !devTools.value
  if(devTools.value){
    electron.ipcRenderer.send('devTools-open')
  }else{
    electron.ipcRenderer.send('devTools-close')
  }
}

const sideWidthchange = function (){
  if(sideWidth.value == '180px'){
    sideWidth.value = '0px'
  }else{
    sideWidth.value = '180px'
  }
}

const clickCardGroup = function(i){
  if(i.cards.length == 0) {
    currentCards.value = null
  }else{
    currentCards.value = i.cards
  }
  currentGroupName.value = i.name
}
const getData = async function(){
  let res = await axios.get('http://localhost:9000/user/1')
  Data.value = res.data
  ElNotification({
    title: '进度提示',
    position: 'bottom-right',
    message: h('l', { style: 'color: teal' }, '数据已经加载'),
  }) 
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
      <el-aside width="40px"><ShowLeft @some-event="sideWidthchange" @devTools-toggle="devToolsToggle"></ShowLeft></el-aside>
      <el-aside :width="sideWidth"><Side :Data="Data.cardGroups" @click-card-group="clickCardGroup"></Side></el-aside>
      <el-container>
        <el-header><Bar :groupName="currentGroupName" @close="close" @min="min"></Bar></el-header>
        <el-main style="overflow: hidden;">
          
          <MainSpace :groupData="currentCards"></MainSpace>
        </el-main>
      </el-container>
    </el-container>
  </div>

  <el-drawer
    v-model="drawer"
    title="I am the title"
    :direction="direction"
    :before-close="handleClose"
  ></el-drawer>
</template>

<style scoped>
.el-header{
  padding: 0px;
  height: 30px;
}
</style>

