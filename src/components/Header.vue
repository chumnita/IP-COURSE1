<template>
  <header class="header">
    <div class="header-left">
      <span>Header</span>
    </div>
    <nav>
      <a
        v-for="(page, index) in pages"
        :key="index"
        href="#"
        @click.prevent="$emit('page-selected', page)"
        :class="{ active: currentPage === page }"
      >
        {{ page }}
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    pages: Array,
    currentPage: String,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f1f1f1;
  padding: 10px 20px;
  font-size: 20px;
  border-bottom: 1px solid #ccc;
}
.header nav a {
  margin-left: 20px;
  text-decoration: none;
  color: black;
}
.header nav a.active {
  color: red;
  font-weight: bold;
}
</style>
