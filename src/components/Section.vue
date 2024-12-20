<template>
    <aside class="sidebar">
      <div class="menu-label">Menu</div>
      <ul>
        <li
          v-for="(section, index) in sections"
          :key="index"
          @click="$emit('section-selected', section)"
        >
          {{ section }}
        </li>
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    name: "Section",
    props: {
      sections: Array,
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 25%;
    background-color: #f8f8f8;
    border-right: 1px solid #ccc;
    padding: 10px;
  }
  .menu-label {
    text-align: center;
    font-size: 20px;
    margin-bottom: 10px;
  }
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  .sidebar li {
    padding: 10px;
    border: 1px solid #ccc;
    margin: 5px 0;
    text-align: center;
    cursor: pointer;
  }
  .sidebar li:hover{
   background-color: rgba(135, 207, 235, 0.699);

  }
  </style>
  