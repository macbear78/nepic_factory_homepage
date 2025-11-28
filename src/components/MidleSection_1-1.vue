<template>
  <div
    class="grid bg-white grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 items-center h-32 gap-4 relative z-20"
  >
    <!-- A -->
    <div
      name="a"
      class="bg-gray-500 w-full h-24 col-start-2 m-4 transition-all duration-500 ease-out"
      :class="animationA"
    ></div>

    <!-- B -->
    <div
      name="b"
      class="bg-gray-500 w-full h-24 col-start-6 m-4 transition-all duration-500 ease-out"
      :class="animationB"
    ></div>

    <!-- C -->
    <div
      name="c"
      class="bg-gray-500 w-full h-24 col-start-11 m-4 transition-all duration-500 ease-out"
      :class="animationC"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const animationA = ref("start-hidden");
const animationB = ref("start-hidden");
const animationC = ref("start-hidden");

onMounted(() => {
  // A 먼저 등장
  setTimeout(() => {
    animationA.value = "fade-up";
  }, 200);


  // B 나중에 등장
  setTimeout(() => {
    animationB.value = "fade-up";
  }, 500); // 0.2초 뒤

  // C 마지막 등장
  setTimeout(() => {
    animationC.value = "fade-up";
  }, 1000); // 0.4초 뒤
});
</script>

<style scoped>
.start-hidden {
  opacity: 0;
  transform: translateY(40px);
}

.fade-up {
  opacity: 1;
  transform: translateY(0);
}
</style>
