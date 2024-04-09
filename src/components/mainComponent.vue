<script setup>
import { ref } from 'vue';
import oneComponent from './oneComponent.vue'
import twoComponent from './twoComponent.vue'
import threeComponent from './threeComponent.vue'

const currentTab = ref('oneComponent')

const tabs = {
    oneComponent,
    twoComponent,
    threeComponent
}
</script>

<template>
    <button @click="currentTab='oneComponent'" class="bg-gray-500">What is HTML </button><br>
    <button @click="currentTab='twoComponent'" class="bg-yellow-500"> What is CSS</button><br>
    <button @click="currentTab='threeComponent'" class="bg-red-500"> What is JS </button>


<component :is="tabs[currentTab]" />

</template>