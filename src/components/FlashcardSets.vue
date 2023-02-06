<template>
  <v-card class="ma-5">
     <v-container>
      <v-row>
        <v-col cols="8">
          <v-card class="d-flex" flat rounded="0">
            <v-icon
              icon="mdi-card-text"
              size="large"
              class="pa-6"
            ></v-icon>
            <v-card-title class="text-h5 ml-n3"> FlashcardSets </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="2">
          <v-btn
                rounded="lg"
                class="mt-1 text"
                color="#449682"
              >
                Create a Flashcard Set
              </v-btn>
        </v-col>
      </v-row>
     </v-container>

    <v-container>
      <v-row>
        <v-col 
        v-for="n in 12"
        :key="n"
        cols="12"
        sm="3" >

        <v-card class="pa-5 ma-3"> 
          <v-card-title class="pa-15 text-center">
            testing 
          </v-card-title>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "FlashcardSets",
};
</script>

<style></style>
