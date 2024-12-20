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
      <Page 
      :Pagecaption="pageCaption"
      :sectionCaption="sectionCaption"
       />
    </div>

    <!-- Footer -->
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Section from "./components/Section.vue";
import Page from "./components/Page.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Section,
    Page,
  },
  data() {
    return {
      pages: ["Page 1", "Page 2", "Page 3"],
      sections: ["Section 1", "Section 2", "Section 3", "Section 4"],
      currentPage: "Page 1",
      currentSection: "Section 1",
    };
  },
  computed: {
    pageCaption() {
      return `Welcome to ${this.currentPage}`;
    },
    sectionCaption() {
      return `This is ${this.currentSection} of ${this.currentPage}`;
    },
  },
  methods: {
    handlePageChange(page) {
      this.currentPage = page;
      // this.currentSection = "";
    },
    handleSectionClick(section) {
      this.currentSection = section;
    },
  },
};
</script>

<style scoped>
.container {
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
