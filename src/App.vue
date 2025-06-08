<script setup>
import { useTodoStore } from './stores/todo'

const todoStore = useTodoStore()

todoStore.getTodo()
</script>

<template>
  <header class="flex justify-between px-2 py-4 border-b-2 border-blue-300 bg-blue-600">
    <nav>
      <RouterLink
        to="/"
        class="text-white px-2 py-4 mr-4 hover:bg-blue-300 hover:text-blue-600 rounded-md"
        >Home</RouterLink
      >
      <RouterLink
        to="/add"
        class="text-white px-2 py-4 mr-4 hover:bg-blue-300 hover:text-blue-600 rounded-md"
        >New Todo</RouterLink
      >
    </nav>
  </header>
  <RouterView />
</template>
