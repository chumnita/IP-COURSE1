<script>
import Category from './components/category.vue';
import Promotion from './components/promotion.vue';
import Product from './components/Product.vue';
import { useProductStore } from './stores/product';
import Menu from './components/Menu.vue';
import { ref, computed, onMounted } from 'vue';

export default {
  name: "App",
  components: {
    Menu,
    Category,
    Promotion,
    Product,
  },
  setup() {
    const productStore = useProductStore();

    // Independent states for menu filters
    const selectedCategoryGroup = ref("All");
    const selectedProductGroup = ref("All");

    // Utility functions for computing unique groups
    const getUniqueGroups = (items, key) => ["All", ...new Set(items.map(item => item[key]))];

    // Compute unique group names
    const categoryGroups = computed(() => getUniqueGroups(productStore.categories, 'group'));
    const productGroups = computed(() => getUniqueGroups(productStore.products, 'group'));

    // Filtered categories and products
    const filteredCategories = computed(() => {
      if (selectedCategoryGroup.value === "All") return productStore.categories;
      return productStore.categories.filter(category => category.group === selectedCategoryGroup.value);
    });

    const filteredProducts = computed(() => {
      if (selectedProductGroup.value === "All") return productStore.products;
      return productStore.products.filter(product => product.group === selectedProductGroup.value);
    });

    // Fetch data on component mount
    onMounted(() => {
      productStore.fetchGroups();
      productStore.fetchPromotions();
      productStore.fetchCategories();
      productStore.fetchProducts();
    });

    return {
      selectedCategoryGroup,
      selectedProductGroup,
      categoryGroups,
      productGroups,
      filteredCategories,
      filteredProducts,
      productStore,
    };
  },
};
</script>

<template>
  <div class="app">
    <!-- Categories Section -->
    <div class="menuCategorybar">
      <div>Featured Categories</div>
      <Menu 
        :menuItems="categoryGroups" 
        @menu-selected="(group) => (selectedCategoryGroup.value = group)" 
      />
    </div>

    <div class="category-row">
      <Category
        v-for="(category, index) in filteredCategories"
        :key="index"
        :name="category.name"
        :productCount="category.productCount"
        :image="category.image"
        :color="category.color"
      />
    </div>

    <!-- Promotions Section -->
    <div class="promo-row">
      <Promotion
        v-for="(promo, index) in productStore.promotions"
        :key="index"
        :title="promo.title"
        :image="promo.image"
        :color="promo.color"
        :buttonColor="promo.buttonColor"
      />
    </div>

    <!-- Products Section -->
    <div class="menuProductbar">
      <div>Popular Products</div>
      <Menu 
        :menuItems="productGroups" 
        @menu-selected="(group) => (selectedProductGroup.value = group)" 
      />
    </div>

    <div class="product-row">
      <Product
        v-for="(product, index) in filteredProducts"
        :key="index"
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
  </div>
</template>

<style>
.app {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  left: 11%;
  right: 10%;
  top: 15%;
}
.category-row,
.promo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 10px;
}
.product-row {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
}
.menuCategorybar, .menuProductbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: larger;
}
</style>
