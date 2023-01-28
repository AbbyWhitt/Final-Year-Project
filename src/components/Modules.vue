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
            <v-card-title class="text-h5 ml-n3"> Modules </v-card-title>
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
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Module Name*"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field label="Assignment Name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field label="Due Date*" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete
                        label="Assignment Type"
                        :items="[
                          'Online Exam',
                          'In-person Exam',
                          'Coursework',
                          'Practical',
                          'Formative',
                        ]"
                        variant="underlined"
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-checkbox label="Has Multiple Assignments"></v-checkbox>
                    </v-col>
                  </v-row>
                </v-container>
                <small>*indicates required field</small>
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
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="dialog = false"
                >
                  Save
                </v-btn>
              </v-card-actions>
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
              <th class="text-left">Assigment Name</th>
              <th class="text-left">Assignment Type</th>
              <th class="text-left">Due Date</th>
              <th class="text-left">Progress (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Module",
  data: () => ({
    dialog: false,
  }),
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
