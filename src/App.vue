<script>
import { useProductStore } from './stores/product';
import { mapState } from 'pinia';
import cpn1 from './components/__tests__/cpn1.vue';
import cpn2 from './components/__tests__/cpn2.vue';

export default {
  name: "App",
  components: {
    cpn1, cpn2
  },
  data() {
    return {
      currentGroupName: 'Milk&Diaries', // Example group name
      selectedCategoryId: 1, // Example category ID
    };
  },
  computed: {
    ...mapState(useProductStore, {
      promos: 'promotions',
      popularProducts: 'getPopularProducts',
      categoriesByGroup(store) {
        return store.getCategoriesByGroup(this.currentGroupName);
      },
      productsByGroup(store) {
        return store.getProductsByGroup(this.currentGroupName);
      },
      productsByCategory(store) {
        return store.getProductsByCategory(this.selectedCategoryId);
      },
    }),
  },
  mounted() {
    const store = useProductStore();
    store.fetchData(); // Fetch all necessary data on mount
  },
};
</script>
<template>
  <div id="app">
    <div class="app">
      <div class="category-row">
        <cpn1
          v-for="(category, index) in categoriesByGroup"
          :key="index"
          :name="category.name"
          :productCount="category.productCount"
          :image="category.image"
          :color="category.color"
        />
      </div>
      <div class="promo-row">
        <cpn2
          v-for="(promo, index) in promos"
          :key="index"
          :title="promo.title"
          :image="promo.image"
          :color="promo.bgColor"
          :buttonColor="promo.buttonColor"
        />
      </div>
      <div class="product-row">
      <Product
        v-for="product in productsByGroup"
        :key="product.id"
        :name="product.name"
        :rating="product.rating"
        :size="product.size"
        :image="product.image"
        :price="product.price"
        :promotionAsPercentage="product.promotionAsPercentage"
        :categoryId="product.categoryId"
        :instock="product.instock"
        :countSold="product.countSold"
        :group="product.group"
      />
    </div>
      <h2>Popular Products</h2>
      <ul>
        <li v-for="product in popularProducts" :key="product.id">
          {{ product.name }} - ${{ product.price }}
        </li>
      </ul>

    </div>
  </div>
</template>



<style>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.category-row {
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
}
.promo-row {
  display: flex;
  gap: 15px;
}
</style>




<!-- 
<script>
import cpn1 from './components/__tests__/cpn1.vue';
import cpn2 from './components/__tests__/cpn2.vue';
import axios from 'axios';
import { useProductStore } from './stores/product.js'; 

import { mapState } from 'pinia';
export default {
  name: "App",
  components: {
    cpn1,cpn2
  },
  data() {
    return {
      categories: [
        // { image: "src/assets/b131.png",title: "Cake & Milk", items: 14 , bgColor: "#f7f9ec"},
        // { title: "Peach", items: 17, image: "src/assets/p111.png", bgColor: "#f7f9ec" },
        // { title: "Organic Kiwi", items: 21, image: "src/assets/k121.png", bgColor: "#f7f9ec"  },
        // { title: "Red Apple", items: 68,image: "src/assets/a91.png", bgColor: "#f7f9ec"  },
        // { title: "Snack", items: 34, image: "src/assets/p31.png", bgColor: "#f7f9ec"  },
        // { title: "Black plum", items: 25,image: "src/assets/bb41.png", bgColor: "#f7f9ec"  },
        // { title: "Vegetables", items: 65, image: "src/assets/v031.png", bgColor: "#f7f9ec" },
        // { title: "Headphone", items: 33, image: "src/assets/h151.png", bgColor: "#f7f9ec"  },
        // { title: "Cake & Milk", items: 54, image: "src/assets/s141.png", bgColor: "#f7f9ec"  },
        // { title: "Orange", items: 63,image: "src/assets/o71.png", bgColor: "#f7f9ec"  },
      ],
      promos: [
       
        // {
        //   title: "The best Organic Products Online",
        //   image: "src/assets/v031.png",
        //   bgColor: "#e7f0fc",
        //   buttonColor: "#f5cb0f",
        // },
      ],
      currentGroupName: 'Electronics', // Example group name
      selectedCategoryId: 1, // Example category ID
      promos: [],
    };
  },
  computed: {
    ...mapState(useProductStore, {
      popularProducts: 'getPopularProducts',
      categoriesByGroup(store) {
        return store.getCategoriesByGroup(this.currentGroupName);
      },
      productsByGroup(store) {
        return store.getProductsByGroup(this.currentGroupName);
      },
      productsByCategory(store) {
        return store.getProductsByCategory(this.selectedCategoryId);
      }
    })
  },
  mounted(){
    this.fetchCategories()
    this.fetchPromotions()
    this.Products()
  },
  methods: {
    fetchCategories() {
      axios.get("http://localhost:3000/api/categories").then((result) => {
        this.categories = result.data
        // console.log("Fetched categories:", this.categories);
      })
    },
    fetchPromotions() {
      axios.get("http://localhost:3000/api/promotions").then((result) => {
        this.promos = result.data
      })
  },

}
};
</script>
<template>
   <h1>Welcome to the E-commerce Product Store</h1>
  <div class="app">
    <h1>This is my first VueJs project</h1>
    <div class="category-row">
      <cpn1
        v-for="(category, index) in categories"
        :key="index"
        :name="category.name"
        :productCount="category.productCount"     
        :image="category.image"
        :color="category.color"
      />
    </div>
    <div class="promo-row">
      <cpn2
        v-for="(promo, index) in promos"
        :key="index"
        :title="promo.title"
        :image="promo.image"
        :color="promo.color"
        :buttonColor="promo.buttonColor"
      />
    </div>
    <h2>Popular Products</h2>
    <ul>
        <li v-for="product in popularProducts" :key="product.id">
          {{ product.name }} - ${{ product.price }}
        </li>
      </ul>

      Categories by Group
      <h2>Categories in {{ currentGroupName }}</h2>
      <ul>
        <li v-for="category in categoriesByGroup" :key="category.id">
          {{ category.name }}
        </li>
      </ul>

      Products by Group -->
      <!-- <h2>Products in {{ currentGroupName }}</h2>
      <ul>
        <li v-for="product in productsByGroup" :key="product.id">
          {{ product.name }} - ${{ product.price }}
        </li>
      </ul>

      Products by Selected Category
      <h2>Products in Selected Category (ID: {{ selectedCategoryId }})</h2>
      <ul>
        <li v-for="product in productsByCategory" :key="product.id">
          {{ product.name }} - ${{ product.price }}
        </li>
      </ul>
    </div>
</template>
<style>
template{
  position: relative;
}
.app {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  left:11%;
  right: 10%;
  top: 15%;
}
.category-row {
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-bottom: 10px;
}
.promo-row {
  display: flex;
  gap: 15px;
}
</style> -->
