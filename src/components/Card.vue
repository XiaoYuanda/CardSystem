<script setup>
const props = defineProps({
  cardContext: String,
})
</script>

<template>
  <div class="cardGackGroup">
    <div class="cardFace" v-html="cardContext">
    </div>
  </div>


</template>

<style scoped>
.cardGackGroup{
  height: 400px;
  width: 600px;
  border-radius: 25px;
}
.cardFace{
  height: 400px;
  width: 600px;
  background-color: #fffcfc;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid #3e3e3e;
  user-select: none;
  box-sizing: border-box;
}

</style>