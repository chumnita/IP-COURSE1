<template>
    <div class="content">
      <p>{{ Pagecaption }}</p>
      <hr class="separator" />
      <p v-if="sectionCaption">{{ sectionCaption }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Pagecaption",
    props: {
      Pagecaption: String,
      sectionCaption: String,
    },
  };
  </script>
  
  <style scoped>
  .content {
    flex: 1;
    padding: 20px;
    text-align: center;
    font-size: 30px;
    color: black;
  }
  .separator {
  margin: 15px 0;
  border: none;
  border-top: 2px solid #0f0f0f;
  width: 80%; /* You can adjust the width as needed */
  margin-left: auto;
  margin-right: auto;
  /* color: black; */
}
  </style>
  