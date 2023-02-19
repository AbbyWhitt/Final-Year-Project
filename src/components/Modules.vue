<template>
  <v-card class="ma-5">
    <v-container>
      <v-row>
        <v-col cols="8">
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
        <v-col cols="2">
          <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ props }">
              <v-btn
                rounded="lg"
                class="ml-6 text"
                color="#449682"
                v-bind="props"
              >
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
                          required
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Module Name*"
                          v-model="modContent.modName"
                          required
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Module Lecturer Name*"
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
        </v-col>
        <v-col cols="2">
          <v-btn
            rounded="lg"
            class="text"
            color="#449682"
            @click="edit = !edit"
          >
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
                  mod.lastAssignmentDue.toDate().toLocaleDateString({
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                }}
              </td>
              <td>{{mod.modLectName}}</td>

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
                <v-btn v-if="edit" rounded="pill" size="small" color="info"
                  >Update</v-btn
                >
              </td>
              <!-- icon="mdi-trash-can-outline" color="error" -->
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
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default {
  name: "Module",
  data: () => ({
    dialog: false,
    edit: false,
    mods: [],
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
  }),
  computed: {
    btnText() {
      return this.edit ? "Cancel Editing" : "Edit Modules";
    },
  },
  methods: {
    async addModule() {
      const currentUser = getAuth().currentUser;
      await addDoc(collection(db, "users", currentUser.uid, "modules"), {
        modName: this.modContent.modName,
        modCode: this.modContent.modCode,
        semester: this.modContent.semester,
        modLectName: this.modContent.modLectName,
        lastAssignDue: new Date(this.modContent.lastAssignDue),
      });
      this.dialog = false;
      this.modContent.modName = "";
      this.modContent.modCode = "";
      this.modContent.semester = "";
      this.modContent.lastAssignDue = "";
      this.modContent.modLectName = "";
    },
    async deleteModule(module) {
      const currentUser = getAuth().currentUser;
      deleteDoc(doc(db, "users", currentUser.uid, "modules", module.Id));
    },
  },

  mounted() {
    const currentUser = getAuth().currentUser;
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
            lastAssignmentDue: doc.data().lastAssignDue,
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
