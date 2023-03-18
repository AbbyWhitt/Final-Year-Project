<template>
  <v-card class="ma-5">
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-card class="d-flex" flat rounded="0">
            <v-icon icon="mdi-card-text" size="large" class="pa-6"></v-icon>
            <v-card-title class="text-h5 ml-n3 font-weight-light">
              Flashcards // {{ flashcardSet.name }}
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="2">
          <router-link class="linkText" to="Flashcards">
            <v-btn rounded="lg" class="d-none d-lg-flex"> Back to Sets </v-btn>
            <v-btn
              class="d-flex d-lg-none"
              variant="text"
              icon="mdi-arrow-left"
              aria-label="Back to Sets"
            ></v-btn>
          </router-link>
        </v-col>
        <v-col cols="2">
          <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ props }">
              <v-btn class="d-none d-lg-flex" rounded="lg" v-bind="props">
                Create a Flashcard
              </v-btn>
              <v-btn
                class="d-flex d-lg-none"
                variant="text"
                icon="mdi-plus-circle-outline"
                aria-label="Create a Flashcard"
                v-bind="props"
              ></v-btn>
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
                          :rules="qRules"
                          variant="underlined"
                        ></v-text-field>
                        <v-textarea
                          no-resize
                          clearable
                          label="Answer*"
                          variant="solo"
                          v-model="setAns"
                          :rules="aRules"
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
          <v-btn class="d-none d-lg-flex" rounded="lg" @click="edit = !edit">
            {{ btnText }}
          </v-btn>
          <v-btn
            class="d-flex d-lg-none"
            variant="text"
            icon="mdi-pencil-outline"
            aria-label="Edit Flashcard"
            @click="edit = !edit"
          ></v-btn>
        </v-col>
        <v-divider thickness="2"></v-divider>
      </v-row>
      <v-row>
        <v-col
          v-for="flashcard in flashcards"
          :key="flashcard.uid"
          cols="3"
          style="height: 100%"
        >
          <v-card color="#d3ebe5" class="mt-3 ml-4">
            <v-card-title class="font-weight-light">
              Question
              <!-- buttons -->
              <v-btn
                v-if="edit"
                variant="plain"
                @click="deleteFlash(flashcard)"
                aria-label="Delete Flashcard"
              >
                <v-icon size="30" color="#1c3d35">
                  mdi-delete-circle-outline
                </v-icon>
              </v-btn>
              <v-dialog v-model="flashcard.editing" persistent>
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-bind="props"
                    v-if="edit"
                    variant="plain"
                    @click="Object.assign(temporarySet, flashcard)"
                    aria-label="Update Flashcard"
                    ><v-icon size="30" color="#1c3d35">
                      mdi-pencil-circle-outline
                    </v-icon></v-btn
                  ></template
                >
                <!-- End of buttons -->
                <!-- Update Form -->
                <v-card class="w-50 center">
                  <v-form @submit.prevent="updateFlashcard(temporarySet)">
                    <v-card-title>
                      <span class="text-h5">Update Flashcard</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12">
                            <v-text-field
                              label="Question*"
                              required
                              v-model="temporarySet.question"
                              :rules="qRules"
                              variant="underlined"
                            ></v-text-field>
                            <v-textarea
                              no-resize
                              clearable
                              label="Answer*"
                              variant="solo"
                              v-model="temporarySet.answer"
                              :rules="aRules"
                            ></v-textarea>
                          </v-col>
                        </v-row>
                      </v-container>
                      <small style="color: red"
                        >*indicates required field</small
                      >
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="#449682"
                        variant="text"
                        type="submit"
                        aria-label="update flashcard"
                      >
                        Update
                      </v-btn>
                      <v-btn
                        color="black"
                        variant="text"
                        @click="flashcard.editing = false"
                        aria-label="close update window"
                      >
                        Cancel
                      </v-btn>
                    </v-card-actions>
                  </v-form>
                </v-card>
              </v-dialog>
              <!-- End of update form -->
            </v-card-title>
            <v-card-text class="pa-5 text-center" style="font-size: 1rem">
              {{ flashcard.question }}</v-card-text
            >
            <v-card-actions>
              <v-btn
                variant="text"
                @click="toggle(flashcard)"
                aria-label="reveal flashcard answer"
              >
                Reveal
              </v-btn>
            </v-card-actions>
            <!-- Answer Card -->
            <v-expand-transition>
              <v-card
                v-if="flashcard.showAnswer"
                class="transition-fast-in-fast-out vreveal"
                style="height: 100%; overflow: auto"
                color="#d3ebe5"
              >
                <v-card-title class="font-weight-light"> Answer </v-card-title>
                <v-card-text class="pa-5" style="font-size: 1rem">
                  {{ flashcard.answer }}</v-card-text
                >
                <v-card-actions>
                  <v-btn
                    variant="text"
                    @click="toggle(flashcard)"
                    aria-label="close flashcard answer"
                  >
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import { db } from "@/main";
import {
  collection,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { useStore } from "vuex";

export default {
  name: "Flashcard",
  setup() {
    const store = useStore();
    return { store };
  },
  props: {
    setId: String,
  },
  data: () => ({
    dialog: false,
    edit: false,
    //reveal: false,
    setQ: "",
    setAns: "",
    temporarySet: {},
    flashcards: [],
    flashcardSet: {},
    qRules: [
      (value) => {
        if (value) return true;

        return "You must enter a question.";
      },
    ],
    aRules: [
      (value) => {
        if (value) return true;

        return "You must enter an answer.";
      },
    ],
  }),
  // Needed so then methods can access setID
  computed: {
    setID() {
      return this.setId;
    },
    btnText() {
      return this.edit ? "Cancel Editing" : "Edit Flashcards";
    },
  },
  async created() {
    const currentUser = this.$store.state.user;
    const docRef = doc(
      db,
      "users",
      currentUser.uid,
      "flashcard-sets",
      this.setId
    );
    const docSnap = await getDoc(docRef);
    this.flashcardSet = docSnap.data();
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
        this.flashcards = [];
        querySnapshot.forEach((doc) => {
          this.flashcards.push({
            uid: doc.id,
            name: doc.data().name,
            question: doc.data().question,
            answer: doc.data().answer,
            showAnswer: false,
          });
        });
      }
    );
  },
  methods: {
    async addFlashcard() {
      if (this.setQ && this.setAns) {
        const currentUser = this.$store.state.user;
        await addDoc(
          collection(
            db,
            "users",
            currentUser.uid,
            "flashcard-sets",
            this.setID,
            "flashcards"
          ),
          {
            question: this.setQ,
            answer: this.setAns,
          }
        );
        this.dialog = false;
        this.setQ = "";
        this.setAns = "";
      }
    },
    toggle(flashcard) {
      flashcard.showAnswer = !flashcard.showAnswer;
    },
    async deleteFlash(flashcard) {
      const currentUser = this.$store.state.user;
      await deleteDoc(
        doc(
          db,
          "users",
          currentUser.uid,
          "flashcard-sets",
          this.setID,
          "flashcards",
          flashcard.uid
        )
      );
    },
    async updateFlashcard(card) {
      const currentUser = this.$store.state.user;
      const docRef = doc(
        db,
        "users",
        currentUser.uid,
        "flashcard-sets",
        this.setID,
        "flashcards",
        card.uid
      );
      await updateDoc(docRef, {
        question: card.question,
        answer: card.answer,
      });
      this.temporarySet = {};
      card.editing = false;
    },
  },
};
</script>

<style>
.linkText {
  text-decoration: none;
  color: black;
}
.vreveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
