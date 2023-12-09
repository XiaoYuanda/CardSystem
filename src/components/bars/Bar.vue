<script setup>
import { ref } from 'vue';
defineProps(['groupName'])
</script>

<template>
  <div style="height: 30px; width: 100%;background-color: #eee; -webkit-app-region:drag; padding: 5px 10px;box-sizing: border-box; font-size: 12px; line-height: 20px;color: #555;">
    {{ groupName }}
    <div class="close" @click="$emit('close')">
      <el-icon class="closeicon" size="20px"><CircleCloseFilled /></el-icon>
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
.closeicon {
  -webkit-app-region:no-drag; color: #fa4854;
}

.closeicon:hover {
  color: rgb(202, 1, 1);
  
}
</style>