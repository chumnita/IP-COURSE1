<template>
  <div class="btn-container">
    <button 
      class="shop-btn" 
      :style="{ backgroundColor: btnColor }">Shop Now →</button>
  </div>
</template>

<script>
export default {
  name: "ShopButton",
  props: {
    btnColor: {
      type: String,
    },
  },
};
</script>

<style scoped>
.shop-btn {
  margin: 15px auto;
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  font-weight: bold;
  border: 2px solid #4caf50;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 120px;
  height: 45px;
}

.shop-btn:hover {
  background-color: #45a049;
  border-color: #388e3c;
  color: #e8f5e9;
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
