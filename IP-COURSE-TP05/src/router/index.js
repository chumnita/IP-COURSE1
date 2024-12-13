import { createRouter, createWebHistory } from 'vue-router';

import Page1 from '../components/Page1.vue';
import Page2 from '../components/Page2.vue';
import Page3 from '../components/Page3.vue';
import Menu from '../components/MenuComponent.vue';
import Section1 from '../components/Section1.vue';
import Section2 from '../components/Section2.vue';

const routes = [
  {
    path: '/page1',
    components: {
      default: Page1,
      menu: Menu,
    },
    children: [
      { path: 'section1', component: Section1 },
      { path: 'section2', component: Section2 },
    ],
  },
  {
    path: '/page2',
    components: {
      default: Page2,
      menu: Menu,
    },
    children: [
      { path: 'section1', component: Section1 },
      { path: 'section2', component: Section2 },
    ],
  },
  {
    path: '/page3',
    components: {
      default: Page3,
      menu: Menu,
    },
    children: [
      { path: 'section1', component: Section1 },
      { path: 'section2', component: Section2 },
    ],
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
