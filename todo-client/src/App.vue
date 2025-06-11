<template>
  <div class="app-container">
    <!--  Header -->
    <div class="header-bar"></div>

    <!-- Title -->
    <h1>Todo App</h1>

    <!-- 📝 Task Counter -->
    <p class="task-summary">📝 You have <strong>{{ pendingTasks.length }}</strong> pending tasks.</p>

    <!--Add Todo -->
    <div class="card add-box">
      <label>Enter task</label>
      <div class="input-row">
        <input v-model="taskText" />
        <button @click="addTask">Add</button>
      </div>
    </div>

    <!-- Pending Tasks -->
    <h2>Pending Tasks</h2>
    <div class="card task-list">
      <ul>
        <li v-for="task in pendingTasks" :key="task.id">
          <input type="checkbox" :checked="task.completedAt" @change="toggleDone(task)" />
          <span>{{ task.name }}</span>
          <div class="actions">
            <button @click="startEdit(task)">Edit</button>
            <button @click="todoStore.deleteTodo(task.id)">Delete</button>
          </div>
        </li>
      </ul>
    </div>

    <!-- ✅ Edit Mode -->
    <div v-if="editingTaskId" class="card edit-box">
      <label>Edit:</label>
      <div class="input-row">
        <input v-model="editedText" />
        <button @click="saveEdit">Save</button>
      </div>
    </div>

    <!-- ✅ Completed Tasks -->
    <h2>Completed Tasks</h2>
    <div class="card task-list">
      <ul>
        <li v-for="task in completedTasks" :key="task.id" class="done">
          <input type="checkbox" checked disabled />
          <span>{{ task.name }}</span>
        </li>
      </ul>
    </div>
    <div class="clear-all-wrapper">
      <button @click="todoStore.clearAll()" class="clear-button">
        Clear All
      </button>
    </div>
</div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { todoStore } from './stores/todo.js'

const taskText = ref('')
const editedText = ref('')
const editingTaskId = ref(null)

onMounted(() => {
  todoStore.fetchTodos()
})

const pendingTasks = computed(() => todoStore.todos.filter(t => !t.completedAt))
const completedTasks = computed(() => todoStore.todos.filter(t => t.completedAt))

function addTask() {
  if (taskText.value.trim()) {
    todoStore.addTodo(taskText.value.trim())
    taskText.value = ''
  }
}
function toggleDone(task) {
  if (!task.completedAt) todoStore.markAsDone(task.id)
}
function startEdit(task) {
  if (task.completedAt) return
  editingTaskId.value = task.id
  editedText.value = task.name
}
function saveEdit() {
  if (editedText.value.trim()) {
    todoStore.updateTodo(editingTaskId.value, editedText.value.trim())
    editingTaskId.value = null
    editedText.value = ''
  }
}
</script>

<style scoped>
.app-container {
  /* background: #fff; */
  min-height: 80vh;
  width: 500px;
  font-family: sans-serif;
  margin: auto;
  text-align: center;
  padding: 0 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.header-bar {
  height: 100px;
  width: 100%;
  background-color: #5fcfff;
  justify-content: center;
  align-items: center;
  margin: auto;
  /* margin-top: 30px; */
}
h1 {
  margin-top: -70px;
  font-size: 30px;
}
.task-summary {
  margin: 50px 0 20px;
}
.card {
  background: white;
  margin: 0 auto 20px;
  padding: 20px;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
}
.input-row {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
input[type="text"], input[type="checkbox"] {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
input[type="text"] {
  flex: 1;
}
button {
  background-color: #1ebadd;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 5px;
  cursor: pointer;
}
.task-list ul {
  list-style: none;
  padding: 0;
}
.task-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 0;
  border-bottom: 1px solid #eee;
}
.task-list .done span {
  text-decoration: line-through;
  color: gray;
}
.actions {
  display: flex;
  gap: 8px;
}
.clear-all-wrapper {
  margin-top: 1rem;
  text-align: center;
}

.clear-button {
  padding: 0.5rem 1rem;
  background-color: red;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

</style>
