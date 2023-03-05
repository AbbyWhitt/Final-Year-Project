import { createRouter, createWebHistory } from "vue-router";
import { getAuth } from "firebase/auth";
import HomeView from "../views/HomeView.vue";
import FlashcardSetView from "../views/FlashcardSetView.vue";
import ModuleView from "../views/ModuleView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import AccountView from "../views/AccountView.vue";
import FlashcardsView from "../views/FlashcardsView.vue";
import AssignmentView from "../views/AssignmentView.vue";
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
    meta:{
      requiresAuth: true
    }
  },
  {
    path: "/Flashcards",
    name: "FlashcardSets",
    component: FlashcardSetView,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: "/Modules",
    name: "Modules",
    component: ModuleView,
    meta:{
      requiresAuth: true
    }
  }, 
  {
    path: "/CreateAccount",
    name: "Register",
    component: RegisterView,
  },
  {
    path: "/Profile",
    name: "profile",
    component: AccountView,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: "/:setId",
    name: "flashcards",
    components: {
      default: FlashcardsView
    },
    props: { default: true },
    meta:{
      requiresAuth: true
    }
  },
  {
    path: "/:modId",
    name: "assignments",
    components: {
      default: AssignmentView
  },
  props: { default: true},
  meta:{
    requiresAuth: true
  }
},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  if(to.path === "/" && getAuth().currentUser) {
    next('/Dashboard');
    return
  }

  if(to.path === "/CreateAccount" && getAuth().currentUser) {
    next('/Dashboard');
    return
  }

  if(to.matched.some(record => record.meta.requiresAuth) && !getAuth().currentUser) {
    next('/');
    return
  }

  next();
});

export default router;
