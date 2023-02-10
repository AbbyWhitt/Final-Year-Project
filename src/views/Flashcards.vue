<template>
  <v-app>
    <AppBar />
    <SideBar />
    <v-main>
      <Flashcard :setId="setId"/>
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

// Components
import Flashcard from "../components/Flashcard.vue";
import SideBar from "../components/SideBar.vue";
import AppBar from "../components/AppBar.vue";

export default defineComponent({
  name: "Flashcards",
  props:{
    setId: String,
  },
  components: {
    AppBar,
    Flashcard,
    SideBar,
  },
});
</script>