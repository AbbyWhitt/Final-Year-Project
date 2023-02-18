<template>
  <v-card class="ma-5">
    <v-container>
      <v-row>
        <v-col cols="8">
          <v-card class="d-flex" flat rounded="0">
            <v-icon
              icon="mdi-book-open-variant"
              size="large"
              class="pa-6"
            ></v-icon>
            <v-card-title class="text-h5 ml-n3"> Module </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-row>
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
                        v-model="assign.Name"
                        required
                        variant="underlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Weighting*"
                        v-model="assign.Weight"
                        required
                        variant="underlined"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete
                        label="Assessment Type"
                        v-model="assign.Type"
                        :items="type"
                        variant="underlined"
                        item-title="title"
                        item-value="value"
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        variant="underlined"
                        label="Assignment Due Date"
                        v-model="assign.DueDate"
                        type="date"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        v-model="assign.Brief"
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
        <v-btn rounded="lg"> Edit Assignments </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card> Placement Text!</v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { db } from "@/main";
import { collection, onSnapshot, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default {
  name: "Assignments",

  props: {
    modId: String,
  },

  data: () => ({
    dialog: false,
    assign: {
      Name: null,
      Weight: null,
      Type: null,
      DueDate: null,
      Brief: null,
    },
    type: [
      { title: "Exam - Online", value: "Online Exam" },
      { title: "Exam - In Person", value: "In Person Exam" },
      { title: "Practical assessment", value: "Practical Assessment" },
      { title: "Written Eassy", value: "Essay" },
      { title: "Presentation", value: "Presentation" },
    ],
  }),

  methods: {
    async addAssignment() {
      const currentUser = getAuth().currentUser;
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
          name: this.assign.Name,
          weight: this.assign.Weight,
          type: this.assign.Type,
          due: new Date(this.assign.DueDate), 
          notes: this.assign.Brief,
        }
      );
      this.dialog = false;
      this.assign.Name = "";
      this.assign.Weight = "";
      this.assign.Type = "";
      this.assign.DueDate = "";
      this.assign.Brief = "";
    },
  },
};
</script>

<style></style>
