<template>
  <v-card class="ma-5">
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-card class="d-flex" flat rounded="0">
            <v-icon
              icon="mdi-book-open-variant"
              size="large"
              class="pa-6"
            ></v-icon>
            <v-card-title class="text-h5 ml-n3 font-weight-light">
              Assignments // {{ module.modCode }}
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="2">
          <router-link class="linkText" to="Modules">
            <v-btn class="ml-7" rounded="lg"> Back to Modules </v-btn>
          </router-link>
        </v-col>
        <v-col cols="2">
          <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ props }">
              <v-btn rounded="lg" v-bind="props"> Create an Assignment </v-btn>
            </template>
            <!-- Assignment Form -->
            <v-card class="w-50 center">
              <v-form @submit.prevent="addAssignment">
                <v-card-title>
                  <span class="text-h5">New Assignment</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Assignment Name*"
                          v-model="assign.name"
                          :rules="nameR"
                          required
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Weighting %"
                          v-model="assign.weight"
                          required
                          variant="underlined"
                        ></v-text-field> 
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-autocomplete
                          label="Assessment Type"
                          v-model="assign.type"
                          :items="type"
                          variant="underlined"
                          item-title="title"
                          item-value="value"
                        ></v-autocomplete>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          variant="underlined"
                          label="Assignment Due Date*"
                          v-model="assign.dueDate"
                          :rules="dateR"
                          type="date"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-textarea
                          v-model="assign.brief"
                          label="Assignment Brief/Notes"
                          variant="solo"
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
          <!-- End of form -->
        </v-col>
        <v-col cols="2">
          <v-btn rounded="lg" @click="edit = !edit">
            {{ btnText }}
          </v-btn>
        </v-col>
        <div class="ml-12"></div>
        <v-divider thickness="2"></v-divider>
      </v-row>
      <v-row>
        <v-col v-for="assignment in assignments" :key="assignment.uid" cols="4">
          <v-card color="#d3ebe5" class="ma-4">
            <template v-slot:append>
              <v-btn
                v-if="edit"
                variant="plain"
                @click="deleteAssignment(assignment)"
                ><v-icon size="35" color="#1c3d35">
                  mdi-delete-circle-outline
                </v-icon></v-btn
              >
            </template>
            <v-card-title class="text-center">
              {{ assignment.name }}
            </v-card-title>
            <v-spacer />
            <v-card-text>
              <span class="text-subtitle-1 font-weight-medium">
                Weighting of Assignment:
              </span>
              <span class="text-subtitle-1">
                {{ assignment.weight }} %
              </span>
              <v-spacer />
              <span class="text-subtitle-1 font-weight-medium"> Type: </span>
              <span class="text-subtitle-1">
                {{ assignment.type }}
              </span>
              <v-spacer />
              <span class="text-subtitle-1 font-weight-medium">
                Due Date:
              </span>
              <span class="text-subtitle-1">
                {{
                  assignment.dueDate.toDate().toLocaleDateString({
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                }}
              </span>
              <!-- <v-checkbox v-model="checkbox">
                <template v-slot:prepend>
                  <div>Assignment Completed</div>
                </template>
              </v-checkbox> -->
            </v-card-text>
            <v-card class="ma-3 overflow-auto" height="150">
              <v-card-title class="miniTitle">
                Assignment Brief Notes
              </v-card-title>
              <v-card-text
                class="font-weight-light"
                style="white-space: pre-line"
              >
                {{ assignment.brief }}
              </v-card-text>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { db } from "@/main";
import { useStore } from "vuex";
import {
  collection,
  onSnapshot,
  getDoc,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

export default {
  name: "Assignments",
  setup() {
    const store = useStore();
    return { store };
  },
  props: {
    modId: String,
  },

  data: () => ({
    dialog: false,
    edit: false,
    checkbox: false,
    assignments: [],
    assign: {
      name: null,
      weight: null,
      type: null,
      dueDate: null,
      brief: null,
      modCode: null,
    },
    module: {},
    type: [
      { title: "Exam - Online", value: "Online Exam" },
      { title: "Exam - In Person", value: "In Person Exam" },
      { title: "Practical assessment", value: "Practical Assessment" },
      { title: "Written Eassy", value: "Essay" },
      { title: "Presentation", value: "Presentation" },
      { title: "Other", value: "Other" },
    ],
    nameR: [
      (value) => {
        if (value) return true;

        return "You must enter an Assignment Name.";
      },
    ],
    dateR: [
      (value) => {
        if (value) return true;

        return "You must enter an Assignment Due Date.";
      },
    ],
  }),

  computed: {
    modID() {
      return this.modId;
    },
    btnText() {
      return this.edit ? "Cancel Editing" : "Edit Assignments";
    },
  },

  async created() {
    const currentUser = this.$store.state.user;
    const docRef = doc(db, "users", currentUser.uid, "modules", this.modID);
    const docSnap = await getDoc(docRef);
    this.module = docSnap.data();
    onSnapshot(
      collection(
        db,
        "users",
        currentUser.uid,
        "modules",
        this.modID,
        "assignments"
      ),
      (QuerySnapshot) => {
        this.assignments = [];
        QuerySnapshot.forEach((doc) => {
          this.assignments.push({
            id: doc.id,
            name: doc.data().name,
            weight: doc.data().weight,
            type: doc.data().type,
            dueDate: doc.data().due,
            brief: doc.data().notes,
            modCode: this.module.modCode,
          });
        });
        this.assignments.sort((a, b) =>
          a.dueDate > b.dueDate ? 1 : b.dueDate > a.dueDate ? -1 : 0
        );
      }
    );
  },

  methods: {
    async addAssignment() {
      if (this.assign.name && this.assign.dueDate) {
        const currentUser = this.$store.state.user;
        await addDoc(
          collection(
            db,
            "users",
            currentUser.uid,
            "modules",
            this.modId,
            "assignments"
          ),
          {
            name: this.assign.name,
            weight: this.assign.weight,
            type: this.assign.type,
            due: new Date(this.assign.dueDate),
            notes: this.assign.brief,
            modCode: this.module.modCode,
            userId: currentUser.uid,
          }
        );
        this.dialog = false;
        this.assign.name = "";
        this.assign.weight = "";
        this.assign.type = "";
        this.assign.dueDate = "";
        this.assign.brief = "";
      }
    },
    async deleteAssignment(assignment) {
      const currentUser = this.$store.state.user;
      deleteDoc(
        doc(
          db,
          "users",
          currentUser.uid,
          "modules",
          this.modId,
          "assignments",
          assignment.id
        )
      );
    },
  },
};
</script>

<style scoped>
.miniTitle {
  font-size: 1em;
}
</style>
