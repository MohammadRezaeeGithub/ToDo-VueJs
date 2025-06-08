import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo-store', {
  state() {
    return {
      todo: [],
      loading: true,
      errMsg: '',
    }
  },
  //these functions return our state with some modification
  getters: {
    sorted() {
      return this.todo.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    },
    done: (state) => {
      return state.todo.filter((todo) => todo.done)
    },
  },
  actions: {
    getTodo() {
      //api call
      fetch('http://localhost:3000/todo')
        .then((res) => res.json())
        .then((data) => {
          this.todo = data
          this.loading = false
        })
        .catch((e) => {
          this.errMsg = 'error'
          this.loading = false
          console.log(e)
        })
    },
    addTodo: () => {},
    deleteTodo(id) {
      this.todo = this.todo.filter((t) => t.id !== id)
      fetch(`http://localhost:3000/todo${id}`, { method: 'DELETE' }).catch((e) => console.log(e))
    },
    updateTodo(id) {
      const todo = this.todo.find((t) => t.id === id)
      todo.done = !todo.done
      fetch(`http://localhost:3000/todo${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ done: todo.done }),
      }).catch((e) => console.log(e))
    },
  },
})
