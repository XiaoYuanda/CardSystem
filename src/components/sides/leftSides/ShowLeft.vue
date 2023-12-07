<script setup>
import { ref } from 'vue';

const size = ref('26px')
const color  = ref('#999')
</script>

<template>
<div style="height: 100%; background-color: #eee; padding: 3px 7px;box-sizing: border-box;">
      <div class="toggleSide" @click="$emit('someEvent')">
        <el-icon :size="size" :color="color" >
          <Postcard />
        </el-icon>
    </div>
</div>
</template>

<style scoped>
.toggleSide{
  height:26px;
  /* width: 26px; */
  /* background-color: #000; */
  -webkit-app-region:no-drag;
  box-sizing: border-box;
}
</style>
