<template>
  <v-app>
    <AppBar />
    <SideBarUser />
    <v-main>
      <UserSecurity />
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

// Components
import SideBarUser from "../components/SideBarUser.vue";
import UserSecurity from "../components/UserSecurity.vue";
import AppBar from "../components/AppBar.vue";

export default defineComponent({
  name: "UserSecurityView",

  components: {
    AppBar,
    SideBarUser,
    UserSecurity,
  },
});
</script>
