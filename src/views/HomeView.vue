<template>
  <v-app>
    <AppBar />
    <SideBar />
    <v-main>
      <DashboardCards />
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

// Components
import SideBar from "../components/SideBar.vue";
import DashboardCards from "../components/DashboardCards.vue";
import AppBar from "../components/AppBar.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    AppBar,
    SideBar,
    DashboardCards,
  },
});
</script>
