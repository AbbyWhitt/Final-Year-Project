<template>
  <v-card class="ma-5">
    <v-container>
      <v-card class="d-flex" flat rounded="0">
        <v-icon icon="mdi-cog" size="large" class="mt-2 mr-2"></v-icon>
        <v-card-title class="text-h5 ml-n3 font-weight-light">
          Welcome, {{userDetails.name}}
        </v-card-title>
      </v-card>
    </v-container>
  </v-card>
</template>

<script>
import { db } from "@/main";
import { useStore } from "vuex";
import {
  collection,
  onSnapshot,
} from "firebase/firestore";
export default {
  data: () => ({
    userDetails: [],
    userData: {
      userName: null,
      email: null, 
    },
  }),
  async created() {
    const currentUser = this.$store.state.user;
    onSnapshot(collection(db, "users"), (QuerySnapshot) => {
      this.userDetails = [];
      QuerySnapshot.forEach((doc) => {
        this.userDetails.push({
          id: doc.id,
          name: doc.data().name,
          email: doc.data().email,
        });
      });
    });
  },
};
</script>

<style></style>
