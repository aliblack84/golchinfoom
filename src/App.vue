<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>
<style>
  @font-face {
    font-family: "IRN";
    src:    url(./fonts/Yekan.woff);

  }
  body{
    font-family: 'IRN';
  }
  </style>

<template>
 
    <div class="w-full bg-white h-16 flex">
      <h2 class=" p-3 pr-20 text-3xl">لوگو</h2>
      
      <div class="w-1/6"></div>
      <RouterLink  class="p-5 pr-12 text-1xl" to="service">سرویس ها</RouterLink>
      <RouterLink  class="p-5 pr-12 text-1xl" to="/">درباره ما</RouterLink>
      <RouterLink  class="p-5 pr-12 text-1xl" to="service">تماس با ما</RouterLink>
      <RouterLink  class="p-5 pr-12 text-1xl" to="service">قیمت ها</RouterLink>
      <RouterLink  class="p-5 pr-12 text-1xl" to="service"> اطلاعات</RouterLink>
      <div class="w-[300px] "></div>

      <img src="./assets/world.png" class="w-8 h-8 f m-4 mr-5">
      <select class="ml-3">
  <option value="hight">FAS</option>
  <option value="low">ENG</option>
</select>

  </div>

  



  <RouterView />
</template>

<style scoped>



</style>
