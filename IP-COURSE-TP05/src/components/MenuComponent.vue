<template>
    <div>
 
      <div class="sidebar">
        <router-link to="/page1/section1">Menu</router-link>
        <router-link to="/page1/section1">Section 1</router-link>
        <router-link to="/page1/section2">Section 2</router-link>
        <router-link to="/page1/section3">Section 3</router-link>
        <router-link to="/page1/section4">Section 4</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      navigateToSection(section) {
        this.$router.push(`/page1/${section}`);
        this.$router.push(`/page2/${section}`);
        this.$router.push(`/page3y/${section}`);
      },
    },
  };
  </script>
  
  <style>
  .button-menu {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    background: #f8f9fa;
    padding: 10px;
  }
  
  .button-menu button {
    background-color: #007bff;
    border: none;
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .button-menu button:hover {
    background-color: #0056b3;
  }
  
  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 10px;
    
  }
  
  .sidebar a {
    text-decoration: none;
    color: #007bff;
    padding: 5px;
  }
  
  .sidebar a:hover {
    text-decoration: underline;
  }
  </style>
  