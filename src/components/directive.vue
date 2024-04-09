<script setup>
// const vFormateDiv = {
//     mounted: (el, binding) => {
        // el.style.fontSize = binding.value + 'px'
        // el.style.fontSize = `${binding.value}rem`
        // el.style.border = binding.value + 'px solid black'
        // console.log(binding.arg)


        // switch (binding.arg) {
        //     case 'orange':
        //         el.style.color = 'orange'
        //         break
        //     case 'pink':
        //         el.style.color = 'pink'
        //         break
        //     case 'red':
        //         el.style.color = 'red'
        //         break
        //     default:
        //             el.style.color = 'teal'
        // }
    // }
// }



const vFormateDiv = (el) => el.style.fontSize = '12px'


</script>

<template>
    <div v-formate-div:red>using simple custom directives for first time</div>
</template>