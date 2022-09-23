
<template>

    <div class="w-full h-[680px] bg-black relative">

</div>
<div class="w-3/5 h-[230px] bg-white  mr-28 mb-11 rounded-md absolute top-[40rem]   shadow-lg">
    <div class=" flex">
 <p class="text-2xl p-7 ">از ایران تا خاور میانه</p>
 <div class="flex pr-[420px] p-8 ">
 <img  src="../assets/icons8-star-48.png" class="w-8 h-8">
 <img  src="../assets/icons8-star-48.png" class="w-8 h-8" >
 <img  src="../assets/icons8-star-48.png" class="w-8 h-8" >
 <img  src="../assets/icons8-star-48.png" class="w-8 h-8" >
 <img  src="../assets/icons8-star-48.png" class="w-8 h-8" >
</div>
</div>
<div class="flex mb-12">
<p class="pr-8 pl-[20px] text-[14px]">کشورهای صادرات محصولات گلچین فوم خراسان</p>
<p class="pr-8 pl-[20px] text-[14px] float-left mr-[200px]">بیش از هزار پروژ موفق انجام شده در سراسر خاور میانه</p>
</div>
<div class="flex pr-8">
    <div  v-for="img in imgs" >
        <img :src="img" class="h-12 w-12 m-2">
         <div class="w-4"></div>
    </div>
    <!-- <img src="../assets/united-kingdom.png" class="h-12 w-12 ">
    <p class="p-3">انگلیس</p>
    <div class="w-4"></div>
    
    <img src="../assets/united-kingdom.png" class="h-12 w-12 ">
    <p class="p-3">انگلیس</p>  -->
</div>
</div>   
<div>
    

</div>
<div class="float-left m-60">
<h1 class=" text-[45px] ">درباره شرکت گلچین فوم</h1>
<div class="h-9"></div>
<p class="text-[18px] text-slate-500">شرکت گلچین فوم خراسان با 15 سال تجربه و با استفاده  از نیروهای مجرب,متخصص,آمیزه ای از زیبایی ,</p>
<p class="text-[18px] text-slate-500">کارایی و تنوع را در طول سالیان متمادی برای مشتریان خود به ارمغان آورده است </p>
</div>

<div class="bg-emerald-50 w-full h-[600px] mt-[500px]">
<h1  class=" text-[50px] text-cyan-700  p-14 pt-28">گالری تصاویر</h1>

</div>
<div class="float-right m-28">
<h1 class=" text-[45px] ">افتخارات کسب شده در شرکت گلچین فوم خراسان</h1>
<div class="h-9"></div>
<p class="text-[18px] text-slate-500">شرکت گلچین فوم خراسان با 15 سال تجربه و با استفاده  از نیروهای مجرب,متخصص,آمیزه ای از زیبایی ,</p>
<p class="text-[18px] text-slate-500">کارایی و تنوع را در طول سالیان متمادی برای مشتریان خود به ارمغان آورده است </p>
</div>



</template>
<script setup lang="ts">
import { ref } from 'vue';

const imgs = ref([
 'src/assets/united-kingdom.png',
 'src/assets/united-kingdom.png'
])


</script>