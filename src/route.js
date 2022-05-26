



import Vue from "vue";
import Router from "vue-router";
import List from "$/List.vue";
import Hi from "$/Hi.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "List",
    component: List,
  },
  {
    path: "/hi",
    name: "Hi",
    component: Hi,
  },
];

export default new Router({
  mode: "history",
  routes
});
