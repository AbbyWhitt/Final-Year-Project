<template>
  <v-card class="ma-5">
    <v-sheet class="ma-2">
      <v-row>
        <v-col cols="6">
          <v-card
            class="d-flex"
            flat
            rounded="0"
            aria-roledescription="FlashcardSets are a way of organising flashcards. They act as a folder to a collection of flashcards"
          >
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
        <!-- create a set buttons -->
        <v-col cols="2" offset="2">
          <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ props }">
              <v-btn rounded="lg" class="d-none d-lg-flex" v-bind="props">
                Create a Set
              </v-btn>
              <v-btn
                class="d-flex d-lg-none"
                variant="text"
                icon="mdi-plus-circle-outline"
                aria-label="Create a FlashcardSet"
                v-bind="props"
              ></v-btn>
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
                      <v-col>
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
                    aria-label="create flashcardset"
                  >
                    Create
                  </v-btn>
                  <v-btn
                    aria-label="close form"
                    color="black"
                    variant="text"
                    @click="cancelCreationSet()"
                  >
                    Cancel
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
            <!-- End of Form -->
          </v-dialog>
        </v-col>
        <v-col cols="2">
          <!-- edit buttons -->
          <v-btn
            class="d-flex d-lg-none"
            variant="text"
            icon="mdi-pencil-circle-outline"
            aria-label="Icon button that activates edit buttons and closes buttons on small screens"
            @click="edit = !edit"
          ></v-btn>
          <v-btn
            aria-label="Activates edit buttons and closes buttons"
            rounded="lg"
            @click="edit = !edit"
            class="d-none d-lg-flex"
          >
            {{ btnText }}
          </v-btn>
        </v-col>
        <v-divider thickness="2"></v-divider>
      </v-row>

      <v-sheet class="ma-2">
        <v-row>
          <v-col v-for="item in flashcardSets" :key="item.uid" cols="12" sm="3">
            <v-card
              class="pt-3 pb-3 ma-3"
              color="#ffe9ed"
              style="text-align: center"
              height="170px"
            >
              <!-- Buttons -->
              <template v-slot:append>
                <v-btn
                  v-if="edit"
                  variant="plain"
                  @click="deleteFlashSet(item)"
                  aria-label="delete flashcardset"
                  ><v-icon size="35" color="#1c3d35">
                    mdi-delete-circle-outline
                  </v-icon></v-btn
                >
                <v-dialog v-model="item.editing" persistent>
                  <template v-slot:activator="{ props }">
                    <v-btn
                      v-bind="props"
                      v-if="edit"
                      variant="plain"
                      @click="Object.assign(temporarySet, item)"
                      aria-label="edit flashcardset"
                      ><v-icon size="35" color="#1c3d35">
                        mdi-pencil-circle-outline
                      </v-icon></v-btn
                    ></template
                  >
                  <!-- Update Form -->
                  <v-card class="w-50 center">
                    <v-container>
                      <v-form @submit.prevent="updateFlashSet(temporarySet)">
                        <v-card-title>
                          <span class="text-h5">Update Flashcard Set</span>
                        </v-card-title>
                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                  required
                                  v-model="temporarySet.name"
                                  variant="underlined"
                                  :rules="nameR"
                                ></v-text-field>
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
                            aria-label="update flashcardset"
                            color="#449682"
                            variant="text"
                            type="submit"
                          >
                            Update
                          </v-btn>
                          <v-btn
                            color="black"
                            variant="text"
                            @click="item.editing = false"
                            aria-label="close form"
                          >
                            Cancel
                          </v-btn>
                        </v-card-actions>
                      </v-form>
                    </v-container>
                  </v-card>
                </v-dialog>
              </template>
              <!-- End of Update Form -->
              <router-link
                class="title overflow-auto"
                :to="{ name: 'flashcards', params: { setId: item.uid } }"
              >
                <v-card-title
                  class="linkText mt-6 font-weight-light overflow-auto"
                >
                  {{ item.name }}
                </v-card-title>
              </router-link>
              <v-card-actions>
                <v-btn
                  v-if="item.fav"
                  size="small"
                  color="surface-variant"
                  variant="text"
                  icon="mdi-heart"
                  @click="setFav(item.uid, false)"
                ></v-btn>
                <v-btn
                  v-else
                  size="small"
                  color="surface-variant"
                  variant="text"
                  icon="mdi-heart-outline"
                  @click="setFav(item.uid, true)"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </v-sheet>
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
  updateDoc,
} from "firebase/firestore";
import { useStore } from "vuex";
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
    temporarySet: {},
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
        await addDoc(
          collection(db, "users", currentUser.uid, "flashcard-sets"),
          {
            name: this.setName,
            fav: false,
          }
        );
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
    async updateFlashSet(set) {
      const currentUser = this.$store.state.user;
      const docRef = doc(
        db,
        "users",
        currentUser.uid,
        "flashcard-sets",
        set.uid
      );
      await updateDoc(docRef, {
        name: set.name,
      });
      this.temporarySet = {};
      set.editing = false;
    },

    async setFav(itemId, isFav) {
      const currentUser = this.$store.state.user;
      const docRef = doc(
        db,
        "users",
        currentUser.uid,
        "flashcard-sets",
        itemId
      );
      await updateDoc(docRef, {
        fav: isFav,
      });
    },
    cancelCreationSet() {
      this.dialog = false;
      this.setName = "";
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
            fav: doc.data().fav,
            editing: false,
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
