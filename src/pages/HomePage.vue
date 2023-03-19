<script setup lang="ts">
import useStore from '@/store/index'
import { storeToRefs } from 'pinia';
import Hello from '@/components/HelloWorld.vue'

const { useHomeStore } = useStore()
let { count } = storeToRefs(useHomeStore)

const add = ()=>{
  useHomeStore.count++
}
</script>

<template>
  <div>
      Home Page  {{ count }}
  </div>
  <button @click="add">add</button>
  <Hello></Hello>
</template>

<style scoped>
</style>
