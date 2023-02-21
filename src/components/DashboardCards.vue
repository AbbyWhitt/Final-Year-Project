<template>
  <v-card class="ma-5">
    <v-card color="grey-lighten-3" flat rounded="1">
      <v-container>
        <v-col cols="4">
          <v-card>
            <v-card-title> Assignments: </v-card-title>
            <v-table fixed-header class="pa-1">
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
                  <td>{{ assignment.name }} </td>
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
      </v-container>
    </v-card>
  </v-card>
</template>

<script>
import { db } from "@/main";
import {
  collectionGroup,
  getDocs,
  onSnapshot,
  where,
  query,
  QuerySnapshot,
  doc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default {
  name: "home",
  props: {
    modId: String,
  },

  data: () => ({
    assignments: [],
  }),

  computed: {
    modID() {
      return this.modId;
    },
  },

  async mounted() {
    const currentUser = getAuth().currentUser;
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

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
