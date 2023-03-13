<template>
  <v-card class="ma-5">
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-card class="d-flex" flat rounded="0">
            <v-icon
              icon="mdi-book-open-variant"
              size="large"
              class="mt-2 mr-2"
            ></v-icon>
            <v-card-title class="text-h5 ml-n3 font-weight-light">
              Modules
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="3" offset="3">
          <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ props }">
              <v-btn rounded="lg" class="ml-6" v-bind="props">
                Create a Module
              </v-btn>
            </template>
            <!-- Create Module Form -->
            <v-card class="w-50 center">
              <v-form @submit.prevent="addModule">
                <v-card-title>
                  <span class="text-h5">New Module</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Module Code*"
                          v-model="modContent.modCode"
                          :rules="codeR"
                          required
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Module Name*"
                          v-model="modContent.modName"
                          :rules="nameR"
                          required
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Module Lecturer Name"
                          v-model="modContent.modLectName"
                          required
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-autocomplete
                          label="Module Semester"
                          v-model="modContent.semester"
                          :items="semesters"
                          variant="underlined"
                          item-title="title"
                          item-value="value"
                        ></v-autocomplete>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          variant="underlined"
                          label="Last Assignment Due Date"
                          v-model="modContent.lastAssignDue"
                          type="date"
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
          <!-- End of Form -->
          <v-btn rounded="lg" @click="edit = !edit" class="mt-1 ml-3">
            {{ btnText }}
          </v-btn>
        </v-col>
        <v-divider thickness="2"></v-divider>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-table fixed-header class="w-screen mt-5">
          <thead>
            <tr>
              <th class="text-left">Module Code</th>
              <th class="text-left">Module Name</th>
              <th class="text-left">Semester</th>
              <th class="text-left">Last Assignment Due</th>
              <th class="text-left">Module Lecturer</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            <tr v-for="mod in mods" :key="mod.Id">
              <td>
                <router-link
                  class="textTable"
                  :to="{ name: 'assignments', params: { modId: mod.Id } }"
                  >{{ mod.modCode }}</router-link
                >
              </td>

              <td>
                <router-link
                  class="textTable"
                  :to="{ name: 'assignments', params: { modId: mod.Id } }"
                  >{{ mod.modName }}</router-link
                >
              </td>
              <td>{{ mod.semester }}</td>
              <td>
                {{
                  new Date(mod.lastAssignDue).toLocaleDateString({
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                }}
              </td>
              <td>{{ mod.modLectName }}</td>
              <!-- buttons -->
              <td>
                <v-btn
                  v-if="edit"
                  rounded="pill"
                  size="small"
                  color="error"
                  @click="deleteModule(mod)"
                  >Delete</v-btn
                >
              </td>
              <td>
                <v-dialog v-model="mod.editing" persistent>
                  <template v-slot:activator="{ props }">
                    <v-btn
                      v-if="edit"
                      rounded="pill"
                      size="small"
                      color="info"
                      v-bind="props"
                      @click="Object.assign(temporarySet, mod)"
                      >Update</v-btn
                    >
                  </template>
                  <!-- Update form -->
                  <v-card class="w-50 center">
                    <v-form @submit.prevent="updateModule(temporarySet)">
                      <v-card-title>
                        <span class="text-h5">Update Module</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                label="Module Code*"
                                v-model="temporarySet.modCode"
                                :rules="codeR"
                                required
                                variant="underlined"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                label="Module Name*"
                                v-model="temporarySet.modName"
                                :rules="nameR"
                                required
                                variant="underlined"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                label="Module Lecturer Name"
                                v-model="temporarySet.modLectName"
                                required
                                variant="underlined"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col cols="12" sm="6" md="4">
                              <v-autocomplete
                                label="Module Semester"
                                v-model="temporarySet.semester"
                                :items="semesters"
                                variant="underlined"
                                item-title="title"
                                item-value="value"
                              ></v-autocomplete>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                variant="underlined"
                                label="Last Assignment Due Date"
                                v-model="temporarySet.lastAssignDue"
                                type="date"
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
                        <v-btn color="#449682" variant="text" type="submit">
                          Create
                        </v-btn>
                        <v-btn
                          color="black"
                          variant="text"
                          @click="mod.editing = false"
                        >
                          Cancel
                        </v-btn>
                      </v-card-actions>
                    </v-form>
                  </v-card>
                </v-dialog>
              </td>
              <!-- end of buttons -->
            </tr>
          </tbody>
        </v-table>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { db } from "@/main";
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  collectionGroup,
  where,
  query,
  getDocs,
} from "firebase/firestore";
import { useStore } from "vuex";
export default {
  name: "Module",
  setup() {
    const store = useStore();
    return { store };
  },
  data: () => ({
    dialog: false,
    edit: false,
    mods: [],
    temporarySet: {},
    modContent: {
      modCode: null,
      modName: null,
      semester: null,
      lastAssignDue: null,
      modLectName: null,
    },
    semesters: [
      { title: "Sem 1", value: 1 },
      { title: "Sem 2", value: 2 },
      { title: "Sem 1 & 2", value: "Both" },
    ],
    unsubscribe: null,
    codeR: [
      (value) => {
        if (value) return true;

        return "You must enter a Module Code.";
      },
    ],
    nameR: [
      (value) => {
        if (value) return true;

        return "You must enter a Module Name.";
      },
    ],
  }),
  computed: {
    btnText() {
      return this.edit ? "Cancel Editing" : "Edit Modules";
    },
  },
  methods: {
    async addModule() {
      if (
        this.modContent.modCode &&
        this.modContent.modName &&
        this.modContent.lastAssignDue
      ) {
        const currentUser = this.$store.state.user;
        console.log(this.modContent);
        await addDoc(collection(db, "users", currentUser.uid, "modules"), {
          modName: this.modContent.modName,
          modCode: this.modContent.modCode,
          semester: this.modContent.semester,
          modLectName: this.modContent.modLectName,
          lastAssignDue: this.modContent.lastAssignDue,
        });
        this.dialog = false;
        this.modContent.modName = "";
        this.modContent.modCode = "";
        this.modContent.semester = "";
        this.modContent.lastAssignDue = "";
        this.modContent.modLectName = "";
      }
    },
    async deleteModule(module) {
      const currentUser = this.$store.state.user;
      const q = query(
        collectionGroup(db, "assignments"),
        where("userId", "==", currentUser.uid)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (document) => {
        await deleteDoc(
          doc(
            db,
            "users",
            currentUser.uid,
            "modules",
            module.Id,
            "assignments",
            document.id
          )
        );
      });
      deleteDoc(doc(db, "users", currentUser.uid, "modules", module.Id));
    },
    async updateModule(modUpdate) {
      console.log(modUpdate);
      const currentUser = this.$store.state.user;
      const docRef = doc(db, "users", currentUser.uid, "modules", modUpdate.Id);
      await updateDoc(docRef, {
        modName: modUpdate.modName,
        modCode: modUpdate.modCode,
        semester: modUpdate.semester,
        modLectName: modUpdate.modLectName,
        lastAssignDue: modUpdate.lastAssignDue,
      });
      this.temporarySet = {};
      modUpdate.editing = false;
    },
  },

  mounted() {
    const currentUser = this.$store.state.user;
    onSnapshot(
      collection(db, "users", currentUser.uid, "modules"),
      (querySnapshot) => {
        const fbMod = [];
        querySnapshot.forEach((doc) => {
          const mod = {
            modCode: doc.data().modCode,
            modName: doc.data().modName,
            semester: doc.data().semester,
            modLectName: doc.data().modLectName,
            lastAssignDue: doc.data().lastAssignDue,
            userId: currentUser.uid,
            Id: doc.id,
          };
          fbMod.push(mod);
        });

        fbMod.sort((a, b) =>
          a.modCode > b.modCode ? 1 : b.modCode > a.modCode ? -1 : 0
        );
        this.mods = fbMod;
      }
    );
  },

  unmounted() {},
};
</script>

<style>
.text {
  color: white !important;
}
.center {
  left: 28%;
}
.textTable {
  text-decoration: none;
  color: #449682;
}
</style>
