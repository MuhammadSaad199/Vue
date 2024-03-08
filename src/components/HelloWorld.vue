<script setup>
import { ref } from "vue";  
let msg = "text interpolation"
let add = (x,y)=>{
    return x+y;
}
let my_link = "https://www.youtube.com/watch?v=pgWZLS75Nmo"

let count = ref(0)
const increment = () => count.value++
const decrement = () => count.value--

let myMsg = (msg)=> alert(msg)
</script>


<template>
<h1>{{ msg }}</h1>
<h3>This is add function: {{ add(5,6) }}</h3>
<a :href="my_link">Youtube</a>
<h1>Count: {{ count }}</h1>
<button @click="increment" class="g">increament</button>
<button @click="decrement" class="q">decreament</button>
<button class="g" @click="myMsg('Assamlam u alaikum kese hai aap')">My Message</button>
</template>

<style>
.a{ 
    color: red;
}
.g{
    margin-left: 10px;
    background-color: blueviolet;
    border-radius: 4px;
    padding: 3px;

}
.q{
    background-color: blueviolet;
    margin-left: 10px;
    border-radius: 4px;
    padding: 3px;

}
</style>