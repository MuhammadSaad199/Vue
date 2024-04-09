<template>
    <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper "
    >
      <swiper-slide class="border"> 
   slide 1
    
</swiper-slide>
      <swiper-slide class="border"> 
</swiper-slide>
      <swiper-slide class="border"> 
</swiper-slide>

    </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
  

  
    // import required modules
    import { Pagination, Navigation } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Pagination, Navigation],
        };
      },
    };



    const marqueeData = [
  {
    image: 'practice/asad-zaman.jpg',
    logo: 'practice/asad-zaman.jpg',
    name: 'Shahwaiz Saeed',
    description: 'Shahwaiz is a high school dropout, and he is currently earning 6-figures as a DevOps Engineer after studying from us.'
  },
  
  {
    image: 'practice/asad-zaman.jpg',
    logo: 'practice/asad-zaman.jpg',
    name: 'Aawaiz Saeed',
    description: 'Aawaiz, again a dropout. He is working as an Azure DevOps Engineer.'
  },
  {
    image: 'practice/asad-zaman.jpg',
    logo: 'practice/asad-zaman.jpg',
    name: 'Shahzaib Waqar',
    description: 'Shahzaib is from Germany, and he\'s working in the field of cybersecurity.'
  }
]
  </script>
  <style scoped>
  .swiper {
    width: 600px;
    height: 300px;
  }
  </style>