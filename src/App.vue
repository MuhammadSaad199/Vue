<script setup>
import {ref} from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
// import staticComponent from './components/staticComponent.vue';
// import dynamicComponent from './components/dynamicComponent.vue';
import propValidation from './components/propValidation.vue';

const firstname = ref('Muhammad');
// const lastName = ref('Ali');

const age = ref(34)

</script>

<template>
<!-- <HelloWorld /> -->
<!-- <staticComponent    name="firstName"/>
<dynamicComponent :first-name="firstName" :last-name="lastName"/> -->
<propValidation  
    :friend="['ali', 'ahmed' , 'asghar', 'raza' , 'asad','aman']"
    :userInfo="{name:'ali', age:'39', earth:['earth','idk']}"
/>
</template>

<style scoped>

</style>
