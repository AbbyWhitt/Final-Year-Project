<template>
  <v-card class="ma-5">
    <v-container>
      <v-card class="d-flex" flat rounded="0">
        <v-icon icon="mdi-cog" size="large" class="mt-2 mr-2"></v-icon>
        <v-card-title class="text-h5 ml-n3 font-weight-light">
          Welcome, {{store.state.user.displayName}}
        </v-card-title>
      </v-card>
    </v-container>
  </v-card>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
</script>

<style></style>
