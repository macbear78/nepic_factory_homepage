<template>
  <div class="font-sans text-gray-800">
  
    <!-- Hero Section -->
    <section id="home" class="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white pt-20">
      <div class="px-4 w-full max-w-[100%]">
        <div class="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 gap-4 items-center">
          <div class="col-span-6 sm:col-span-8 lg:col-span-12 text-center">
            <h1 class="text-4xl sm:text-5xl font-bold mb-4">Welcome to Our Company</h1>
            <p class="text-lg mb-6">We provide innovative solutions to boost your business.</p>
            <a href="#services" class="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition">Our Services</a>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-24 bg-gray-50">
      <div class="px-4 w-full max-w-[100%]">
        <div class="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 gap-6 items-center">
          <div class="col-span-6 sm:col-span-8 lg:col-span-6">
            <img src="/office.jpg" alt="About Us" class="rounded-lg shadow-lg" />
          </div>
          <div class="col-span-6 sm:col-span-8 lg:col-span-6">
            <h2 class="text-3xl sm:text-4xl font-bold mb-4">About Our Company</h2>
            <p class="mb-4">We specialize in delivering cutting-edge solutions that improve efficiency, reduce costs, and enhance competitiveness. Our team of experts is dedicated to making your vision a reality.</p>
            <p>With years of experience in the industry, we help businesses of all sizes transform their operations using technology-driven solutions.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-24 bg-white">
      <div class="px-4 w-full max-w-[100%] text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-12">Our Services</h2>
        <div class="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 gap-6">
          <div class="col-span-6 sm:col-span-4 lg:col-span-4 p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 class="text-2xl font-semibold mb-2">Web Development</h3>
            <p>Building responsive, fast, and modern web applications tailored to your business needs.</p>
          </div>
          <div class="col-span-6 sm:col-span-4 lg:col-span-4 p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 class="text-2xl font-semibold mb-2">Mobile Apps</h3>
            <p>Creating mobile experiences on iOS and Android that engage and retain your users.</p>
          </div>
          <div class="col-span-6 sm:col-span-4 lg:col-span-4 p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 class="text-2xl font-semibold mb-2">AI & Automation</h3>
            <p>Integrating AI solutions and automation to streamline operations and boost productivity.</p>
          </div>
        </div>
      </div>
    </section>



  </div>
</template>

<script setup>
import { ref } from "vue";

const mobileMenu = ref(false);
</script>

<style scoped>
body {
  padding-top: 80px; /* 헤더 높이 확보 */
}
</style>
