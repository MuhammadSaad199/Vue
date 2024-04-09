<script setup>
import { useCounter} from '../composable/counter'

const count = useCounter()
</script>

<template>
    <h1>count: {{ count.count }}</h1>
    <button @click="count.increament">Increament</button><br>
    <button @click="count.decreament">Decreament</button>
</template>