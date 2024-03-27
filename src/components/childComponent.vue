<script setup>

import { inject } from 'vue';

const friend = inject('friend')
const userInfo = inject('userInfo');

// import { ref } from 'vue';
// defineProps ({
//     name: {
//         type: String,
//     },
//     age: {
//             type: Number,
//         }
// })

// const name = ref("")
// const email = ref("")
// const password = ref("")

    </script>

    <template>
    <!-- <form @submit.prevent="$emit('userInfo', name, email, password)">
        <input type="text" placeholder="Name" v-model="name">
        <input type="email" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <button :disabled="password.length<8" type="submit">Submit</button>
    </form> -->
<!-- 
    <p>{{ name }}</p>
    <p>{{ age }}</p> -->

<ul v-for="(fri,index) in friend" :key="index"> 
    <li>{{ fri }}</li>
</ul>
<hr><hr><hr><hr><hr>
<ul v-for="(info,i) in userInfo" :key="i">
    <li>{{ info }}</li>
</ul>
 
</template>