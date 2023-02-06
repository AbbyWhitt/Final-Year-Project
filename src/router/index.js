import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FlashcardSet from "../views/FlashcardSet.vue";
import Module from "../views/Module.vue";
import SignIn from "../views/SignIn.vue";
import Register from "../views/Register.vue";
import Account from "../views/Account.vue";
// import Modules from "../views/"

const routes = [
  {
    path: "/",
    name: "login",
    component: SignIn,
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: HomeView,
  },
  {
    path: "/Flashcards",
    name: "FlashcardSets",
    component: FlashcardSet,
  },
  {
    path: "/Modules",
    name: "Modules",
    component: Module,
  }, 
  {
    path: "/CreateAccount",
    name: "register",
    component: Register,
  },
  {
    path: "/Profile",
    name: "profile",
    component: Account,
  }
  /* {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ //"../views/AboutView.vue"),
 // }, */
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
