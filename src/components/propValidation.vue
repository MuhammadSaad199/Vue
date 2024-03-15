<script setup>
// const props = defineProps({
//     firstname: String,
//     age: Number,
// })

// const props = defineProps({
//     firstname: {
//         type: String,
//         required: true,
//         default: "dhas dhas dhas dhas",
//     },
//     age: Number
// })

defineProps({
    friend: Array,
    userInfo: Object,
})
</script>

<template>
    <!-- <p>{{ firstname }}</p>
    <p>{{ age }}</p> -->
<ul>
<li v-for="(friends, index) in friend" :key="index">{{ friends }}</li></ul>
<ul><li v-for="(info, i) in userInfo" :key="i">{{ info }}</li></ul>


</template>