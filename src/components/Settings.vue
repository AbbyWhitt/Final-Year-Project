<template>
  <v-card class="ma-5">
    <v-container>
      <v-card class="d-flex" flat rounded="0">
        <v-icon icon="mdi-cog" size="large" class="mt-2 mr-2"></v-icon>
        <v-card-title class="text-h5 ml-n3 font-weight-light">
          Welcome, {{ store.state.user.displayName }}
        </v-card-title>
      </v-card>
            <v-divider thickness="2"></v-divider>
        <v-sheet class="ma-3">
        <v-card-text>
          This is where you can find the settings for your Study Buddy account!
          Below is some contact information for the developers of this
          application. If you want to request the data we hold on you, or have
          any other questions, please contact us using the details below. 
          
          <v-spacer/>
          Email:
          a.whitwham1@uni.brighton.ac.uk
        </v-card-text>
        </v-sheet>
    </v-container>
  </v-card>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
</script>

<style></style>
