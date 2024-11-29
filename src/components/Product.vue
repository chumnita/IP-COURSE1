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
      rating: Number,
      size: String,
      image: String,
      price: Number,
      promotionPercentage: Number,
      categoryId: Number,
      instock: Number,
      countSold: Number,
      categoryGroup: String,
    },
  };
  </script>
  

 <style scoped>
  .product-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Adjust the card width */
  gap: 20px;
  /* background-color: red; */
}
.product-container .product-card{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  width: 100%;
  height: 50vh; 

}
.product-container .product-card img{
  width: 100%;
  height: 200px;

}

.product:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.product-thumnail {
  width: 100px; 
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;

}
.product-card h3 {
  /* width: 100%;
  height: 100px; */
  /* background-color: rebeccapurple; */
  font-size: 1rem;
  font-weight: bold;
  margin: 5px 0;
  color: #333;
}

.product-card p {
  font-size: 0.9rem;
  color: #555;
  margin: 2px 0;
}

.product-card span {
  font-size: 0.9rem;
  color: #000;
  font-weight: bold;
}


.product-name {
  font-weight: bold;
  font-size: 1.1rem;
  margin: 5px 0;
}

.product-size,
.product-rating {
  font-size: 0.9rem;
  margin: 5px 0;
}

.price-section {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

.product-card .price {
  margin-top: 10px;
  font-size: 1rem;
  color: #4caf50;
  font-weight: bold;
}
/* 
.old-price {
  text-decoration: line-through;
  color: gray;
  font-size: 0.9rem;
} */

/* .promotion-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: green;
  color: white;
  font-size: 0.8rem;
  padding: 3px 8px;
  border-radius: 5px;
} */




  </style>
 
  