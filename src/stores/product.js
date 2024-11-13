import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    groups: [
      { id: 1, name: 'Milk&Diaries' },
      { id: 2, name: 'Coffe&Teas' },
      // Add more default groups if needed
    ],
    categories: [
      { id: 1, groupId: 1, name: 'Blueberry', image: "src/assets/bb41.png", productCount: 15, color: "#f7f9ec" },
      { id: 2, groupId: 1, name: 'Kiwi', image: "src/assets/k121.png", productCount: 25, color: "#f0f0f0" },
      { id: 3, groupId: 2, name: 'Fruits', image: "src/assets/fruits.png", productCount: 30, color: "#fde4e4" },
      // Add more default categories if needed
    ],
    promotions: [
      {
        title: "The Best Organic Products",
        image: "src/assets/v031.png",
        bgColor: "#e7f0fc",
        buttonColor: "#f5cb0f",
      },
      {
        title: "Healthy & Easy",
        image: "src/assets/m11.png",
        color: "#f4eefc",
        buttonColor: "#ff7b7b",
      }, // Add more default promotions if needed
    ],
    products: [
      { id: 1, categoryId: 1, name: 'Seeds of Change Organic Quinoa, Brown, & Red Rice', price: 2.51, countSold: 15 },
      { id: 2, categoryId: 1, name: 'All Natural Italian-Style Chicken Meatballs', price: 2.51, countSold: 8 },
      { id: 3, categoryId: 2, name: 'Angie’s Boomchickapop Sweet & Salty Kettle Corn', price: 2.51, countSold: 20 },
      { id: 4, categoryId: 3, name: 'Foster Farms Takeout Crispy Classic Buffalo Wings', price: 2.51, countSold: 50 },
      // Add more default products if needed
    ],
  }),
  actions: {
    async fetchData() {
      try {
        const responseCategories = await axios.get('http://localhost:3000/api/categories');
        this.categories = responseCategories.data;

        const responsePromotions = await axios.get('http://localhost:3000/api/promotions');
        this.promotions = responsePromotions.data;

        const responseGroups = await axios.get('http://localhost:3000/api/groups');
        this.groups = responseGroups.data;

        const responseProducts = await axios.get('http://localhost:3000/api/products');
        this.products = responseProducts.data;
      } catch (error) {
        if (error.response) {
          // Server responded with a status other than 2xx
          console.error("Error fetching data:", error.response.data);
          console.error("Status code:", error.response.status);
          console.error("Headers:", error.response.headers);
        } else if (error.request) {
          // Request was made, but no response received
          console.error("No response received:", error.request);
        } else {
          // Other errors
          console.error("Error setting up request:", error.message);
        }
      }
    },
  },
  getters: {
    getPopularProducts: (state) => state.products.filter((product) => product.countSold > 10),
    getCategoriesByGroup: (state) => (groupName) => {
      const group = state.groups.find((g) => g.name === groupName);
      return group ? state.categories.filter((category) => category.groupId === group.id) : [];
    },
    getProductsByGroup: (state) => (groupName) => {
      const group = state.groups.find((g) => g.name === groupName);
      const categoryIds = group
        ? state.categories.filter((category) => category.groupId === group.id).map((cat) => cat.id)
        : [];
      return state.products.filter((product) => categoryIds.includes(product.categoryId));
    },
    getProductsByCategory: (state) => (categoryId) =>
      state.products.filter((product) => product.categoryId === categoryId),
  },
});
