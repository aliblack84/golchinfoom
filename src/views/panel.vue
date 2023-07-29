<template>
   
<div  class="float-right bg-emerald-400 h-[1000px] w-[200px]">
    <div class=" text-center text-[18px] text-white ">
        <div class="h-10"></div>
        <h6>گلچین فوم </h6>
        <div class="h-10"></div>
        <div  class="flex flex-col">
            
        <button  class="p-4  hover:bg-sky-700 " >داشبورد<i class="fa fa-dashboard "></i></button>
        <button  @click="editing = !editing" class="p-4  hover:bg-sky-700 ">اسلایدر <i class="fa fa-heart "></i></button>
        <button @click="editing = !editing" class="p-4  hover:bg-sky-700 ">افتخارات<i class="fa fa-user "></i></button>
        <button class="p-4  hover:bg-sky-700 ">درباره ما<i class=" fa fa-map"></i></button>
        <button class="p-4  hover:bg-sky-700 ">خبرنامه<i class=" fa fa-comment"></i></button>
        <button class="p-4  hover:bg-sky-700 ">گالری  <i class="fa fa-image"></i></button>
        <button class="p-4  hover:bg-sky-700 ">نظرات<i class=" fa fa-comment"></i></button>
        <button class="p-4  hover:bg-sky-700 ">فوتر<i class=" fa fa-map"></i></button>
    </div>
    </div>
</div>
<div class="flex flex-col float-left">
        <div class="flex bg-slate-400 rounded-[10px] p-5 m-5 w-[350px]  ">
            <div>
                <img class="w-[50px] h-[50px] rounded-full " src="../assets/pic.jfif " alt="">
            </div>
         <div>
            <p>مهندس درگزینی</p>
            <p>hamed.daragazini@gmail.com</p>
            <p>مقام:مدیریت اصلی</p>
         </div>
        </div>
        <div class=" bg-slate-400 rounded-[10px] p-5 m-5 w-[350px]  ">
            <h5 class="text-center">معرفی مدیران سایت</h5>
            <div class="h-5"></div>
            <div v-for = "dag in dags" class="flex p-3" >
                <div>
                    <img class="w-[50px] h-[50px] rounded-full " src="../assets/pic.jfif " alt="">
                    </div>
                 <div class="">
                    <p>مهندس درگزینی</p>
                    <p class="text-slate-200">مقام:مدیریت اصلی</p>
                 </div>
            </div>
        </div>
    </div>
    <div class="w-[800px] h-[200px]  m-auto table">
    <div v-if="editing" class="rounded-lg w-[400px] bg-zinc-700 h-[535px] m-auto mt-16">
        <form class="flex flex-col p-8">
            <label class="text-white ">عنوان:</label>
            <input class="text-white p-1 rounded-lg bg-zinc-700 border-2 border-white " type="text">
            <label class="text-white">توضیح :</label>
            <textarea class="rounded-lg bg-zinc-700 border-2 border-white text-white p-2 " cols="30" rows="10"></textarea>
            <div class="mt-8">
                <div class="justify-items-center p-5 rounded-xl  border-2 border-white">
                   <button class="text-white mr-[110px] ">آپلود فایل</button>
                </div>
               <input type="file" id="upload_file" style="display:none">
              </div>
        </form>
    </div>
</div>
    <!-- <div class="about-us">
        <form action="">
            <label for="">عنوان:</label>
            <input type="text">
            <label for="">توضیح :</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <label for="">آیتم 1:</label>
           <input type="text">
           <label for="">آیتم 2:</label>
            <input type="text">
            <label for="">آیتم 3:</label>
            <input type="text">
            <label for="">آیتم 4:</label>
            <input type="text">
        </form>
    </div> -->
    <!-- <div class="gallery">
        <form action="">
            <label for="">عنوان منو:</label>
            <input type="text">
            <div class="btn">
                <label for="upload_file"  >
                   <span>آپلود فایل</span>
               </label> 
               <input type="file" id="upload_file" style="display:none">
              </div>
        </form>
    </div> -->

<div class="h-[800px]"></div>
    <!-- <div class="view">
        <form action="">
            <label for="">عنوان:</label>
            <input type="text">
            <label for="">توضیح :</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </form>
    </div> -->
    <!-- <div class="footer">
        <div >
            <form action="" class="f-left">
                <label for="" class="left">توضیح :</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <label for="" class="link">لینک همکاران:</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <label for="">نمایندگی:</label>
                <textarea name="" id=""></textarea>
            </form>
        </div>
        <div class="f-right">
            <form action="">
                <label for="">تلفن:</label>
                <input type="tel">
                <label for="" class="left">آدرس:</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div class="btn-footer">
                    <label for="upload_file"  >
                       <span>آپلود فایل</span>
                   </label> 
                   <input type="file" id="upload_file" style="display:none">
                  </div>
            </form>
        </div>
    </div> -->



</template>
<style>
    
</style>
<script setup>
import {ref} from 'vue'


const dags = ref([
    '',
    '',
    '',
])
const editing = ref (false)
</script>