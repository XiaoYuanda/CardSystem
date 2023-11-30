<script setup>
import { onMounted, ref } from 'vue';

const h = ref(null)

onMounted(()=>{
  console.log(h.value)
})
</script>

<template>
  <h1 ref="h">hello</h1>
</template>

<style scoped>
</style>
