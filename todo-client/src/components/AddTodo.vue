<template>
  <form @submit.prevent="addTask" class="add-form">
    <input v-model="text" placeholder="Enter task" required />
    <button type="submit">Add</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { todoStore } from '../stores/todo.js'

const text = ref('')
const emit = defineEmits(['taskAdded'])

async function addTask() {
  await todoStore.addTodo(text.value)
  text.value = ''
  emit('taskAdded')
}
</script>

<style scoped>
.add-form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
input {
  flex: 1;
  padding: 0.5rem;
}
button {
  padding: 0.5rem 1rem;
}
</style>
