<template>
  <v-card class="ma-5">
    <v-card color="grey-lighten-3" flat rounded="1">
      <v-container>
        <v-col cols="4">
          <v-card>
            <v-table fixed-header height="760px">
              <thead>
                <tr>
                  <th class="text-left">Module Name</th>

                  <th class="text-left">Assignment</th>

                  <th class="text-left">Due Date</th>

                  <th class="text-left">Progress</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="mod in mods" :key="mod.modCode">
                  <td>{{ mod.modName }}</td>
                  <td>
                {{
                  mod.lastAssignmentDue.toDate().toLocaleDateString({
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                }}
                </td>
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
import { collection, onSnapshot } from "firebase/firestore";

export default {
  data: () => ({
    mods: [],
    modContent: {
      modName: null,
      lastAssignDue: null,
    },
  }),

  mounted() {
    onSnapshot(collection(db, "modules"), (querySnapshot) => {
      const fbMod = [];
      querySnapshot.forEach((doc) => {
        const mod = {
          modName: doc.data().modName,
          lastAssignmentDue: doc.data().lastAssignDue,
          Id: doc.id,
        };
        fbMod.push(mod);
      });
      
      this.mods = fbMod;
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
