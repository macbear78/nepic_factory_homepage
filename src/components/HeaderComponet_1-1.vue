<template>
  <header class="fixed top-0 left-0 w-full z-50">

    <!-- div a -->
    <div
      name="a"
      class="grid bg-white grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 items-center h-20 gap-4 relative z-20"
      @mouseenter="isHover = true"
      
    >
      <!-- 회색 div a -->
      <div class="bg-gray-500 w-full h-full"></div>
    </div>

    <transition name="slide-fade">
      <div
        name="b"
        class="grid bg-green grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 items-center h-48 gap-4 relative z-10 transition-all duration-300"
        v-show="isHover"
        @mouseleave="isHover = false"
      >
        <div class="bg-blue-500 w-full h-full"></div>
      </div>
    </transition>

  </header>
</template>

<script setup>
import { ref } from "vue";

// hover 상태
const isHover = ref(false);
</script>

<style scoped>
/* 헤더 높이 확보 */
body {
  padding-top: 80px;
}

/* slide + fade 트랜지션 */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 1.0s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {

  transform: translateY(-200px);
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  transform: translateY(0);
}
</style>
