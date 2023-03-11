<template>
  <v-app>
    <AppBar />
    <SideBarUser />
    <v-main>
      <UserPolicy />
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

// Components
import SideBarUser from "../components/SideBarUser.vue";
import UserPolicy from "../components/UserPolicy.vue";
import AppBar from "../components/AppBar.vue";

export default defineComponent({
  name: "UserPolicyView",

  components: {
    AppBar,
    SideBarUser,
    UserPolicy,
  },
});
</script>
