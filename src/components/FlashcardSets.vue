<template>
  <v-card class="ma-5">
    <v-container>
      <v-row>
        <v-col cols="9">
          <v-card class="d-flex" flat rounded="0">
            <v-icon
              icon="mdi-card-text"
              size="large"
              class="mt-2 mr-2"
            ></v-icon>
            <v-card-title class="text-h5 ml-n3 font-weight-light">
              FlashcardSets
            </v-card-title>
          </v-card>
        </v-col>
       
        <v-col cols="2">
          <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ props }">
              <v-btn
                rounded="lg"
                class="mt-1"
                v-bind="props"
              >
                Create a Flashcard Set
              </v-btn>
            </template>
            <!-- Flashcard creation form  -->
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
                          :rules="nameR"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small style="color: red">*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="#449682"
                    variant="text"
                    type="submit"
                    @click="reset"
                  >
                    Create
                  </v-btn>
                  <v-btn color="black" variant="text" @click="dialog = false">
                    Cancel
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
            <!-- End of Form -->
          </v-dialog>
        </v-col>
         <v-col cols="1">
          <v-btn
            class="mt-1"
            rounded="lg"
            @click="edit = !edit"
          >
            {{ btnText }}
          </v-btn>
        </v-col>
        <v-divider thickness="2"></v-divider>
      </v-row>

      <v-container>
        <v-row>
          <v-col v-for="item in flashcardSets" :key="item.uid" cols="12" sm="3">
            <v-card class="pt-3 pb-3 ma-3" color="#d3ebe5">
              <template v-slot:append>
                <v-btn v-if="edit" variant="plain" @click="deleteFlashSet(item)"
                  ><v-icon size="35" color="#1c3d35">
                    mdi-delete-circle-outline
                  </v-icon></v-btn
                >
              </template>
              <router-link
                class="title"
                :to="{ name: 'flashcards', params: { setId: item.uid } }"
              >
                <v-card-title
                  class="linkText pa-13 text-center font-weight-light"
                >
                  {{ item.name }}
                </v-card-title>
              </router-link>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-card>
</template>

<script>
import { db } from "@/main";
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useStore } from 'vuex';
export default {
  name: "FlashcardSets",
  setup() {
    const store = useStore();
    return { store };
  },
  data: () => ({
    dialog: false,
    edit: false,
    setName: "",
    flashcardSets: [],
    nameR: [
      (value) => {
        if (value) return true;

        return "You must enter a name.";
      },
    ],
  }),
  computed: {
    btnText() {
      return this.edit ? "Cancel Sets" : "Edit Sets";
    },
  },
  methods: {
    async addFlashSet() {
      if (this.setName) {
      const currentUser = this.$store.state.user;
      await addDoc(collection(db, "users", currentUser.uid, "flashcard-sets"), {
        name: this.setName,
      });
      this.dialog = false;
      this.setName = "";
    }
    },
    async deleteFlashSet(flashcardSet) {
      const currentUser = this.$store.state.user;
      await deleteDoc(
        doc(db, "users", currentUser.uid, "flashcard-sets", flashcardSet.uid)
      );
    },
  },
  created() {
    const currentUser = this.$store.state.user;
    onSnapshot(
      collection(db, "users", currentUser.uid, "flashcard-sets"),
      (querySnapshot) => {
        this.flashcardSets = []; // clear array before pushing more info otherwise it renders double
        querySnapshot.forEach((doc) => {
          this.flashcardSets.push({
            uid: doc.id,
            name: doc.data().name,
          });
        });
      }
    );
  },
};
</script>

<style>
.title {
  text-decoration: none;
}
</style>
