import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      accessLevel: "public",
    },
  },
  {
    path: "/UsersView",
    name: "UsersView",

    component: () => import("../views/UsersView.vue"),
    meta: {
      accessLevel: "public",
    },
  },
  {
    path: "/CursosView",
    name: "CursosView",

    component: () => import("../views/CursosView.vue"),
    meta: {
      accessLevel: "private",
    },
  },
  {
    path: "/AdminView",
    name: "AdminView",

    component: () => import("../views/AdminView.vue"),
    meta: {
      accessLevel: "private",
    },
  },
  {
    path: "/AdminView/:Id",
    name: "EditView",
    component: () => import("../views/EditView.vue"),
    meta: {
      accessLevel: "public",
    },
  },

  {
    path: "/:pathMatch(.*)*",
    name: "Error",
    component: () => import("../views/ErrorView.vue"),
    meta: {
      accessLevel: "public",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const accessLevel = to.meta.accessLevel;
  const activeLogin = store.getters["users/activeLogin"];

  if (accessLevel === "public") {
    next();
  } else if (accessLevel === "private") {
    if (activeLogin) {
      next();
    } else {
      next("/");
    }
  }
});

export default router;
