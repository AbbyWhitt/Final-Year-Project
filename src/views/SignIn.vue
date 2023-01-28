<template>
    <v-app>
    <v-main>
      <LogIn />
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

// Components
import LogIn from "../components/LogIn.vue";
import AppBar from "../components/AppBar.vue";

export default defineComponent({
  name: "SignIn",

  components: {
    AppBar,
    LogIn,
  },
});
</script>