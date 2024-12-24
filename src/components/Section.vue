<template>
  <div class="sidebar">
    <ul>
      <li
        v-for="section in sections"
        :key="section"
        @click="onSectionClick(section)"
        :class="{ active: section === currentSection }"
      >
        {{ section }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["sections", "currentSection"],
  methods: {
    onSectionClick(section) {
      // Emit the selected section and update the route
      this.$emit("section-selected", section);
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  border-right: 1px solid #ccc;
  padding: 10px;
  margin-right: 50px;
}
ul {
  list-style: none; /* Remove list style */
  padding: 0;
  margin: 0;
}
li {
  padding: 10px 0;
  cursor: pointer;
  border-bottom: 1px solid #eee; /* Add section line */
  transition: background-color 0.2s;
}
li.active {
  font-weight: bold;
  color: blue;
}
li:hover {
  background-color: #aedaec;
}
</style>
