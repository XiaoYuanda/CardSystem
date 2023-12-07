<script setup>
const props = defineProps({
  cardContext: String,
})
</script>

<template>
  <div class="cardoo">
    <div class="FrontFace" v-html="cardContext"></div>
    <div class="BackFace" v-html="cardContext"></div>
  </div>
</template>


<style scoped>
.FrontFace{
  height: 400px;
  width: 600px;
  background-color: #fffcfc;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid #3e3e3e;
  user-select: none;
  box-sizing: border-box;
}
.BackFace{
  transform: rotateY(-180deg);
  backface-visibility: hidden;
  height: 400px;
  width: 600px;
  background-color: #fffcfc;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid #3e3e3e;
  user-select: none;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
}

</style>