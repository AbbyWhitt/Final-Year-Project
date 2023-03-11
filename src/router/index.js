import { createRouter, createWebHistory } from "vue-router";
import { getAuth } from "firebase/auth";
import HomeView from "../views/HomeView.vue";
import FlashcardSetView from "../views/FlashcardSetView.vue";
import ModuleView from "../views/ModuleView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import FlashcardsView from "../views/FlashcardsView.vue";
import AssignmentView from "../views/AssignmentView.vue";
import SettingsView from "../views/SettingsView.vue";
import UserPolicyView from "../views/UserPolicyView.vue";
import UserSecurityView from "../views/UserSecurityView.vue";
import TermsView from "../views/TermsView.vue";

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
{
  path: "/UserSettings",
  name: "Settings",
  component: SettingsView,
  meta:{
    requiresAuth: true
  }
},
{
  path: "/PrivacyPolicy",
  name: "UserPolicy",
  component: UserPolicyView,
},
{
  path: "/usersecurity",
  name: "UserSecurity",
  component: UserSecurityView,
  meta:{
    requiresAuth: true
  }
},
{
  path: "/termsandconditions",
  name: "Terms",
  component: TermsView,
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
