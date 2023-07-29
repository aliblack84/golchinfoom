
<template>
    <div class="grid w-[900px]  ">
        <div class="">
        <!-- <vueper-slides fade fractions progress fixed-height="800px" 
            fixed-width="800px" class="z-0" 
            >
            <vueper-slide
              v-for="(slide, i) in slides"
              :key="i"
              :title="slide.title"
              :content="slide.content"
              :image="slide.img"
              >
            </vueper-slide>
          
          </vueper-slides> -->
        </div>


        <img src="../assets/images/bac1.png" class="w-full h-[600px]  xl:h-[800px] absolute">

        <div class="absolute w-fit m-12 mt-36 ">
            <div  type="text" class=" w-[320px] relative h-[45px] rounded-full   bg-slate-600">
                <button
                class="bg-blue-800 absolute right-1 w-[40px] h-10  rounded-full text-white hover:bg-sky-700 m-[2.5px] ">
                <p class="text-[10px]">جدید</p>
            </button>
            </div>
        </div>

   
    </div>
    <!-- <div class="w-3/5 h-[230px] bg-white  mr-28 mb-11 rounded-md absolute top-[40rem]   shadow-lg">
        <div class=" flex">
            <p class="text-[21.7px] p-7 ">از ایران تا خاور میانه</p>
            <div class="flex pr-[470px] p-8 ">
                <img src="../assets/icons8-star-48.png" class="w-8 h-8">
                <img src="../assets/icons8-star-48.png" class="w-8 h-8">
                <img src="../assets/icons8-star-48.png" class="w-8 h-8">
                <img src="../assets/icons8-star-48.png" class="w-8 h-8">
                <img src="../assets/icons8-star-48.png" class="w-8 h-8">
            </div>
        </div>
        <div class="flex mb-12">
            <p class="pr-8 pl-[3px] text-[14px] text-slate-500">کشورهای صادرات محصولات گلچین فوم خراسان</p>
            <p class="pr-8 pl-[20px] text-[14px] float-left mr-[250px] text-slate-500">بیش از هزار پروژ موفق انجام شده
                در سراسر خاور میانه</p>
        </div>
        <div class="flex pr-8 pb-12">
            <div class="flex" v-for="img in imgs">
                <img :src="img.src" class="h-12 w-12 m-2">
                <p class="pt-5">{{ img.name }}</p>
                <div class="w-4"></div>

            </div>
             <img src="../assets/united-kingdom.png" class="h-12 w-12 ">
    <p class="p-3">انگلیس</p>
    <div class="w-4"></div>
    
    <img src="../assets/united-kingdom.png" class="h-12 w-12 ">
    <p class="p-3">انگلیس</p>  
        </div>
    </div> -->

    <!-- <div class="h-[0px]"></div> -->
    <div class="h-[800px]"></div>
    <div class="flex">
        <div class="hidden xl:flex">
            <img class="mt-28 w-[700px] h-[680px] "  src="../assets/images/Art-Work.png" alt="">
        </div>
        <div class="float-left m-60 w-[700px]"  >
            <h1 class=" text-[43px] ">{{ $t("main.About") }}</h1>
            <div class="h-9"></div>
            <p  class="text-[18px] text-slate-500">{{$t("main.About_1")}}</p>
            <br>
            <br>
            <br>
            <div class=" grid grid-cols-4 gap-4 mr-[50px] ">
                <div v-for="icon in icons" class="h-26 mr-[-80px] mb-[20px]  w-38    ">
                    <img :src="icon.pic">
                    <p class="mt-6 mr-3">{{ icon.text }}</p>
                </div>
            </div>
            <br>
            <br>


        </div>
    </div>
    <div class="h-auto w-[100%]  bg-teal-200 ">
        <br>
        <h1 class=" text-[50px] text-cyan-700 text-center">{{ $t("main.Gallery") }}</h1>
        
        <div class="p-10 overflow-x-scroll flex">
            <div v-for="picture in pictures" >
                
                <div class="h-auto w-[300px] bg-white p-2 pb-0 rounded m-4 ">
                    
                <img class=" " :src="picture.title" alt="">
                <div class="flex items-center justify-between p-4  ">
                <label class="" >{{picture.name }}</label>
                <div class="flex ">
                <p class="">{{$t("main.Model")}}</p>
                
                <p class="mr-1">{{picture.number}}</p>
            </div>
                <button class="w-[110px] h-10 bg-teal-500 rounded ml-[-10px] ">{{ $t("main.Showall") }}</button>
            </div>

            </div>
    
        </div>
        
        </div>
