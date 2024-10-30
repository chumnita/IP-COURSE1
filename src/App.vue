
<script>
import cpn1 from './components/__tests__/cpn1.vue';
import cpn2 from './components/__tests__/cpn2.vue';
export default {
  name: "App",
  components: {
    cpn1,cpn2
  },
  data() {
    return {
      categories: [
        { image: "src/assets/b131.png",title: "Cake & Milk", items: 14 , bgColor: "#f7f9ec"},
        { title: "Peach", items: 17, image: "src/assets/p111.png", bgColor: "#f7f9ec" },
        { title: "Organic Kiwi", items: 21, image: "src/assets/k121.png", bgColor: "#f7f9ec"  },
        { title: "Red Apple", items: 68,image: "src/assets/a91.png", bgColor: "#f7f9ec"  },
        { title: "Snack", items: 34, image: "src/assets/p31.png", bgColor: "#f7f9ec"  },
        { title: "Black plum", items: 25,image: "src/assets/bb41.png", bgColor: "#f7f9ec"  },
        { title: "Vegetables", items: 65, image: "src/assets/v031.png", bgColor: "#f7f9ec" },
        { title: "Headphone", items: 33, image: "src/assets/h151.png", bgColor: "#f7f9ec"  },
        { title: "Cake & Milk", items: 54, image: "src/assets/s141.png", bgColor: "#f7f9ec"  },
        { title: "Orange", items: 63,image: "src/assets/o71.png", bgColor: "#f7f9ec"  },
      ],
      promos: [
        {
          title: "Everyday Fresh & Clean with Our Products",
          image: "src/assets/o041.png",
          bgColor: "#f7f9ec",
          buttonColor: "#34a853",
        },  
        {
          title: "Make your Breakfast Healthy and Easy",
          image: "src/assets/m11.png",
          bgColor: "#fbeaec",
          buttonColor: "#34a853",
        },
        {
          title: "The best Organic Products Online",
          image: "src/assets/v031.png",
          bgColor: "#e7f0fc",
          buttonColor: "#f5cb0f",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="app">
    <h1>This is my first VueJs project</h1>
    <div class="category-row">
      <cpn1
        v-for="(category, index) in categories"
        :key="index"
        :title="category.title"
        :items="category.items"     
        :image="category.image"
        :bgColor="category.bgColor"
      />
    </div>
    <div class="promo-row">
      <cpn2
        v-for="(promo, index) in promos"
        :key="index"
        :title="promo.title"
        :image="promo.image"
        :bgColor="promo.bgColor"
        :buttonColor="promo.buttonColor"
      />
    </div>
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
</style>
