<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-card class="rounded-xl">
          <v-card-title> Assignments: </v-card-title>
          <v-table fixed-header class="pa-1 overflow-auto">
            <thead>
              <tr>
                <th class="text-left">Module Code</th>

                <th class="text-left">Assignment Name</th>

                <th class="text-left">Due Date</th>

                <th class="text-left">Type</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="assignment in assignments" :key="assignment.uid">
                <td>{{ assignment.modCode }}</td>
                <td>{{ assignment.name }}</td>
                <td>
                  {{
                    assignment.due.toDate().toLocaleDateString({
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  }}
                </td>
                <td>{{ assignment.type }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
      <!-- Next Card -->
      <v-col cols="3">
        <v-card class="rounded-xl">
          <v-card-title class="text-center">
            Days Until Next Assignment
            <v-tooltip v-model="show" location="top">
              <template v-slot:activator="{ props }">
                <v-icon v-bind="props" icon="mdi-help-circle-outline" size="20">
                </v-icon>
              </template>
              <span>Placeholder with hardcoded value</span>
            </v-tooltip></v-card-title
          >
          <v-card-text class="text-center cardText"> 25 Days </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db } from "@/main";
import { collectionGroup, onSnapshot, where, query } from "firebase/firestore";
import { useStore } from "vuex";

export default {
  name: "home",
  setup() {
    const store = useStore();
    return { store };
  },
  props: {
    modId: String,
  },

  data: () => ({
    assignments: [],
    show: false,
  }),

  computed: {
    modID() {
      return this.modId;
    },
  },

  async mounted() {
    const currentUser = this.$store.state.user;
    const q = query(
      collectionGroup(db, "assignments"),
      where("userId", "==", currentUser.uid)
    );
    onSnapshot(q, (querySnapshot) => {
      this.assignments = [];
      querySnapshot.forEach((doc) => {
        this.assignments.push(doc.data());
      });
      this.assignments.sort((a, b) =>
        a.due > b.due ? 1 : b.due > a.due ? -1 : 0
      );
    });
  },

  unmounted() {},
};
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.cardText {
  padding: 10%;
  font-size: 1.8em;
}
</style>
