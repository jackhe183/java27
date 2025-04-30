import { createRouter, createWebHistory} from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        name: "Home",
        component: () => import("../pages/home.vue"),
        path: "/",
    },
    {
        name: "About",
        component: () => import("../pages/about.vue"),
        path: "/about",
    }
  ],
});

export default router;