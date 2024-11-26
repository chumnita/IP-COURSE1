<template>
    <div class="product-container">
      <div class="product-card">
        <img :src="image" :alt="name" class="product-thumbnail" />
        <h3 class="product-title">{{ name }}</h3>
        <p class="product-rating">Rating: {{ rating }}</p>
        <p class="product-dimensions">Size: {{ size }}</p>
        <p class="product-cost">Price: {{ price }}</p>
        <p class="product-stock">Available: {{ instock }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProductCard",
    props: {
      name: String,
      rating: String,
      size: String,
      image: String,
      price: String,
      promotionPercentage: String,
      categoryId: Number,
      instock: Number,
      countSold: Number,
      categoryGroup: String,
    },
  };
  </script>
  
  <style>
  .product-container {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: space-around;
    padding: 10px;
    background-color: #f9f9f9;
  }
  
  .product-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    background: #fff;
    width: 220px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .product-card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
  
  .product-thumbnail {
    width: 85%;
    height: auto;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  
  .product-title {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    margin: 8px 0;
  }
  
  .product-rating {
    color: #ff9900;
    font-size: 0.9rem;
    margin: 5px 0;
  }
  
  .product-dimensions,
  .product-cost,
  .product-stock {
    font-size: 0.9rem;
    color: #333;
    margin: 3px 0;
  }
  
  .product-cost {
    color: #008000;
    font-weight: bold;
  }
  </style>
  