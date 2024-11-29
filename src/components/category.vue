<template>
  <div class="category-container" :style="{ backgroundColor: color }">
    <img :src="image" alt="Category Image" class="category-thumbnail" />
    <h3 class="category-title">{{ name }}</h3>
    <p class="category-items">{{ productCount }} Items</p>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: {
    name: String,
    productCount: Number,
    image: String,
    color: String, 
  },
};
</script>

<style>
.category-container {
  display: grid;
  place-items: center;
  gap: 10px;
  padding: 12px;
  border-radius: 12px;
  width: 130px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s, box-shadow 0.2s;
}

.category-container:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.category-thumbnail {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
}

.category-title {
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  color: #2e2b41;
  font-weight: 600;
}

.category-items {
  font-size: 0.85rem;
  color: #555;
}
</style>