</div>



    <div class="flex mt-20">

        <div class=" float-left m-20">
            <h1 class=" text-[45.1px] ">{{ $t("main.honors") }}</h1>
            <div class="h-9"></div>
            <p class="text-[18px] text-slate-500 w-auto">{{ $t("main.honors_1") }}</p>
   

        </div>
        <div class="float-right mr-20  w-[850px] h-[650px] hidden 2xl:flex" >
            <img src="../assets/images/111.jpg">
        </div>

    </div>
    <div class="h-[200px]"></div>

    <div class="  xl:flex w-[100%] bg-slate-700  xl:h-[540px] p-3  h-auto">
                <div class="mt-20 pr-4 text-ceneter">
            <h2 class="text-[35px] text-white">تنوع محصولات گلچین فوم خراسان</h2>
            <div class="h-[20px]  xl:hidden">
                
            </div>
            
           
                <div class=" w-[500px] h-auto xl:flex  xl:mb-[0px] ">
                    
                    <p class="text-white w-[450px]">
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vero, suscipit, id eaque repellendus cum aliquid eius commodi similique,
               culpa deserunt debitis obcaecati nam earum deleniti voluptatibus odio autem laborum ipsum?
                    </p>
                </div>
            
       
        </div>
        <div class="h-[20px]  xl:hidden">
                
            </div>
        <div class=" h-auto md:m-4 xl:w-[900px] m-0  w-auto xl:h-[800px] ">
            <video controls class="rounded-xl">
                <source src="../assets/film/james-look_up.mp4">
            </video>
        </div>  
    </div>




    <div class="h-36">


    </div>
    <div>
        <h1 class=" text-[43.1px] text-center">مورد اعتماد هزاران مشتری</h1>
        <h1 class=" text-[43.1px] text-center">خوشحال</h1>
        <p class="text-[18px] text-slate-500 text-center">پستی خود مطلع میشود.هرزمان که دوست داشتید با یک کلیک لغو
            اشتراک کنید</p>
        <p class="text-[18px] text-slate-500 text-center">پستی خود مطلع میشود.هرزمان که دوست داشتید با یک کلیک لغو
            اشتراک کنید</p>

    </div>
    <div class="h-20"></div>

    <div class="flex overflow-x-scroll">
        <div class="" v-for="i in is">
            <div class="w-[410px] h-[270px] rounded-xl bg-gray-200  m-2">
                <div class="flex ">
                    <div>
                        <img :src="i.person" class="p-5" alt="">
                    </div>
                    <div class="">
                        <p class="pt-5 text-[18px]">علی کریمی</p>
                        <p class="text-gray-500 text-sm">{{ i.city }}</p>
                    </div>
                    <div class="pt-9 pr-10 mr-36 flex ">
                        <p class="text-[15px] pl-1.5 ">{{ i.number }}</p>

                        <img src="../assets/star-icon.webp" class="h-4 -w-4 ">
                    </div>
                </div>
                <div class="p-4">
                    <p>{{ i.text }}</p>



                </div>
            </div>
        </div>
    </div>
    <div class="h-28">

    </div>


    <div class="text-center">
        <h1 class=" text-[43.1px] ">خبرنامه</h1>

        <p class="text-[18px] text-slate-500">اولین کسی باشید که از تخفبف ها،پیشنهادات و رویدادهای هفتگی در صندوق</p>

        <p class="text-[18px] text-slate-500">پستی خود مطلع میشود.هرزمان که دوست داشتید با یک کلیک لغو اشتراک کنید</p>
        <br>
        <div class="relative hidden 2xl:w-fit 2xl:flex m-auto">
            <input type="text" class="w-[780px] relative h-[60px] rounded-full  bg-slate-200  ">
            <button
                class="bg-blue-800 absolute left-0 w-[120px] h-12 rounded-full text-white hover:bg-sky-700 m-1.5">ثبت</button>
        </div>
    </div>
    <div class="h-28"></div>

