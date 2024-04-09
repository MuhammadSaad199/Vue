import { ref } from "vue";

export function useCounter (intial=0){
    const count = ref(intial);
    const increament = ()=> count.value++
    const decreament = ()=> count.value--

    return { count,increament,decreament }
}