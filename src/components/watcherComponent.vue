<script setup>
import { ref, watch, reactive } from 'vue'

const message = ref("hello world")
const inputText = ref("")

const state = reactive({UserName:"sami"})

watch(()=>state.UserName, (oldValue, newValue) => {
        console.log(oldValue)
        console.log(newValue)
        message.value = `you typed: ${newValue}`
    })
</script>

<template>
    <h1>something</h1>
<h1>{{ state.UserName }}</h1>
<!-- <input v-model="inputText" placeholder="type something...">   -->
<button @click="state.UserName='ali'">change Name</button>
</template>