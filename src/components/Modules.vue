<template>
  <v-card class="ma-5">
    <v-container>
      <v-row>
        <v-col cols="10">
          <v-card class="d-flex" flat rounded="0">
            <v-icon
              icon="mdi-book-open-variant"
              size="large"
              class="pa-6"
            ></v-icon>
            <v-card-title class="text-h5 ml-n3">
              Modules
            </v-card-title>
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
                Create a Module
              </v-btn>
            </template>
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
                          required
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Module Name*"
                          required
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-autocomplete
                          label="Module Semester"
                          :items="['Sem 1', 'Sem 2']"
                          variant="underlined"
                        ></v-autocomplete>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          variant="underlined"
                          label="Last Assignment Due Date"
                          type="date"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small style="color: red">*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="dialog = false"
                  >
                    Close
                  </v-btn>
                  <v-btn color="blue-darken-1" variant="text" type="submit">
                    Save
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
        <v-table fixed-header class="w-screen">
          <thead>
            <tr>
              <th class="text-left">Module Code</th>
              <th class="text-left">Module Name</th>
              <th class="text-left">Semester</th>
              <th class="text-left">Last Assignment Due</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="mod in mods" :key="mod.modCode">
              <td>{{ mod.modCode }}</td>
              <td>{{ mod.modName }}</td>
              <td>{{ mod.semester }}</td>
              <td>{{ mod.lastAssignmentDue.toDate().toLocaleDateString({year: 'numeric', month: 'long', day: 'numeric'}) }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { ref } from "vue";
import { db } from "@/main";
import { collection, onSnapshot } from "firebase/firestore";

export default {
  name: "Module",
  data: () => ({
    dialog: false,
    mods: [],
  }),

  methods: {
    addModule() {
      console.log("AddModule");
    },
  },

  async mounted() {
    // const querySnapshot = await getDocs(collection(db, "modules"));
    // let fbMod = []
    // querySnapshot.forEach((doc) => {
    // // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    //   const mod = {
    //     modCode: doc.data().modCode,
    //     modName: doc.data().modName,
    //     semester: doc.data().semester,
    //     lastAssignmentDue: doc.data().lastAssignDue
    //   }
    //   fbMod.push(mod)
    // });
    // this.mods= fbMod

    onSnapshot(collection(db, "modules"), (querySnapshot) => {
      const fbMod = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        const mod = {
          modCode: doc.data().modCode,
          modName: doc.data().modName,
          semester: doc.data().semester,
          lastAssignmentDue: doc.data().lastAssignDue,
        };
        fbMod.push(mod);
      });
      fbMod.sort((a,b) => (a.modCode > b.modCode) ? 1 : ((b.modCode > a.modCode) ? -1 : 0))
      this.mods = fbMod;
    });
    
    console.log(this.mods)
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
</style>
