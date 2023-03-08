<template>
  <v-navigation-drawer
    color="#58B39D"
    :width="210"
    :rail="rail"
    permanent
    @click="rail = false"
  >
    <v-divider></v-divider>

    <v-list nav>
      <router-link class="items" to="/Dashboard">
        <v-list-item
          class="py-5"
          prepend-icon="mdi-chart-areaspline-variant"
          value="dashboard"
        >
          <v-list-item-title class="itemsTitle">
            My Dashboard</v-list-item-title
          >
        </v-list-item>
      </router-link>

      <router-link class="items" to="Modules">
        <v-list-item
          class="py-5"
          prepend-icon="mdi-book-open-blank-variant"
          value="Module"
        >
          <v-list-item-title class="itemsTitle"> My Modules </v-list-item-title>
        </v-list-item>
      </router-link>

      <router-link class="items" to="Flashcards">
        <v-list-item
          class="py-5"
          prepend-icon="mdi-card-text-outline"
          value="flashcard sets"
        >
          <v-list-item-title class="itemsTitle">
            My Flashcards
          </v-list-item-title>
        </v-list-item>
      </router-link>

      <v-divider style="color: white"></v-divider>
      <v-spacer></v-spacer>

      <v-btn
        v-if="rail"
        class="mt-5 items d-lg-none"
        variant="plain"
        icon="mdi-chevron-right"
        @click.stop="rail = !rail"
      ></v-btn>

      <v-btn
        v-if="!rail"
        class="mt-5 items d-lg-none"
        variant="plain"
        icon="mdi-chevron-left"
        @click.stop="($event) => (rail = !rail)"
      ></v-btn>

      <v-btn
        class="logout"
        prepend-icon="mdi-logout-variant"
        @click="$store.dispatch('logout')"
        color="#449682"
      >
        Logout
      </v-btn>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "../router";
import { useStore } from "vuex";
const store = useStore();
let isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/"); //this handles where the user should go when logged out
  });
};

export default {
  data: () => ({
    rail: false,
  }),
};
</script>

<style scoped>
.logout {
  width: 92%;
  color: white;
}
.items {
  text-decoration: none;
  color: white;
}
.itemsTitle {
  font-size: 0.93rem;
  font-weight: 400;
}
</style>
