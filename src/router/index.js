import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../page/Index.vue"),
  },
  {
    path: "/manual",
    name: "Manual",
    component: () => import("../page/Manual.vue"),
  },
  {
    path: "/planbegins",
    name: "PlanBegins",
    component: () => import("../page/PlanBegins.vue"),
  },
  {
    path: "/productdescription",
    name: "ProductDescription",
    component: () => import("../page/ProductDescription.vue"),
  },
  {
    path: "/vipservice",
    name: "VipService",
    component: () => import("../page/VipService.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../page/Login.vue"),
  },
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;