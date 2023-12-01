<script setup>
import { onMounted } from 'vue';
import Card from './Card.vue';
const props = defineProps({
  cardGroupName: String,
  cards: Array,
  showDelay: Number
})

let spaceout = 10
onMounted(()=>{
})

</script>

<template>
<div class="box" :style="`animation-delay:` +showDelay+ `s;`">
  <div class="back-side"></div>
  <div class="left-side"></div>
  <div class="right-side"></div>
  <div class="bottom-side"></div>
  <Card class="card" v-for="(i,index) in cards" :cardContext="i.question" :key="index" :style="`animation-delay: `+ index * 0.2 + showDelay +`s;transform: translateZ(`+ -(index * - spaceout +35 ) +`px);`" ></Card>
  <div class="front-side" style="text-align: center;">
    <h1 style="margin-top: 300px;font-size: 80px;">{{ cardGroupName }}</h1>
  </div>
</div>


</template>

<style scoped>
.card{
  animation-name: cardAnimate;
  animation-duration: 1.5s;
  opacity: 0;
  animation-fill-mode: forwards;
  margin-left: 10px;
  margin-top: -102px;
  transition-duration: 1s;
  float: left;
}

@keyframes cardAnimate {
  0%{
    margin-top: -2002px;
    opacity: 0;
  }
  
  30%{
    opacity: 1;
  }
  100%{
    margin-top: -102px;
    opacity: 1;
  }
}


.box{
  height: 300px;
  width: 620px;
  /* background-color: #fff; */
  position: relative;
  transform-style:preserve-3d;
  user-select: none;
  box-sizing: border-box;
  animation-name: boxanimate;
  animation-duration: 1s;
  transform-origin: 50% 50%;
  transition-duration: 0.4s;
  opacity: 0;
  /* transform: rotateY(40deg)
   rotateX(3deg); */
   animation-fill-mode: forwards;
}

@keyframes boxanimate {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 2;
  }
}

.box:hover{
  transform-style: preserve-3d;
  transform-origin: 0% 0%;
  transform: rotateY(30deg) rotateX(2deg) translateZ(100px) ;
  transition-duration: 0.4s;
}
.box:hover .card{
  border: 1px solid rgb(117, 117, 117);
  box-shadow: 0 0 4px rgb(117, 117, 117);
}

.box > div{
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
}
.front-side{
  height: 250px;
  width: 100%;
  position: absolute;
  transform: translateZ(35px) translateY(50px);
  backdrop-filter: blur(2px);
  border: 2px solid rgb(255, 255, 255) ;
  background-color: rgba(71, 136, 190, 0.5);
  transition-duration: 1s;
}
.left-side{
  height: 300px;
  width: 70px;
  position: absolute;
  transform: translateX(-35px) rotateY(90deg);
  border-top-left-radius: 60px;
  backdrop-filter: blur(2px);
  border: 2px solid rgb(255, 255, 255) ;
  background-color: rgba(71, 136, 190, 0.5);
  transition-duration: 1s;
}
.right-side{
  height: 300px;
  width: 70px;
  position: absolute;
  transform: translateX(585px) rotateY(-90deg);
  border-top-right-radius: 60px;
  backdrop-filter: blur(2px);
  border: 2px solid rgb(255, 255, 255) ;
  background-color: rgba(71, 136, 190, 0.5);
  transition-duration: 1s;
}
.back-side{
  height: 300px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  transform: translateZ(-35px);
  backdrop-filter: blur(10px);
  border: 2px solid rgb(255, 255, 255) ;
  background-color: rgba(71, 136, 190, 0.5);
  transition-duration: 1s;
}
.bottom-side{
  height: 70px;
  width: 100%;;
  transform: translateY(265px) rotateX(-90deg);
  backdrop-filter: blur(10px);
  border: 2px solid rgb(255, 255, 255) ;
  background-color: rgba(71, 136, 190, 0.5);
  transition-duration: 1s;
}
</style>