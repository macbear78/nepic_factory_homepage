<template>
  <header class="fixed top-0 left-0 w-full z-50">

    <!-- div a -->
    <div
      name="a"
      class="grid bg-white grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 items-center h-20 gap-4 relative z-20"
    >
      <div name="b">
                  <!-- 이미지 넣기 -->
        <img
          :src="headerImg"
          alt="배경 이미지"
          class="w-full h-full object-cover"
        />
      </div>
    </div>






  </header>
</template>

<script setup>
import { ref } from "vue";
import headerImg from "@/assets/14.png"; // 이미지 import

// hover 상태
const isHover = ref(false);
</script>

<style scoped>
/* 헤더 높이 확보 */
body {
  padding-top: 80px;
}


</style>
