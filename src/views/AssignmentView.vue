<template>
  <v-app>
    <AppBar />
    <SideBar />
    <v-main>
      <Assignment :modId="modId"/>
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

// Components
import Assignment from "../components/Assignment.vue";
import SideBar from "../components/SideBar.vue";
import AppBar from "../components/AppBar.vue";

export default defineComponent({
  name: "assignments",
  props:{
    modId: String,
  },
  components: {
    AppBar,
    Assignment,
    SideBar,
  },
});
</script>