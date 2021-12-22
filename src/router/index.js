import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      keepAlive: true,
      isBack: false,
    },
  },
  {
    path: "/aboutme",
    name: "AboutMe",
    meta: {
      keepAlive: true,
      isBack: false,
    },
    component: () => import("../views/AboutMe.vue"),
  },
  {
    path: "/find",
    name: "Find",
    component: () => import("../views/Find.vue"),
  },
  {
    path: "/setting",
    name: "Setting",
    component: () => import("../views/Setting.vue"),
  },
  {
    path: "/me",
    name: "Me",
    component: () => import("../views/Me.vue"),
  },
  {
    path: "/collections",
    name: "Collections",
    component: () => import("../views/Collections.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/detailpage",
    name: "DetailPage",
    component: () => import("../views/DetailPage.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
