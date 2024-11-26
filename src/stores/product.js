import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    groups: [],
    promotions: [],
    categories: [],
    products: [],
  }),

  getters: {
    // Retrieve categories based on group name
    filterCategoriesByGroup: (state) => (groupName) => {
      return state.categories.filter((category) => category.group === groupName);
    },

    // Retrieve products based on group name
    filterProductsByGroup: (state) => (groupName) => {
      return state.products.filter((product) => product.group === groupName);
    },

    // Retrieve products based on category ID
    filterProductsByCategory: (state) => (categoryId) => {
      return state.products.filter((product) => product.categoryId === categoryId);
    },

    // Retrieve popular products (countSold > 10)
    popularProducts: (state) => {
      return state.products.filter((product) => product.countSold > 10);
    },
  },

  actions: {
    // Fetch groups from the API
    async loadGroups() {
      try {
        const { data } = await axios.get("http://localhost:3000/api/groups");
        this.groups = data;
      } catch (error) {
        console.error("Failed to load groups:", error);
      }
    },

    // Fetch promotions from the API
    async loadPromotions() {
      try {
        const { data } = await axios.get("http://localhost:3000/api/promotions");
        this.promotions = data;
      } catch (error) {
        console.error("Failed to load promotions:", error);
      }
    },

    // Fetch categories from the API
    async loadCategories() {
      try {
        const { data } = await axios.get("http://localhost:3000/api/categories");
        console.log("Fetched categories:", data);
        this.categories = data;
      } catch (error) {
        console.error("Failed to load categories:", error);
      }
    },

    // Fetch products from the API
    async loadProducts() {
      try {
        const { data } = await axios.get("http://localhost:3000/api/products");
        this.products = data;
      } catch (error) {
        console.error("Failed to load products:", error);
      }
    },
  },
});
