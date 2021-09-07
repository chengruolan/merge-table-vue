import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../page/home.vue";
import Table1 from "../page/tableTest1.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/table1",
    name: "table1",
    component: Table1
  }
];

const router = new VueRouter({
  routes
});

export default router;
