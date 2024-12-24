<template>
  <div class="content">
    <h1>{{ pageCaption }}</h1>
    <h2 v-if="sectionCaption">{{ sectionCaption }}</h2>
    <div v-if="section && section === 'Section 1'">
      <p>This is Section 1 of {{ currentPage }}</p>
      <p>Message: 123</p>
    </div>
    <div v-if="section !== 'Section 1' && previousMessages.length > 0">
      <ul>
        <li v-for="(message, index) in previousMessages" :key="index">
          Message from {{ previousPages[index] }}: {{ message }}
        </li>
      </ul>
    </div>
    <div>
      <div v-if="!section || section !== 'Section 1'">
        <label for="message">Message:</label>
      <input id="message" v-model="currentMessage" @input="updateMessage" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["currentPage", "messages", "section"],
  data() {
    return {
      currentMessage: this.messages[this.currentPage] || "",
    };
  },
  computed: {
  
    previousPages() {
      const pageIndex = Object.keys(this.messages).indexOf(this.currentPage);
      return Object.keys(this.messages).slice(0, pageIndex);
    },
    previousMessages() {
      const pageIndex = Object.keys(this.messages).indexOf(this.currentPage);
      return Object.values(this.messages).slice(0, pageIndex);
    },
  },
  methods: {
    updateMessage() {
      this.$emit("update-messages", this.currentPage, this.currentMessage);
    },
  },
};
</script>

<style scoped>
.content {
  text-align: center;
  margin-top: 20px;
}
h1,
h2 {
  margin: 10px 0;
}
li {
  list-style: none;
  margin-bottom: 10px;
}
h1 {
  font-size: 24px;
  color: black;
}
h2 {
  font-size: 18px;
  color: black;
}
</style>
