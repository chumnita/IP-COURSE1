<template>
    <div class="category-card" :style="{ backgroundColor: bgColor }">
      <img :src="image" alt="category image" class="category-image" >
      <h3>{{ title }}</h3>
      <p>{{ items }} items</p>
    </div>
  </template>
  <script>
  export default {
    name: "cpn1",
    props: {
      title: String,
      items: Number,
      image: String,
      bgColor: String,
    },
  };
  </script>
  <style scoped>                                      
  .category-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    border-radius: 10px;
    width: 115px;
    text-align: center;
    border: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .category-image {
    width: 90px;
    height: 90px;
    object-fit: contain;
  }
  h3 {
    font-size: small;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Arial, sans-serif;
    color: rgb(46, 43, 65);
  }
  p {
    font-size: 10px;
    color: #666;
  }
  </style>