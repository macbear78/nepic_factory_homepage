<template>
  <v-app>

  <TitleImgSection_1_2></TitleImgSection_1_2>
  <router-view/>
  <footer-componet/>
  </v-app>   
</template> 

<script setup>
import { onMounted } from 'vue'
import HeaderComponet from './components/HeaderComponet.vue'
import HeaderComponet_1_1 from './components/HeaderComponet_1-1.vue';
import HeaderComponet_1_2 from './components/HeaderComponet_1-2.vue'; 
import FooterComponet from './components/FooterComponet.vue'
import TitleImgSection_1_1 from './components/TitleImgSection_1-1.vue';
import TitleImgSection_1_2 from './components/TitleImgSection_1-2.vue';

import router from './router';

onMounted(() => {
  router.push({path:'/main'});
})

</script>

<style scoped>
.container {
  max-width: 1200px;
}

/* 메뉴 hover 시 부드럽게 */
.group:hover span {
  color: #2dd4bf;
  transition: color 0.3s;
}
</style>
  





  