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
    <div class="cardgroup" @click="$emit('click-add-group')">
      <div style="margin-left: 10px;font-size: 12px;box-sizing: border-box;line-height: 40px;">添加组</div>
    </div>
    <div class="cardgroup" v-for="i in Data" @click="$emit('click-card-group', i)" style="padding: 10px;">
      <el-badge :value="12" class="item">
      <div style="font-size: 12px;box-sizing: border-box;">{{ i.name }}</div>
      <p style="font-size: 10px;color: darkgrey; margin: 0px;">这里添加描述</p>
    </el-badge>
    </div>
  </el-main>
</el-container>
</div>
</template>

<style scoped>
.show{
  height: 970px;
  background-color: #e1e1e1;
  transition-duration: 0.5s;
}
.el-header{
  padding: 0px;
  border-right: 1px solid #e0e0e0;
  background-color: #efefef;
  user-select: none;
}
.el-main{
  padding: 0;
  background-color: #e3e3e3;
  overflow: hidden;
}
.cardgroup{
  background-color: #e2e2e2 ;box-sizing: border-box;
}
.cardgroup:hover{
  background-color: #d9d9d9;
}
</style>