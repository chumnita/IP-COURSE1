<template>
  <button class="shop-btn">Shop Now →</button>
</template>

<script>
export default {
  name: 'ShopButton',
};
</script>

<style scoped>
.shop-btn {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
  height: 40px;
}

/* Style for specific buttons */
.shop-btn:nth-child(3) {
  background-color: #f5cb0f;
  color: #000; /* Adjust for readability */
}
</style>
