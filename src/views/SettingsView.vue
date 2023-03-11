<template>
  <v-app>
    <AppBar />
    <SideBarUser />
    <v-main>
      <Settings />
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

// Components
import SideBarUser from "../components/SideBarUser.vue";
import Settings from "../components/Settings.vue";
import AppBar from "../components/AppBar.vue";

export default defineComponent({
  name: "RegisterView",

  components: {
    AppBar,
    SideBarUser,
    Settings,
  },
});
</script>
