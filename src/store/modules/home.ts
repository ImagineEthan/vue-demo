import {defineStore} from 'pinia'
import { ref } from 'vue'

const Home = defineStore('Home',()=>{
    const count = ref<number>(12)
    function increment() {
      count.value++
    }

    return { count, increment }
},{
    persist:true
})

export default Home