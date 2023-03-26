<template>
  <v-sheet class="ma-2">
    <v-row>
      <!-- Assignments Card -->
      <v-col cols="5">
        <v-card
          class="rounded-xl overflow-auto border"
          aria-label="assignments table"
          aria-description="A table of all assignments ordered by nearest due date first. Shows module code for assignments."
          height="31rem"
          >
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
                <td>
                  <router-link
                  class="textTable"
                  :to="{
                      name: 'assignments',
                      params: { modId: assignment.modId },
                    }"
                  >
                  {{ assignment.modCode }}
                  </router-link>
                </td>
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
      <v-col cols="4">
        <v-sheet>
          <!-- Next assignment due card -->
          <v-card
            class="rounded-xl border"
            aria-description="Displays the number of days including current day until next assignment"
            height="9.5rem"
          >
            <v-card-title class="text-center">
              Next Assignment due in
            </v-card-title>
            <v-card-text class="text-center cardText">
              {{ diffInDays }} days
            </v-card-text>
          </v-card>
          <!-- Hardcoded Task card -->
          <v-card class="rounded-xl mt-5 border" height="20.3rem">
            <v-card-title class="text-center">
              Tasks:
              <v-tooltip v-model="show" location="top">
                <template v-slot:activator="{ props }">
                  <v-icon
                    v-bind="props"
                    icon="mdi-help-circle-outline"
                    size="20"
                  >
                  </v-icon>
                </template>
                <span>Placeholder with hardcoded values</span>
              </v-tooltip>
            </v-card-title>
            <v-list lines="three" select-strategy="classic">
              <v-list-item value="notifications">
                <template v-slot:prepend="{ isActive }">
                  <v-list-item-action start>
                    <v-checkbox-btn
                      :model-value="isActive"
                      color="#ff96a8"
                    ></v-checkbox-btn>
                  </v-list-item-action>
                </template>

                <v-list-item-title>Revise for Data Mining</v-list-item-title>

                <v-list-item-subtitle>
                  Finish the flashcard set for classification.
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item value="sound">
                <template v-slot:prepend="{ isActive }">
                  <v-list-item-action start>
                    <v-checkbox-btn
                      :model-value="isActive"
                      color="#ff96a8"
                    ></v-checkbox-btn>
                  </v-list-item-action>
                </template>

                <v-list-item-title>Group Project Work</v-list-item-title>

                <v-list-item-subtitle>
                  Arrange a catch-up meeting with others.
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item value="widgets">
                <template v-slot:prepend="{ isActive }">
                  <v-list-item-action start>
                    <v-checkbox-btn
                      :model-value="isActive"
                      color="#ff96a8"
                    ></v-checkbox-btn>
                  </v-list-item-action>
                </template>

                <v-list-item-title
                  >Finish code for Final Year Project</v-list-item-title
                >

                <v-list-item-subtitle>
                  Finish off the dashboard cards.
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card>
        </v-sheet>
      </v-col>
      <!-- Fav FlashcardSet Card -->
      <v-col cols="3">
        <v-sheet>
          <v-card class="rounded-xl overflow-auto border" height="31rem">
            <v-card-title> Favourite FlashcardSets: </v-card-title>
            <v-table class="pa-1">
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in flashcardSets" :key="item.uid">
                  <td>
                    <router-link
                      class="textTable"
                      :to="{ name: 'flashcards', params: { setId: item.uid } }"
                      >{{ item.name }}</router-link
                    >
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
          <!-- New placeholder card -->
          <!-- <v-card class="rounded-xl border mt-5" height="9.6rem">
            <v-card-title class="text-center">Need to Work on:</v-card-title>
            <v-card-text class="text-center cardTextSm"> Data Mining </v-card-text>
          </v-card> -->
        </v-sheet>
      </v-col>
    </v-row>
    <!-- New row of cards -->
    <v-row>
      <v-col cols="7">
        <!-- placeholder line card -->
        <v-card class="rounded-xl border" height="20rem">
          <v-timeline direction="horizontal">
            <v-timeline-item dot-color="#ffcdd6">
              <template v-slot:opposite> Opposite content </template>
              <div>
                <div class="text-h6">
                  Activity:
                  <v-tooltip v-model="show" location="top">
                    <template v-slot:activator="{ props }">
                      <v-icon
                        v-bind="props"
                        icon="mdi-help-circle-outline"
                        size="20"
                      >
                      </v-icon>
                    </template>
                    <span>Placeholder with hardcoded values</span>
                  </v-tooltip>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </v-timeline-item>

            <v-timeline-item dot-color="#ffcdd6">
              <template v-slot:opposite> Opposite content </template>
              <div>
                <div class="text-h6">Content title</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </v-timeline-item>

            <v-timeline-item dot-color="#ffcdd6">
              <template v-slot:opposite> Opposite content </template>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card>
      </v-col>
      <!-- Next placeholder card -->
      <v-col>
        <v-card class="rounded-xl border" height="20rem">
          <v-card-title class="text-center">Today's Notes:</v-card-title>
          <v-sheet class="ma-3">
            <v-textarea
              label="Notes"
              variant="solo"
              clearable
              model-value="You've got this!"
              auto-grow
              bg-color="#fff5f7"
            ></v-textarea>
          </v-sheet>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import { db } from "@/main";
import {
  collectionGroup,
  onSnapshot,
  where,
  query,
  collection,
} from "firebase/firestore";
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
    flashcardSets: [],
    show: false,
    diffInDays: 0,
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
      this.assignments = this.assignments.filter(
        (assignment) => assignment.due.toDate() >= new Date()
      );

      const nearestDueAssignment = this.assignments[0];

      const diffInMs =
        nearestDueAssignment.due.toDate().getTime() - new Date().getTime();
      this.diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));
    });

    onSnapshot(
      collection(db, "users", currentUser.uid, "flashcard-sets"),
      (querySnapshot) => {
        this.flashcardSets = []; // clear array before pushing more info otherwise it renders double
        querySnapshot.forEach((doc) => {
          if (doc.data().fav) {
            this.flashcardSets.push({
              uid: doc.id,
              name: doc.data().name,
              fav: doc.data().fav,
            });
          }
        });
      }
    );
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
  padding: 7%;
  font-size: 1.8em;
}

.border {
  border: 10px solid #ffcdd6;
}
.cardTextSm {
  padding: 7%;
  font-size: 1.3em;
  color: #ffa2b3;
}
</style>
