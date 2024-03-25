<script setup>
import childComponent from './childComponent.vue';
defineProps ({
    name: {
        type: String
        },
    age: {
            type: Number,
        }
})
</script>

<template>
<!-- <slot></slot>
<slot></slot> -->

<!-- <slot></slot> -->
<!-- <slot>
    <p>this is pass through slot component</p>
</slot> -->

<!-- <slot name="one"></slot>
<slot></slot> -->


<childComponent
:name="name"
:age="age"
/>
</template>