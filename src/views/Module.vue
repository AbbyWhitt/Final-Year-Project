<template>
  <v-app>
    <AppBar />
    <SideBar />
    <v-main>
      <Modules />
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

// Components
import Modules from "../components/Modules.vue";
import SideBar from "../components/SideBar.vue";
import AppBar from "../components/AppBar.vue";

export default defineComponent({
  name: "Module",

  components: {
    AppBar,
    Modules,
    SideBar,
  },
});
</script>
