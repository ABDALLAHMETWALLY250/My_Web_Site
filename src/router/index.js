import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "About",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/services",
    name: "Services",
    meta: {
      title: "Services",
    },
    // route level code-splitting
    // this generates a separate chunk (services.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "services" */ "../views/ServicesView.vue"),
  },
  {
    path: "/skills",
    name: "Skills",
    meta: {
      title: "Skills",
    },
    // route level code-splitting
    // this generates a separate chunk (skills.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "skills" */ "../views/SkillsView.vue"),
  },
  {
    path: "/works",
    name: "Works",
    meta: {
      title: "Works",
    },
    // route level code-splitting
    // this generates a separate chunk (works.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "works" */ "../views/WorksView.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    meta: {
      title: "Contact",
    },
    // route level code-splitting
    // this generates a separate chunk (contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/ContactView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "erorrpage",
    meta: {
      title: "404 Page Not Found",
    },
    // route level code-splitting
    // this generates a separate chunk (contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/ErorrPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  document.title = `${to.meta?.title} - ABDALLAH` ?? "ABDALLAH";
});

export default router;