</template>
<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { ref } from 'vue';

// const imgs = ref([
//     { name: 'انگلیس', src: 'src/assets/united-kingdom.png' },
//     { name: 'انگلیس', src: 'src/assets/united-kingdom.png' },
//     { name: 'فرانسه', src: 'src/assets/united-kingdom.png' },

// ])

// const ps = ref([
//     'انگلیس'
// ])



const pictures = ref([
    {title:'src/assets/images/1 1.png',name:'ابزار ها',number:'40'},
    {title:'src/assets/images/1 1.png',name:'ابزار ها',number:'40'},
    {title:'src/assets/images/1 1.png',name:'ابزار ها',number:'40'},
    {title:'src/assets/images/1 1.png',name:'ابزار ها',number:'40'},
    {title:'src/assets/images/1 1.png',name:'ابزار ها',number:'40'},
    {title:'src/assets/images/1 1.png',name:'ابزار ها',number:'40'},






])

const icons = ref([
    { pic: 'src/assets/images/Frame 8(1).png', text: 'inni' },
    { pic: 'src/assets/images/Frame 8(1).png', text: 'ubun' },
    { pic: 'src/assets/images/Frame 8(2).png', text: 'dccn' },
    { pic: 'src/assets/images/Frame 8(3).png', text: 'xjcu' }
])





const is = ref([
    { city: 'ایران,بجنورد', person: 'src/assets/images/img-1.png', number: '4.5', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempore perferendis obcaecati modi facere et cumque fuga dolorem laudantium unde ad, amet voluptas eligendi itaque nesciunt excepturi, laboriosam quia repellendus?'},
    { city: 'ایران,شیروان', person: 'src/assets/images/img-2.png', number: '3.5', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore tempora consequuntur nostrum non autem, voluptatum, doloribus sapiente minus rem dignissimos aperiam voluptatibus aliquam blanditiis consectetur nisi praesentium adipisci dicta.' },
    { city: 'ایران,بجنورد', person: 'src/assets/images/img-1.png', number: '4.5',text:'        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore tempora consequuntur nostrum non autem, voluptatum, doloribus sapiente minus rem dignissimos aperiam voluptatibus aliquam blanditiis consectetur nisi praesentium adipisci dicta.' },
    { city: 'ایران,شیروان', person: 'src/assets/images/img-1.png', number: '4.5' ,text:'        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore tempora consequuntur nostrum non autem, voluptatum, doloribus sapiente minus rem dignissimos aperiam voluptatibus aliquam blanditiis consectetur nisi praesentium adipisci dicta.'},
    { city: 'ایران,بجنورد', person: 'src/assets/images/img-1.png', number: '4.5',text:'        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore tempora consequuntur nostrum non autem, voluptatum, doloribus sapiente minus rem dignissimos aperiam voluptatibus aliquam blanditiis consectetur nisi praesentium adipisci dicta.' },
    { city: 'ایران,شیروان', person: 'src/assets/images/img-1.png', number: '4.5',text:'        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore tempora consequuntur nostrum non autem, voluptatum, doloribus sapiente minus rem dignissimos aperiam voluptatibus aliquam blanditiis consectetur nisi praesentium adipisci dicta.' },


])
const list = ref([
    { name: '', flagSource: '' }
])

const slides = [
    {
       
        img:'https://cdn.wallpapersafari.com/88/60/VYjS6R.jpg'
    },
    {
      img:'https://www.itl.cat/pngfile/big/117-1171475_cat-with-glasses-wallpaper-trippy-cat.jpg'
    },
    {
        img:'https://cutewallpaper.org/21/barney-wallpapers/Wallpapers-and-Pictures-Wallpapers-Ever-by-Barney-Cipriani-.jpg'
    },
    {
        img:'https://wallpapertag.com/wallpaper/middle/8/6/4/230523-widescreen-nyan-cat-wallpaper-1920x1200.jpg'
    }
]

</script>