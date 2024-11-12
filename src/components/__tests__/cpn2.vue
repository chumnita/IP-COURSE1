<template>
    <div class="promo-banner" :style="{ backgroundColor: color }">
      <div>
      <h2>{{ title }}</h2>
      <!-- <button  :bgColor="buttonColor">Shop Now →</button> -->
      
      <cpn3 @click="shopNow()" :color="buttonColor"/>
      </div>
      <img :src="image" alt="promo image" class="promo-image" >
    </div>
  </template>
  <!-- main wrapper for each promotional banner. -->

  <script>
  import cpn3 from './cpn3.vue';
  export default {
    name: "cpn2",
    props: {
      title: String,
      image: String,
      color: String,
      buttonColor: { 
      type: String,
    }
    },
    components:{
      cpn3,
    },
    methods: {
        shopNow() {
             alert("Let's shop: "+this.title);
           
        }

    }

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
  /* .shopnowbutton{
    margin-top: 10px;
  padding: 5px 10px;
  background-color: #34a853;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;  
  width: 100px;
  height: 40px;
  } */
  h2 {
    font-size:x-large;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Arial, sans-serif;
    color: rgb(46, 43, 65);
  }
  .promo-image {
    margin-top: 50px;
    width: 150px;
    height: auto;
  }
  </style>