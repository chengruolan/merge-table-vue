import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import tableUI from "../packages";

Vue.config.productionTip = false;
Vue.use(tableUI);

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app");
