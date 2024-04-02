<script setup>
import {ref} from "vue";
const friendName = ref(['alice', 'sally', 'james', 'tiger', 'bob', 'hann'])
</script>

<template>
<li v-for="(frdName, index) in friendName" :key="index">{{ frdName }}</li>
</template>     