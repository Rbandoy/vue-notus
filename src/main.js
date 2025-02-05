import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

import Landing from "@/views/Landing.vue"; 
// routes

const routes = [
  // {
  //   path: "/admin",
  //   redirect: "/admin/dashboard",
  //   component: Admin,
  //   children: [
  //     {
  //       path: "/admin/dashboard",
  //       component: Dashboard,
  //     },
  //     {
  //       path: "/admin/settings",
  //       component: Settings,
  //     },
  //     {
  //       path: "/admin/tables",
  //       component: Tables,
  //     },
  //     {
  //       path: "/admin/maps",
  //       component: Maps,
  //     },
  //   ],
  // },
  // {
  //   path: "/auth",
  //   redirect: "/auth/login",
  //   component: Auth,
  //   children: [
  //     {
  //       path: "/auth/login",
  //       component: Login,
  //     },
  //     {
  //       path: "/auth/register",
  //       component: Register,
  //     },
  //   ],
  // },
  // {
  //   path: "/landing",
  //   component: Landing,
  // },
  // {
  //   path: "/profile",
  //   component: Profile,
  // },
  {
    path: "/",
    component: Landing,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
