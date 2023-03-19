import { defineStore } from "pinia";
import { ref } from "vue";

const Head = defineStore(
  "Head",
  () => {
    const count = ref(0);
    function increment() {
      count.value++;
    }

    return { count, increment };
  },
  {
    persist: true,
  }
);

export default Head;
