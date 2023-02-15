import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FlashcardSetView from "../views/FlashcardSetView.vue";
import ModuleView from "../views/ModuleView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import AccountView from "../views/AccountView.vue";
import FlashcardsView from "../views/FlashcardsView.vue";
// import Modules from "../views/"

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: HomeView,
  },
  {
    path: "/Flashcards",
    name: "FlashcardSets",
    component: FlashcardSetView,
  },
  {
    path: "/Modules",
    name: "Modules",
    component: ModuleView,
  }, 
  {
    path: "/CreateAccount",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/Profile",
    name: "profile",
    component: AccountView,
  },
  {
    path: "/RevisionCards/:setId",
    name: "flashcards",
    components: {
      default: FlashcardsView
    },
    props: { default: true }
  },
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
