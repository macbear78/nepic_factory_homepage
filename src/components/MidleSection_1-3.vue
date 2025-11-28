<template>
  <div
    class="grid bg-white grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 items-center h-32 gap-4 relative z-20"
  >
          <!-- A -->
          <div class="bg-gray-500 w-20 h-20 mx-32">
             <v-img
              :src="img31"
              alt="sample"
              class="w-20 h-20 overflow-hidden rounded-lg cursor-pointer"
              cover
            >
              <template #default>
                <img
                  :src="img31"
                  alt="sample"
                  class="w-full h-full object-cover transition-transform duration-300 hover:scale-150"
                />
              </template>
            </v-img>



          </div>


    

  </div>
</template>

<script setup>

import img31 from "@/assets/3_1.png";


</script>

<style scoped>

</style>
