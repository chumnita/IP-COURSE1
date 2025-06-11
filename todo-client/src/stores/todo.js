// src/stores/todo.js
import { reactive } from 'vue'
import axios from 'axios'

const API_BASE = 'http://localhost:3100'  // ✅ point to NestJS, not json-server

export const todoStore = reactive({
  todos: [],

  async fetchTodos() {
    const res = await axios.get(`${API_BASE}/tasks`)
    this.todos = res.data
  },
  async addTodo(text) {
    const res = await axios.post(`${API_BASE}/tasks`, {
      name: text,
      userId: 1  // ✅ Make sure this user exists
    })
    this.todos.push(res.data)
  },
  async markAsDone(id) {
    const res = await axios.patch(`${API_BASE}/tasks/${id}`, {
      completedAt: new Date().toISOString()
    })
    const index = this.todos.findIndex(t => t.id === id)
    if (index !== -1) this.todos[index] = res.data
  },

  async deleteTodo(id) {
    await axios.delete(`${API_BASE}/tasks/${id}`)
    this.todos = this.todos.filter(t => t.id !== id)
  },

  async updateTodo(id, newText) {
    try {
      const res = await axios.patch(`${API_BASE}/tasks/${id}`, {
        name: newText
      })
      const index = this.todos.findIndex(t => t.id === id)
      if (index !== -1) {
        this.todos[index] = res.data
      }
    } catch (err) {
      console.error('❌ Failed to update task:', err)
    }
  },

  async clearAll() {
  try {
    await axios.delete(`${API_BASE}/tasks/clear`)
    await this.fetchTodos()
  } catch (err) {
    console.error('❌ clearAll failed:', err)
  }
}

})
