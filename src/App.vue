<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue';
onMounted(() => {
  const locale = localStorage.getItem('locale')
  if(locale){
    $i18n.locale = locale
  }
  else if (navigator.language){
    $i18n.locale=navigator.language.substring(0 , 2)
  }
})
    
const setlocale = (locale:any) =>   
 { $i18n.locale = locale;
    localStorage.setItem("locale",locale)
  }


const bs = ref([
]) 


const ics = ref([
  'src/assets/images/f.png',
  'src/assets/images/a.png',
  'src/assets/images/b.png',
  'src/assets/images/d.png',
  'src/assets/images/c.png',
])

const h1s = ref([
  'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم تز صنعت چاپ و با استفاده',
  'از طراحان گرافیک است چاپگر غا و متون بلکه روزنامه و مجله در ستون و',
  'سطر انچنان که لازم است'
])

const slider = ref(false)
</script>
<style>
@font-face {
  font-family: "IRN";
  src: url(./fonts/Yekan.woff);

}

body {
  font-family: 'IRN';
}
</style>

<template>

<div class="w-full bg-white h-[70px]  flex">
  <button class="2xl:hidden mr-5" @click="slider = !slider">button</button>

  <div class="flex p-[5px] w-full 2xl:flex hidden" >
    <RouterLink dir="ltr" class=" p-3 mr-5 text-3xl" to="/">{{$t('header.Logo')}}</RouterLink>
    <div class=" flex mr-20">
    <RouterLink class="p-5 pr-[45px] text-[16px]" to="panel">{{$t('header.Login')}}</RouterLink>
    <RouterLink class="p-5 pr-[45px] text-[16px]" to="service">{{$t('header.Services')}}</RouterLink>
    <RouterLink class="p-5 pr-[45px] text-[16px]" to="home">{{$t('header.about_Us')}}</RouterLink>
    <RouterLink class="p-5 pr-[45px] text-[16px]" to="service">{{$t('header.contact_us')}}</RouterLink>
    <RouterLink class="p-5 pr-[45px] text-[16px]" to="home">{{$t('header.Price')}}</RouterLink>
    <RouterLink class="p-5 pr-[45px] text-[16px]" to="service"> {{$t('header.Information')}}</RouterLink>
  </div>

  </div>
  <div class="flex ml-16 2xl:flex hidden ">
    <div  class="w-11 h-11 f m-3 ml-16 flex ">
      <img src="./assets/images/Button.png">

      <div class="mr-2">
        <p>{{ $t("header.phone") }}</p>
        <p>09156423475</p>
      </div>

    </div>
    <div  class="w-11 h-11 f m-3 mr-14 flex">
      <img src="./assets/images/lan.png">
      <select   v-model="$i18n.locale" class="mr-2">
        <option  @click="setlocale('fa')" value="hight">FAS</option>
        <option  @click="setlocale('en')"  value="low">ENG</option>
      </select>
    </div>
  </div>
  </div>

  
  <div v-if="slider" class="h-full w-[400px] bg-blue-400"></div>

  <RouterView />

  <div class="w-full h-full bg-teal-50">

    <hr>

    <div class="p-8 ">
      <div class="flex">
        <h1 class="text-[31px] ">{{ $t("header.Logo") }}</h1>
        <div class="w-96"> </div>
        <div class="flex">
          <div class="pt-[50px] ml-[100px]">
          </div>
        </div>
      </div>
      <div>
        <h1 class="flex p-1 pr-52 text-[15px] text-gray-500 float" v-for="b in bs">{{ b }}</h1>

      </div>



      <p v-for="h1 in h1s" class="text-[16px] text-slate-500">{{ h1 }}</p>

      <div class="flex">
        <img class="w-12 h-12 f mt-8  " src="./assets/images/Button.png">
        <div class="pt-9 p-2">
          <p class="text-[12px] text-gray-500 ">{{$t("header.phone")}}</p>
          <p class="text-blue-600">09156423475-282229</p>
        </div>
      </div>

      <div class="flex">
        <img class="w-12 h-12 f mt-8  " src="./assets/images/Button(1).png">

        <div class="pt-9 p-2">
          <p class="text-[12px] text-gray-500 ">{{$t("header.Address")}}</p>
          <p class="text-blue-600">{{ $t("header.Address_1") }}</p>
          <p class="text-blue-600">{{ $t("header.Address_2") }}</p>
        </div>

        <!-- <div class="flex mt-12 mr-96">
          <img v-for="ic in ics" :src="ic" class="m-1 w-12 h-12">
        </div> -->
      </div>


    </div>

  </div>










</template>
