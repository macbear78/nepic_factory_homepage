<template>
  <v-carousel
    cycle
    hide-delimiter-background
    height="500"
    interval="3000"
    continuous
    class="no-gap"
  >
    <!-- 화살표 슬롯 제거 -->
    <template #prev></template>
    <template #next></template>

    <v-carousel-item
      v-for="(image, i) in images"
      :key="i"
      class="fill-height no-padding"
    >
      <v-img
        :src="image"
        class="w-full h-full"
        cover
      ></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import slide1 from '@/assets/slide_img001.png'
import slide2 from '@/assets/slide_img002.png'
import slide3 from '@/assets/slide_img003.png'

const images = [slide1, slide2, slide3]
</script>

<style scoped>
.v-carousel .v-window-item {
  padding: 0 !important;
}

.v-carousel .v-carousel-item {
  margin: 0 !important;
}

.fill-height {
  height: 100%;
}

.no-padding {
  padding: 0 !important;
}
section {
  background-color: #000; /* 또는 이미지와 비슷한 색상 */
}
</style>
