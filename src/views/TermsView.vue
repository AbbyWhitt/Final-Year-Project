<template>
    <v-app>
    <v-main>
      <Terms />
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

// Components
import SideBar from "../components/SideBar.vue";
import Terms from "../components/terms.vue";
import AppBar from "../components/AppBar.vue";

export default defineComponent({
  name: "TermsView",

  components: {
    AppBar,
    SideBar,
    Terms,
  },
});
</script>