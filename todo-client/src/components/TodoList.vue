<template>
  <div>
    <ul class="todo-list">
      <li v-for="task in tasks" :key="task.id" class="task-item">
        <!-- Editing state for pending task -->
        <template v-if="editingTaskId === task.id && !task.completedAt">
          <input v-model="editedText" class="edit-input" />
          <button @click="save(task)">💾 Save</button>
          <button @click="cancelEdit">❌ Cancel</button>
        </template>

        <!-- Default display -->
        <template v-else>
          <span :class="{ done: task.completedAt }">{{ task.name }}</span>
          <div class="actions">
            <button v-if="!task.completedAt" @click="complete(task)">✅ Complete</button>
            <button v-if="!task.completedAt" @click="startEdit(task)">✏️ Edit</button>
            <button @click="remove(task)">🗑️ Delete</button>
          </div>
        </template>
      </li>
    </ul>

    <!-- ✅ One-time Clear All button for all completed tasks -->
    <div class="clear-all">
      <button @click="todoStore.clearAll()">🧹 Clear All</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { todoStore } from '../stores/todo.js'

defineProps({ tasks: Array })

const editingTaskId = ref(null)
const editedText = ref('')

function startEdit(task) {
  editingTaskId.value = task.id
  editedText.value = task.name
}

function cancelEdit() {
  editingTaskId.value = null
  editedText.value = ''
}

async function save(task) {
  if (editedText.value.trim()) {
    await todoStore.updateTodo(task.id, editedText.value.trim())
    cancelEdit()
  }
}

async function complete(task) {
  if (!task.completedAt) {
    await todoStore.markAsDone(task.id)
  }
}

async function remove(task) {
  await todoStore.deleteTodo(task.id)
}
</script>

<style scoped>
.todo-list {
  list-style: none;
  padding: 0;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0;
  border-bottom: 1px solid #ddd;
}

.done {
  text-decoration: line-through;
  color: gray;
}

.actions {
  display: flex;
  gap: 0.4rem;
}

.edit-input {
  flex: 1;
  margin-right: 0.5rem;
}

.clear-all {
  margin-top: 1rem;
  text-align: center;
}

.clear-all button {
  padding: 0.4rem 1rem;
  background-color: crimson;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
