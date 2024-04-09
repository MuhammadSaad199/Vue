<script setup>
import {ref} from 'vue'
// import { provide } from 'vue';
// import HelloWorld from './components/HelloWorld.vue'
// import staticComponent from './components/staticComponent.vue';
// import dynamicComponent from './components/dynamicComponent.vue';
// import propValidation from './components/propValidation.vue';
// import childComponent from './components/childComponent.vue';
// import slotComponent from './components/slotComponent.vue';
// import lifeCycleHooks from './components/lifeCycleHooks.vue';
// import watcherComponent from './components/watcherComponent.vue';
// import toggelComponent from './components/toggleComponent.vue';
// import swiper from './components/swiper.vue';
// import countComposable from './components/countComposable.vue';
// import directive from './components/directive.vue';
import mainComponent from './components/mainComponent.vue';

// const firstname = ref('Muhammad');
// const lastName = ref('Ali');

// const age = ref(34)

// const formHandler = (name, email, password)=>{
//     console.log("UserName",name)
//     console.log("Email",email)
//     console.log("Password",password)
// }


// const name = "ali"
// const age= "34"

// provide ('friend', "asasd")
// provide('age', "34")

 
// provide('friend',['ali', 'ahmed' , 'asghar', 'raza' , 'asad','aman'])
// provide('userInfo',{name:'ali', age:'39', earth:['earth','idk']})

// const showHide = ref(false)

</script>

<template>

<!-- <slotComponent />
    <childComponent /> -->
<!-- <HelloWorld /> -->
<!-- <staticComponent    name="firstName"/>
<dynamicComponent :first-name="firstName" :last-name="lastName"/> -->


<!-- <propValidation  
    :friend="['ali', 'ahmed' , 'asghar', 'raza' , 'asad','aman']"
    :userInfo="{name:'ali', age:'39', earth:['earth','idk']}"
/> -->


<!-- <propValidation name="ali"  age="22" password="useme"  /> -->

<!-- <childComponent @userInfo="formHandler"/> -->

<!-- <SlotComponent>
    <p>jsoiajijfsdoijj</p>
    <p>contain2</p>
</SlotComponent> -->

<!-- <slotComponent>
    <p>how are you </p>
</slotComponent> -->

<!-- <slotComponent>
    <template #one>
        <p>
            THis is dhus dhus content 1
        </p>
    </template>

    <template #default>
        <p>
            THis is dhus dhus content 2
        </p>
    </template>
</slotComponent> -->


<!-- <iframe
  width="600"
  height="450"
  style="border:0"
  loading="lazy"
  allowfullscreen
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBx_vsw_tV_xA4aHONcHz94riSIaYT-ofM&q=place_id:ChIJQXjlfEXkGTkRJr8SpD-54u0">
</iframe> -->

<!-- <slotComponent
    :name="name"
    :age="age"
/> -->


<!-- <lifeCycleHooks v-if="showHide"/><br><br>
<button class="bg-slate-900 text-white" @click="showHide = !showHide">Show / Hide</button> -->


<!-- <watcherComponent /> -->


<!-- <toggelComponent /> -->


<!-- <swiper /> -->

<!-- <countComposable /> -->

<!-- <directive /> -->

<mainComponent />
</template>
