<script setup>
import Wraper from '@/components/Wraper.vue'
import TodoItem from '../components/TodoItem.vue'
import { useTodoStore } from '@/stores/todo'
import { ref } from 'vue'

const todoStore = useTodoStore()

const todoFilter = ref('all')

const setTodoFilter = () => {
  todoFilter.value = todoFilter.value === 'all' ? 'done' : 'all'
}
</script>

<template>
  <div class="flex justify-between items-center px-8 py-2">
    <div class="flex items-center gap-2.5">
      <h3 class="cursor-pointer">{{ todoFilter === 'all' ? 'All Todo' : 'Done Todo' }}</h3>
    </div>
    <button
      class="text-white bg-blue-600 px-2 py-3.5 rounded-md cursor-pointer"
      @click="setTodoFilter"
    >
      {{ todoFilter === 'all' ? 'Show Done Todo' : 'Show All Todo' }}
    </button>
  </div>
  <div v-if="todoFilter === 'all'">
    <div v-for="todo in todoStore.sorted" :key="todo.id">
      <Wraper>
        <TodoItem :todo="todo" />
      </Wraper>
    </div>
  </div>

  <div v-if="todoFilter === 'done'">
    <div v-for="todo in todoStore.done" :key="todo.id">
      <Wraper>
        <TodoItem :todo="todo" />
      </Wraper>
    </div>
  </div>
</template>
