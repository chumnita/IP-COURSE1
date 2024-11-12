<template>
    <div class="content">
      <button class="shop-now" :style="{ backgroundColor: color }">Shop Now →</button>
    </div>
</template>
<script>
export default {
    name:"shopbtn",
    props: {
    color: {
      type: String,
    },
  },
};    
</script>
<style scoped>
.shop-now {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #f5cb0f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
  height: 40px;
}
</style>