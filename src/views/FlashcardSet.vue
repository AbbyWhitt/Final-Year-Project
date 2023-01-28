<template>
  <v-app>
    <AppBar />
    <SideBar />
    <v-main>
      <FlashcardSets />
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

// Components
import FlashcardSets from "../components/FlashcardSets.vue";
import SideBar from "../components/SideBar.vue";
import AppBar from "../components/AppBar.vue";

export default defineComponent({
  name: "FlashcardSet",

  components: {
    AppBar,
    FlashcardSets,
    SideBar,
  },
});
</script>
