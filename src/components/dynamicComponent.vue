<script setup>
const props = defineProps(['firstName', 'lastName'])
</script>

<template>
    <p>
        {{ firstName }}
    </p>
    <p>{{ lastName }}</p>
</template>