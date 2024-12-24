// import { createRouter, createWebHistory } from "vue-router";
// import Page from "@/components/Page.vue";

// const routes = [
//   {
//     path: "/page/:page",
//     component: Page,
//     props: (route) => ({ page: route.params.page, message: route.query.message }),
//     children: [
//       {
//         path: "section/:section",
//         component: Page,
//         props: (route) => ({
//           page: route.params.page,
//           section: route.params.section,
//         }),
//       },
//     ],
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// export default router;






// import { createRouter, createWebHistory } from "vue-router";
// import Page from "@/components/Page.vue";

// const routes = [
//   {
//     path: "/page/:page",
//     component: Page,
//     props: (route) => ({ currentPage: route.params.page }),
//     children: [
//       {
//         path: "section/:section",
//         component: Page,
//         props: (route) => ({
//           currentPage: route.params.page,
//           section: route.params.section,
//         }),
//       },
//     ],
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// export default router;




import { createRouter, createWebHistory } from "vue-router";
import Page from "@/components/Page.vue";

const routes = [
  {
    path: "/page/:page",
    component: Page,
    props: (route) => ({ currentPage: route.params.page }),
    children: [
      {
        path: "section/:section",
        component: Page,
        props: (route) => ({
          currentPage: route.params.page,
          section: route.params.section,
        }),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;



