<template>
  <div class="pb-4 border-2 border-blue-300">
    <div class="bg-blue-400 flex justify-between items-center p-3.5 text-sm text-white">
      <span>Date: {{ todo.createdAt }}</span>
      <div class="flex items-center">
        <button class="text-red-600 mr-1.5 cursor-pointer" @click="todoStore.deleteTodo(todo.id)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
        <label>
          {{ todo.done ? 'Done' : 'Pending' }}
          <input
            type="checkbox"
            :checked="todo.done"
            class="ml-1"
            @click="todoStore.updateTodo(todo.id)"
          />
        </label>
      </div>
    </div>
    <h1 class="py-4 text-2xl ml-4">{{ todo.name }}</h1>
    <p class="ml-4 rounded-full bg-blue-400 text-white inline-block py-2 px-5">
      {{ todo.priority }}
    </p>
  </div>
</template>

<script setup>
import { useTodoStore } from '@/stores/todo'

defineProps({
  todo: {
    type: Object,
    required: true,
  },
})

const todoStore = useTodoStore()
</script>

<style lang="scss" scoped></style>
