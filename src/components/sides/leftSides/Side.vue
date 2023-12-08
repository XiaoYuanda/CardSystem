<script setup>
defineProps(['Data'])

</script>
<template>
<div class="show">
  <el-container>
  <el-header height="30px" style=" font-size: 12px;">
    <div style="box-sizing: border-box;line-height: 30px;margin-left: 10px;">卡片组</div>
  </el-header>
  <el-main>
    <div v-for="i in Data" style="background-color: #e3e3e3;height: 40px;border: 1px solid #ddd ;font-size: 12px;box-sizing: border-box;box-sizing: border-box;line-height: 30px;margin-left: 10px;">{{ i.name }}</div>
  </el-main>
</el-container>
</div>
</template>

<style scoped>
.show{
  height: 970px;
  background-color: #eee;
  transition-duration: 0.5s;
}
.el-header{
  padding: 0px;
  border: 1px solid #e3e3e3;
  user-select: none;
}
.el-main{
  padding: 0;
  background-color: #e3e3e3;
}
</style>