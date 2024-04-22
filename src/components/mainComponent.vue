<script>
import {
    ref
} from 'vue';
// import oneComponent from './oneComponent.vue'
// import twoComponent from './twoComponent.vue'
// import threeComponent from './threeComponent.vue'
// import imgPath from '@/public/img/image-834.png';

// const currentTab = ref('oneComponent')

// const tabs = {
//     oneComponent,
//     twoComponent,
//     threeComponent
// }
</script>

<template>
<!-- <button @click="currentTab='oneComponent'" class="bg-gray-500">What is HTML </button><br>
    <button @click="currentTab='twoComponent'" class="bg-yellow-500"> What is CSS</button><br>
    <button @click="currentTab='threeComponent'" class="bg-red-500"> What is JS </button>

    <component :is="tabs[currentTab]" /> -->

<!-- <div class="grid md:grid-cols-3 grid-cols-2 gap-6">
        <div class="border h-36 w-60 bg-slate-600">1</div>
        <div class="border h-36 w-60 bg-slate-600">2</div>
        <div class="border h-36 w-60 bg-slate-600">3</div>
        <div class="border h-36 w-60 bg-slate-600">4</div>
        <div class="border h-36 w-60 bg-slate-600">5</div>
        <div class="border h-36 w-60 bg-slate-600">6</div>
    </div> -->
<div class="mx-auto">
<div class="grid grid-rows-3 md:grid-flow-col gap-6 border-2 border-rose-500">
    <div class="border-2 border-rose-500 bg-slate-300 row-span-3 flex flex-col items-start gap-4">
        <img src="/image-834.png" alt="image" class="w-[510px]">
        <div class="space-y-4">
            <h4 class="font-semibold">Introducing Our CISSP Certification Course: The Complete Exam Preparation</h4>
            <p>For students looking for a CISSP certification course that can give them the confidence in conquering their CISSP exam, look no further than Al-Nafi! Our “CISSP –
                The Complete Exam Preparation Course” is like a personalized guide to equip you for the CISSP exam, and we’re all about making your journey as seamless as possible.</p>
            <p class="text-blue-700 font-semibold">Read More -></p>
        </div>
    </div>







    <div class="border-2 border-rose-500 flex flex-col md:flex-row gap-4  h-fit">
        <div class="">
            <img src="/image-834.png" alt="image" class="object-fill max-w-[245px]">
        </div>
        <div class="flex flex-col justify-between ">
            <div>
                <p class="text-[#4A4A4A] text-sm rounded-md w-fit mb-[10px] border border-[#DADADA] bg-[#F7F9FA] py-1 px-2">February 7, 2024</p>
                <h4 class="font-semibold mb-[20px]">Introducing Our CISSP Certification Course: The Complete Exam Preparation</h4>
            </div>
            <div>
                <p class="text-[#2D6FBC] font-semibold content-end">Read More -></p>
            </div>
        </div>
    </div>


    <div class="border-2 border-rose-500 flex flex-col md:flex-row gap-4  h-fit">
        <div class="max-w-[238px] h-fit">
            <img src="/image-834.png" alt="image" class="object-fill">
        </div>
        <div class="flex flex-col justify-between ">
            <div>
                <p class="text-[#4A4A4A] text-sm rounded-md w-fit mb-[10px] border border-[#DADADA] bg-[#F7F9FA] py-1 px-2">February 7, 2024</p>
                <h4 class="font-semibold mb-[20px]">Introducing Our CISSP Certification Course: The Complete Exam Preparation</h4>
            </div>
            <div>
                <p class="text-[#2D6FBC] font-semibold content-end">Read More -></p>
            </div>
        </div>
    </div>


    <div class="border-2 border-rose-500 flex flex-col md:flex-row gap-4  h-fit">
        <div class="max-w-[238px] ">
            <img src="/image-834.png" alt="image" class="object-fill">
        </div>
        <div class="flex flex-col justify-between ">
            <div>
                <p class="text-[#4A4A4A] text-sm rounded-md w-fit mb-[10px] border border-[#DADADA] bg-[#F7F9FA] py-1 px-2">February 7, 2024</p>
                <h4 class="font-semibold mb-[20px]">Introducing Our CISSP Certification Course: The Complete Exam Preparation</h4>
            </div>
            <div>
                <p class="text-[#2D6FBC] font-semibold content-end">Read More -></p>
            </div>
        </div>
    </div>


    
</div>
</div>

</template>
