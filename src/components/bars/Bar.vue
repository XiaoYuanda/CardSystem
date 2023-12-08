<script setup>
import { ref } from 'vue';


const username = ref('当前选择的卡片组名称')
</script>

<template>
  <div style="height: 30px; width: 100%;background-color: #eee; -webkit-app-region:drag; padding: 5px 10px;box-sizing: border-box; font-size: 12px; line-height: 20px;color: #555;">
    {{ username }}
    <div class="close" @click="$emit('close')">
      <el-icon size="20px" color="red" style="-webkit-app-region:no-drag"><CircleCloseFilled /></el-icon>
    </div>
    <div class="min" @click="$emit('min')">
      <el-icon size="20px" color="gray" style="-webkit-app-region:no-drag"><RemoveFilled /></el-icon>
    </div>
  </div>
</template>

<style scoped>
  .close{
  height: 20px;
  width: 20px;
  float: right;
}
.min{
  height: 20px;
  width: 20px;
  float: right;
}
</style>