<script setup>
defineProps(['groupData'])
</script>


<template>
  <!-- <el-scrollbar height="630px">  -->
    <div class="box-card" v-for="(card, index) in groupData" :key="index">
      <div class="card">
        <div v-html="card.question"></div>
      <!-- <div>{{ card.answer }}</div> -->
      </div>
    </div>
    <el-empty v-if="!groupData" :image-size="100" description="什么也没有" />
  <!-- </el-scrollbar>    -->
</template>


<style scoped>

.box-card{
  padding: 5px;
  margin: 5px;
}
.card{
  border-radius: 6px;
  background-color: #f6f6f6;
  padding: 10px 20px;
}
.card:hover{
  border-radius: 10px;
  background-color: #efefef;
  padding: 10px 20px;
}
</style>