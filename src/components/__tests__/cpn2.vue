<template>
    <div class="promo-banner" :style="{ backgroundColor: bgColor }">
      <div>
      <h2>{{ title }}</h2>
      <cpn3/>
      </div>
      <img :src="image" alt="promo image" class="promo-image" >
    </div>
  </template>
  
  <script>
  import cpn3 from './cpn3.vue';
  export default {
    name: "cpn2",
    props: {
      title: String,
      image: String,
      bgColor: String,
      buttonColor: { 
      type: String,
    }
    },
    components:{
      cpn3,
    },
  };
  </script>
  
  <style scoped>
  .promo-banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-radius: 10px;
    color: #333;
    height: 250px;
    width: 420px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  h2 {
    font-size:x-large;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Arial, sans-serif;
    color: rgb(46, 43, 65);
  }
  .promo-image {
    width: 150px;
    height: auto;
  }
  </style>