<template>
    <v-app>
    <AppBar />
    <SideBar />
    <v-main>
      <registerAccount />
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

// Components
import SideBar from "../components/SideBar.vue";
import registerAccount from "../components/registerAccount.vue";
import AppBar from "../components/AppBar.vue";

export default defineComponent({
  name: "Register",

  components: {
    AppBar,
    SideBar,
    registerAccount,
  },
});
</script>

