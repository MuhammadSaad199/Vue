<script setup>
import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'

const message = ref("hello life cycle hooks its working")

onMounted(() => {
        console.log("hello life cycle hooks its working mounter is here");
    })



onBeforeMount(() => {
        console.log("hello life cycle hooks its working before mounter is here");
    })


    onBeforeUpdate(() => {
        console.log("hello life cycle hooks its working before Update is here");
    })


    const msg = ()=>{
        message.value = "Updated Message"
    }

onUnmounted(()=>{
    console.log("its unmounted WORKING")
})

</script>

<template>
    <h1>{{ message }}</h1>
    <button @click="msg" class="bg-slate-950 text-white">Update Button</button>


</template>