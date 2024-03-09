<script setup>
import { ref, computed } from "vue";  
// let msg = "text interpolation"
// let add = (x,y)=>{
//     return x+y;
// }
// let my_link = "https://www.youtube.com/watch?v=pgWZLS75Nmo"

// let count = ref(0)
// const increment = () => count.value++
// const decrement = () => count.value--
// let myMsg = (msg)=> alert(msg)

// let detail = reactive({ val: {num: 0}, user:["saad ", "ali"]})
// let changeUser = () => {
//     detail.user[0] = "ali"
//     detail.user[1] = "SAAD"
// }

// let SqNum = computed(() => count.value ** 2)
// let incre=()=>{count.value+=3}

// const isActive = ref(false)

// let pass = ref("password123")

// let people = ref(["ali, alam, mustaqeem"])

let name = ref([
  { id: 2, username: 'jane_smith', email: 'jane@example.com', role: 'user'},
  { id: 3, username: 'bob_jones', email: 'bob@example.com', role: 'admin'},
  { id: 4, username: 'alice_wonder', email: 'alice@example.com', role: 'user'},
  { id: 5, username: 'charlie_brown', email: 'charlie@example.com', role: 'user' },
  { id: 6, username: 'emily_white', email: 'emily@example.com', role: 'admin' }
])
</script>

<template>
<!-- <h1>{{ msg }}</h1>
<h3>This is add function: {{ add(5,6) }}</h3>
<a :href="my_link">Youtube</a>
<h1>Count: {{ count }}</h1>
<button @click="increment" class="g">increament</button>
<button @click="decrement" class="q">decreament</button>
<button class="g" @click="myMsg('Assamlam u alaikum kese hai aap')">My Message</button> -->
<!-- 
<h1>{{ detail.val.num }}</h1>
<button class="q" @click="detail.val.num +=10">Add 10</button>
<h1>{{ detail.user }}</h1>
<button class="g" @click="changeUser">Update Users</button>  -->

<!-- <h1> counter: {{ count }}</h1>
<h1>Square of counter: {{ SqNum}}</h1>
<button @click="incre">Increament</button>
<h1>counter1: {{ count  }}</h1> -->

<!-- <div v-if="isActive">
    <h1>User is Active</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    A voluptatem ducimus inventore tenetur minus ipsa quasi, aperiam obcaecati accusamus commodi, 
    sit nesciunt ut quae doloremque praesentium, veniam ratione quibusdam ea?</p>
</div>
<button class="g" @click="isActive = !isActive">toggle</button> -->

<!-- <h1 v-if="pass.length >= 8">strong password</h1>
<h1 v-else-if="pass.length < 8">weak password</h1>
<h1 v-else>please enter correct password</h1> -->

<p v-for="(person, index) in name" :key="index"> {{ person }}
    <li class="a" v-for="(inner, i) in person" :key="i">{{ inner }}</li>
</p>
</template>

<style>
.a{ 
    padding-left: 40px;
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