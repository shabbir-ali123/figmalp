import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Service from "../views/Service.vue";
import Service__detail from "../views/Service__detail";
Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Service",
    name: "Service",
    component: Service,
  },
  {
    path: "/Service__detail",
    name: "Service__detail",
    component: Service__detail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
