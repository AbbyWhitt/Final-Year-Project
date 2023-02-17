<template>
    <v-app>
    <v-main>
      <Register />
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

// Components
import SideBar from "../components/SideBar.vue";
import Register from "../components/Register.vue";
import AppBar from "../components/AppBar.vue";

export default defineComponent({
  name: "RegisterView",

  components: {
    AppBar,
    SideBar,
    Register,
  },
});
</script>

