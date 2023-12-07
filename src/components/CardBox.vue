<script setup>
import Card from './Card.vue';

</script>

<template>
<div class='container'>
  
  <Card class="card" cardContext="<h1>演示卡片</h1>"></Card>
  <div class="box"><h3>语文</h3></div>
  
</div>
</template>

<style scoped>
.container{
  height: 200px;
  width: 200px;
  /* background-color: greenyellow; */
  position: absolute;
  transition-duration: 0.5s;
  box-sizing: border-box;
  
}
.card{
  transform-origin: 0% 0%;
  transform:scale(0.25);
  margin-top: 50px;
  margin-left: 25px;
  box-sizing: border-box;
}

.box{
  height: 70px;
  width: 160px;
  background-color: rgb(84, 84, 233);
  position: absolute;
  bottom:30px;
  border-radius: 4px;
  left: 20px;
  
  opacity: 0.8;
  color: aliceblue;
  text-align: center;
  line-height: 30px;
  /* backdrop-filter: blur(200px); */
}
</style>