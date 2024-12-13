<template>
  <div>
    <!-- Include Header -->
    <Header />

    <div class="container">
      <aside>
        <router-view name="menu"></router-view>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>

    <!-- Include Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  width: 100%;
  /* background-color: red; */
  
}

aside {
  width: 20%;
  background: #e9ecef;
  padding: 10px;
}

main {
  width: 80%;
  padding: 10px;
}
</style>
