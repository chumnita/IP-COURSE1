<template>
  <div class="promotion-container" :style="{ backgroundColor: Color }">
    <div class="promotion-details">
      <h2>{{ title }}</h2>
      <MyButton @click="shopNow()"  class="shop-now-button" :style="{backgroundColor :buttonColor}"/>
    </div>
    <img :src="image" alt="Promotion Image" class="promotion-image" />
  </div>
</template>

<script>
import MyButton from './button.vue';

export default {
  name: "PromotionBanner",
  props: {
    title: String,
    image: String,
    color: String,
    buttonColor: {
      type: String,
    },
  },
  components: {
    MyButton,
  },
  methods: {
    shopNow() {
      alert("Let's shop: " + this.title);
    },
  },
};
</script>

<style scoped>

.promotion-container {
  padding: 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  color: #333;
  height: 220px;
  width: 465px;
}

.promotion-container:hover {
  transform: scale(1.05);
}

.promotion-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

h2 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: black;
  margin-bottom: 16px;
}
.promotion-image {
  width: 220px;
  height: 180px;
  object-fit: contain;
  margin-top: 50px; 
  margin-right: -20px;
}
 .promotion-details MyButton{
  background-color: #f5cb0f;

}
.shop-now-button {
  background-color: green; 
  color: #fff; 
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
</style>
