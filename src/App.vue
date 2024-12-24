<template>
  <div class="container">
    <!-- Header -->
    <Header
      :pages="pages"
      :currentPage="currentPage"
      @page-selected="handlePageChange"
    />

    <!-- Main Content -->
    <div class="main">
      <!-- Sidebar -->
      <Section
        :sections="sections"
        @section-selected="handleSectionClick"
      />

      <!-- Content Area -->
      <router-view
        :messages="messages"
        :currentPage="currentPage"
        :section="currentSection"
        @update-messages="updateMessages"
      />
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Section from "./components/Section.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Section,
  },
  data() {
    return {
      pages: ["Page 1", "Page 2", "Page 3"],
      sections: ["Section 1", "Section 2", "Section 3", "Section 4"],
      currentPage: "Page 1",
      currentSection: null,
      messages: {
        "Page 1": "hello",
        "Page 2": "",
        "Page 3": "",
      },
    };
  },
  methods: {
    handlePageChange(page) {
      this.currentPage = page;
      this.currentSection = null; // Reset section when changing the page
      this.$router.push(`/page/${page}`);
    },
    handleSectionClick(section) {
      this.currentSection = section;
      this.$router.push(`/page/${this.currentPage}/section/${section}`);
    },
    updateMessages(page, message) {
      this.messages[page] = message;
    },
  },
};
</script>

<style scoped>
.container {
  height: 400px;
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 0 auto;
  border: 1px solid #ccc;
  color: black;
}
.main {
  display: flex;
  flex: 1;
}
</style>
