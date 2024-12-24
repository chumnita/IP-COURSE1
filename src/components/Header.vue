<template>
  <div class="header">
    <nav>
      <span id="header">Header</span>
      <span
        v-for="page in pages"
        :key="page"
        :class="{ active: page === currentPage }"
        @click="selectPage(page)"
      >
        {{ page }}
      </span>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["pages", "currentPage"],
  methods: {
    selectPage(page) {
      this.$emit("page-selected", page);
    },
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
#header {
  width: 550px;
}
nav {
  display: flex;
  gap: 15px;
}
nav span {
  cursor: pointer;
}
nav span.active {
  color: red;
  font-weight: bold;
}
</style>
