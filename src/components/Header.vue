<template>
    <header>
      <nav>
        <router-link to="/page1">Page 1</router-link>
        <router-link to="/page2">Page 2</router-link>
        <router-link to="/page3">Page 3</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>
  
  <style>
  header {
    background: #f8f9fa;
    padding: 10px;
    text-align: center;
    /* background-color: red; */
  }
  
  nav a {
    margin: 0 10px;
    text-decoration: none;
    color: red;
  }
  </style>
  