<template>
  <div class="promotion-container" :style="{ backgroundColor: bgColor }">
    <div class="promotion-details">
      <h2 class="promotion-title">{{ title }}</h2>
      <MyButton @click="shopNow" :bgColor="buttonColor" />
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
    bgColor: String,
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
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 15px;
  align-items: center;
  padding: 20px;
  border-radius: 12px;
  color: #444;
  height: auto;
  max-width: 450px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s;
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

.promotion-title {
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
  color: #2c2a47;
}

.promotion-image {
  width: 140px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}
</style>
