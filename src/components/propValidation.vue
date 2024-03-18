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

// defineProps({
//     friend: Array,
//     userInfo: Object,
// })

defineProps ({
    name: {
        type: String,
        validator: (propValue) => {
            return ["ali","sirat", "sawat"].includes(propValue)
        }
    },
    age: {
            type: Number,
            validator: (propValue) => (propValue >= 18 && propValue <= 30 ? true : false)
        },
    password: {
        type: String,
        validator: (propValue) => propValue.length >= 8 
    }
})
</script>

<template>
    <!-- <p>{{ firstname }}</p>
    <p>{{ age }}</p> -->

<!-- <ul><li v-for="(friends, index) in friend" :key="index">{{ friends }}</li></ul>
<ul><li v-for="(info, i) in userInfo" :key="i">{{ info }}</li></ul> -->


<p>Name: {{ name }}</p>
<p>Age: {{ age }}</p>
<p>Password: {{ password }}</p>

</template>