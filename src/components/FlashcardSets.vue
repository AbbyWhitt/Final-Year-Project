<template>
  <v-card class="ma-5">
     <v-container>
      <v-row>
        <v-col cols="8">
          <v-card class="d-flex" flat rounded="0">
            <v-icon
              icon="mdi-card-text"
              size="large"
              class="pa-6"
            ></v-icon>
            <v-card-title class="text-h5 ml-n3"> FlashcardSets </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="2">
          <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ props }">
          <v-btn
                rounded="lg"
                class="mt-1 text"
                color="#449682"
                v-bind="props"
              >
                Create a Flashcard Set
              </v-btn>
              </template>
            <v-card class="w-50 center">
              <v-form @submit.prevent="addFlashSet">
                <v-card-title>
                  <span class="text-h5">New Flashcard Set</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Name*"             
                          required
                          v-model="setName"
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small style="color: red">*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="#449682" variant="text" type="submit">
                    Create
                  </v-btn>
                  <v-btn color="black" variant="text" @click="dialog = false">
                    Cancel
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
     </v-container>

    <v-container>
      <v-row>
        
        <v-col 
        v-for="item in flashcardSets"
        :key="item.uid"
        cols="12"
        sm="3" >
        <router-link :to="{ name: 'flashcards', params: {setId: item.uid}}">
        <v-card class="pa-5 ma-3"> 
          <v-card-title class="pa-15 text-center">
            {{item.name}} 
          </v-card-title>
        </v-card>
        </router-link>
        </v-col>
        
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { db } from "@/main";
import {
  collection,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default {
  name: "FlashcardSets",
  data: () => ({
    dialog: false,
    setName: "",
    flashcardSets: [],
  }),
  methods: {
    async addFlashSet() {
      const currentUser = getAuth().currentUser;
      await addDoc(collection(db, "users", currentUser.uid, "flashcard-sets"), {
        name: this.setName,
      });
      this.dialog = false;
    },
  },
  created() {
    const currentUser = getAuth().currentUser;
    onSnapshot(collection(db, "users", currentUser.uid, "flashcard-sets"), (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.flashcardSets.push({
          uid: doc.id,
          name: doc.data().name,
        });
      });
    });
  },
};
</script>

<style></style>
