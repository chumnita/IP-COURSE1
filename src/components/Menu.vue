<template>
    <div class="menu-wrapper">
      <button
        v-for="item in items"
        :key="item"
        :class="{ selected: item === currentSelection }"
        @click="handleSelection(item)"
      >
        {{ item }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: "MenuComponent",
    props: {
      items: {
        type: Array,
        required: true,
      },
    },
    emits: ["selection-changed"],
    data() {
      return {
        currentSelection: "All",
      };
    },
    methods: {
      handleSelection(item) {
        this.currentSelection = item;
        this.$emit("selection-changed", item);
      },
    },
  };
  </script>
  
  <style>
  button {
    padding: 5px 20px;
    background-color: transparent;
    color: gray;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:hover {
    color: green;
  }
  
  button.selected {
    color: orange;
    font-weight: bold;
  }
  </style>
  