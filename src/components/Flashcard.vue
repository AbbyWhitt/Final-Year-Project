<template>
  <v-card class="ma-5">
    <v-container>
      <v-row>
        <v-col cols="8">
          <v-card class="d-flex" flat rounded="0">
            <v-icon icon="mdi-card-text" size="large" class="pa-6"></v-icon>
            <v-card-title class="text-h5 ml-n3"> Flashcards </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-btn rounded="lg"> Back to Sets </v-btn>
          </v-col>
          <v-col cols="2">
            <v-dialog v-model="dialog" persistent>
              <template v-slot:activator="{ props }">
                <v-btn rounded="lg" v-bind="props"> Create a Flashcard </v-btn>
              </template>
              <!-- Create Flashcard Form -->
              <v-card class="w-50 center">
                <v-form @submit.prevent="addFlashcard">
                  <v-card-title>
                    <span class="text-h5">New Flashcard</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <v-text-field
                            label="Question*"
                            required
                            v-model="setQ"
                            variant="underlined"
                          ></v-text-field>
                          <v-textarea
                            clearable
                            label="Answer*"
                            variant="solo"
                            v-model="setAns"
                          ></v-textarea>
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
          <!-- End of form -->
          <v-col cols="2">
            <v-btn rounded="lg"> Edit Flashcards </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-row>
        <div v-for="flashcard in flashcards" :key="flashcard.uid">
          <v-card class="pa-5 ma-3">
            <v-card-text class="pa-10">
              {{ flashcard.question }}</v-card-text
            >
          </v-card>
        </div>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import { db } from "@/main";
import { collection, onSnapshot, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default {
  name: "Flashcard",
  props: {
    setId: String,
  },
  data: () => ({
    dialog: false,
    setQ: "",
    setAns: "",
    flashcards: [],
  }),
  // Needed so then methods can access setID
  computed:{
    setID(){
      return this.setId;
    }
  },
  created() {
    const currentUser = getAuth().currentUser;
    onSnapshot(
      collection(
        db,
        "users",
        currentUser.uid,
        "flashcard-sets",
        this.setId,
        "flashcards"
      ),
      (querySnapshot) => {
        this.flashcards= [];
        querySnapshot.forEach((doc) => {
          this.flashcards.push({
            uid: doc.id,
            name: doc.data().name,
            question: doc.data().question,
            answer: doc.data().answer,
          });
        });
      }
    );
  },
  methods: {
    async addFlashcard() {
      const currentUser = getAuth().currentUser;
      await addDoc(collection(db, "users", currentUser.uid, "flashcard-sets", this.setID, "flashcards"), {
        question: this.setQ,
        answer: this.setAns,
      });
        this.dialog = false;
    },
  },
};
</script>
