<template>
  <div v-for="flashcard in flashcards" :key="flashcard.uid">
    <v-card>
      <v-card-text>uid: {{ flashcard.uid }},  name:{{ flashcard.name }}</v-card-text>
    </v-card>
  </div>
</template>
<script>
import { db } from "@/main";
import {
  collection,
  onSnapshot,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default {
  name: "Flashcard",
  props:{
    setId: String,
  },
  data: () => ({
    dialog: false,
    setName: "",
    flashcards: [],
  }),
  created() {
    const currentUser = getAuth().currentUser;
    onSnapshot(collection(db, "users", currentUser.uid, "flashcard-sets", this.setId, "flashcards"), (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.flashcards.push({
          uid: doc.id,
          name: doc.data().name,
        });
      });
    });
  },
};
</script>