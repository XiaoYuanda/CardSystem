<script setup>
import { ref } from 'vue';

const size = ref('20px')
const color  = ref('#999')
</script>

<template>
<div class="show-left-bar">
      <el-row style="height: 30px; width: 40px;">
        <div class="toggleSide" @click="$emit('someEvent')">
        <el-icon :size="size" :color="color" >
          <Postcard />
        </el-icon>
      </div>
      </el-row>
      <el-row style="height: 30px; width: 40px;">
        <div class="toggleSide" @click="$emit('someEvent')">
        <el-icon :size="size" :color="color" >
          <Postcard />
        </el-icon>
      </div>
      </el-row>

      <el-row style="height: 30px; width: 40px;">
        <div class="toggleSide" @click="$emit('someEvent')">
        <el-icon :size="size" :color="color" >
          <Postcard />
        </el-icon>
      </div>
      </el-row>
      <el-row style="height: 30px; width: 40px;">
        <div class="toggleSide" @click="$emit('someEvent')">
        <el-icon :size="size" :color="color" >
          <Postcard />
        </el-icon>
      </div>
      </el-row>


</div>
</template>

<style scoped>
.toggleSide{
  /* background-color: #000; */
  -webkit-app-region:no-drag;
  box-sizing: border-box;
  height: 20px;
  width: 20px;
}
.toggleSide:hover{
  /* background-color: #000; */
  -webkit-app-region:no-drag;
  box-sizing: border-box;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 0 1px gray;
  cursor: pointer;
}
.show-left-bar{
  height: 100%; background-color: #eee; padding: 5px 10px;box-sizing: border-box;
}
</style>
