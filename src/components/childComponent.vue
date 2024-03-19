<script setup>
import { ref } from 'vue';

const name = ref("")
const email = ref("")
const password = ref("")

</script>

<template>
    <form @submit.prevent="$emit('userInfo', name, email, password)">
        <input type="text" placeholder="Name" v-model="name">
        <input type="email" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <button :disabled="password.length<8" type="submit">Submit</button>
    </form>
</template>