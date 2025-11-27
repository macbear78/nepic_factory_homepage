<template>
  <section class="bg-gray-500 w-full h-64 grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 items-center gap-4">
    <div class="relative">
            <transition name="slide-left">
            <p
                v-if="showA"
                name="a"
                class="text-center text-white text-4xl whitespace-nowrap"
            >
                About
            </p>
            </transition>
        
        
            <!-- B 텍스트 -->
            <transition name="slide-left" >
            <p
                v-if="showB"
                name="b"
                class="absolute text-center text-white text-2xl mt-2 whitespace-nowrap"
            >
                This is the about page
            </p>
            </transition>
        


    </div>
   

  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const showA = ref(false);
const showB = ref(false);

onMounted(() => {
  setTimeout(() => {
    showA.value = true;        // 첫 번째 텍스트 300ms 후 등장
  }, 1000);

  setTimeout(() => {
    showB.value = true;        // 두 번째 텍스트 300ms 후 등장
  }, 2000);
});
</script>

<style scoped>
/* 왼쪽에서 슬라이드 + 페이드 인 */
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}

.slide-left-enter-active {
  transition: all 0.6s ease;
}

.slide-left-enter-to {
  opacity: 1;
  transform: translateX(0);
}
</style>
