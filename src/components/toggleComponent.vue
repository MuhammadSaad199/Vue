<script setup>
// import renderComponent from './renderComponent.vue';
import { ref, defineAsyncComponent } from 'vue';

const renderComponent = defineAsyncComponent(()=>import("./renderComponent.vue"))

const ffff = ref(false);
const togglefriend =()=>(
    ffff.value = !ffff.value
)
</script>

<template>

<div v-if="ffff">
    <renderComponent />
</div>
    <button @click="togglefriend">Show/Hide</button>

</template> 