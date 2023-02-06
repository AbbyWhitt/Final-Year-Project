<template>
  <v-app>
    <AppBar />
    <SideBarUser />
    <v-main>
      <UserProfile />
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

// Components
import UserProfile from "../components/UserProfile.vue";
import SideBarUser from "../components/SideBarUser.vue";
import AppBar from "../components/AppBar.vue";

export default defineComponent({
  name: "FlashcardSet",

  components: {
    AppBar,
    UserProfile,
    SideBarUser,
  },
});
</script>