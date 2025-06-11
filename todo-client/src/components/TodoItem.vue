<template>
  <div class="todo-item">
    <input type="checkbox" :checked="!!todo.completedAt" @change="toggleDone" />
    <span :class="{ done: todo.completedAt }">{{ todo.name }}</span>
    <button @click="deleteTask">🗑️</button>
  </div>
</template>

<script setup>
import { todoStore } from '@/stores/todo.js'

const props = defineProps({
  todo: Object
})

function toggleDone() {
  if (!props.todo.completedAt) {
    todoStore.markAsDone(props.todo.id)
  }
}

function deleteTask() {
  todoStore.deleteTodo(props.todo.id)
}
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 10px;
}
.done {
  text-decoration: line-through;
  color: gray;
}
</style>
