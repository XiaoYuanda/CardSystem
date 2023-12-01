<script setup>
import Card from './Card.vue';

</script>

<template>
<div class="box">
  
  <div class="back-side">
  </div>
  
  <div class="left-side"></div>
  <div class="right-side"></div>
  <div class="bottom-side"></div>
  

  <Card class="card1"></Card>
  <Card class="card2"></Card>
  <Card class="card3"></Card>
  <Card class="card4"></Card>
  <Card class="card5"></Card>
  <div class="front-side"></div>
</div>


</template>

<style scoped>
.card5{
  animation-name: card5Animate;
  opacity: 0;
  animation-duration: 2s;
  /* animation-iteration-count: infinite; */
  animation-fill-mode: forwards;
  animation-delay: 1.6s;
  transform: translateY(-102px) translateX(10px) translateZ(-20px);
}

@keyframes card5Animate {
  0%{
    transform: translateY(-1002px) translateX(10px) translateZ(-20px);
    opacity: 0;
  }
  30%{
    opacity: 1;
  }
  100%{
    transform: translateY(-102px) translateX(10px)  translateZ(-20px);
    opacity: 1;
  }
}
.card4{
  animation-name: card4Animate;
  opacity: 0;
  animation-duration: 2s;
  /* animation-iteration-count: infinite; */
  animation-delay: 1.2s;
  transform: translateY(-102px) translateX(10px) translateZ(-15px);
}

@keyframes card4Animate {
  0%{
    transform: translateY(-1002px) translateX(10px) translateZ(-15px);
    opacity: 0;
  }
  30%{
    opacity: 1;
  }
  100%{
    transform: translateY(-102px) translateX(10px)  translateZ(-15px);
    opacity: 1;
  }
}
.card3{
  animation-name: card3Animate;
  opacity: 0;
  animation-duration: 2s;
  /* animation-iteration-count: infinite; */
  animation-delay: 0.8s;
  transform: translateY(-102px) translateX(10px) translateZ(-10px);
}

@keyframes card3Animate {
  0%{
    transform: translateY(-1002px) translateX(10px) translateZ(-10px);
    opacity: 0;
  }
  30%{
    opacity: 1;
  }
  100%{
    transform: translateY(-102px) translateX(10px)  translateZ(-10px);
    opacity: 1;
  }
}
.card2{
  animation-name: card2Animate;
  animation-duration: 2s;
  /* animation-iteration-count: infinite; */
  transition-duration: 0.4s;
  animation-delay: 0.4s;
  transform:  translateZ(-4px);
  transform: translateY(-102px) translateX(10px) translateZ(-5px);
}

@keyframes card2Animate {
  0%{
    transform: translateY(-1002px) translateX(10px);
    opacity: 0;
  }
  30%{
    opacity: 1;
  }
  100%{
    transform: translateY(-102px) translateX(10px);
    opacity: 1;
  }
}
.card1{
  animation-name: card1Animate;
  animation-duration: 2s;
  /* animation-fill-mode: forwards; */
  /* animation-delay: 1s; */
  transition-duration: 0.4s;
  opacity: 1;
  transform: translateY(-102px) translateX(10px)  translateZ(-1px);
}

@keyframes card1Animate {
  0%{
    transform: translateY(-1002px) translateX(10px) translateZ(-1px);
    opacity: 0;
  }
  
  30%{
    opacity: 1;
  }
  100%{
    transform: translateY(-102px) translateX(10px) translateZ(-1px);
    opacity: 1;
  }
}


.box{
  height: 300px;
  width: 620px;
  /* background-color: #fff; */
  position: relative;
  transform-style:preserve-3d;
  /* transform: rotateY(-30deg) rotateX(10deg); */
  user-select: none;
  box-sizing: border-box;
  /* background-color: #fff; */
  animation-name: boxanimate;
  animation-duration: 1s;
  /* animation-iteration-count: infinite; */
  transform-origin: 50% 50%;
  transition-duration: 0.4s;
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

.box:hover .card2{
  opacity: 1;
  transform: translateY(-202px) translateX(10px) translateZ(-5px);
  transition-duration: 0.4s;
  border: 1px solid rgb(117, 117, 117);
  box-shadow: 0 0 4px rgb(117, 117, 117);
}

.box:hover .card1{
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
  /* border: 2px solid rgb(255, 255, 255) ; */
  background-color: rgba(71, 136, 190, 0.5);
}
.left-side{
  height: 300px;
  width: 70px;
  position: absolute;
  transform: translateX(-35px) rotateY(90deg);
  border-top-left-radius: 60px;
  backdrop-filter: blur(2px);
  /* border: 2px solid rgb(255, 255, 255) ; */
  background-color: rgba(71, 136, 190, 0.5);
}
.right-side{
  height: 300px;
  width: 70px;
  position: absolute;
  transform: translateX(585px) rotateY(-90deg);
  border-top-right-radius: 60px;
  backdrop-filter: blur(2px);
  /* border: 2px solid rgb(255, 255, 255) ; */
  background-color: rgba(71, 136, 190, 0.5);
}
.back-side{
  height: 300px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  transform: translateZ(-35px);
  backdrop-filter: blur(10px);
  /* border: 2px solid rgb(255, 255, 255) ; */
  background-color: rgba(71, 136, 190, 0.5);
}
.bottom-side{
  height: 70px;
  width: 100%;;
  transform: translateY(265px) rotateX(-90deg);
  backdrop-filter: blur(10px);
  /* border: 2px solid rgb(255, 255, 255) ; */
  background-color: rgba(71, 136, 190, 0.5);
}
</style>