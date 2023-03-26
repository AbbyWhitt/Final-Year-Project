<template>
  <v-card class="ma-5">
    <v-sheet class="ma-2">
      <v-card class="d-flex" flat rounded="0">
        <v-icon
          icon="mdi-shield-account"
          size="large"
          class="mt-2 mr-2"
        ></v-icon>
        <v-card-title class="text-h5 ml-n3 font-weight-light">
          User Security
        </v-card-title>
      </v-card>
      <v-sheet class="pa-4">
        <v-card-title class="font-weight-bold"> Change Password </v-card-title>
        Enter New Password:
        <v-text-field
          label="New Password"
          outlined
          v-model="emailForPassSet"
          type="password"
        ></v-text-field>
        <v-btn type="button" @click="setPassword">Re-set Password</v-btn>
      </v-sheet>
      <!-- New Sheet -->
      <v-sheet class="pa-4">
        <v-card-title class="font-weight-bold">Delete User Account</v-card-title>
        <v-spacer />
        <v-dialog v-model="dialog" persistent>
          <template v-slot:activator="{ props }">
            <v-btn color="error" v-bind="props">Delete Account </v-btn>
          </template>
          <v-card class="w-50 center">
            <v-container>
              <v-form>
                This action will permanently delete the user account. ALL DATA WILL BE LOST.
                In order to delete account please log in again with user
                details:
                <v-text-field
                  label="Email"
                  placeholder="example@email.com"
                  outlined
                  v-model="email"
                  variant="underlined"
                ></v-text-field>

                <v-text-field
                  label="Password"
                  outlined
                  v-model="password"
                  variant="underlined"
                  type="password"
                ></v-text-field>
                <v-btn
                  color="error"
                  variant="flat"
                  style="font-size: 1.1rem"
                  @click="delUser()"
                  >Confirm Deletion</v-btn
                >
                <v-btn class="ml-3" color="#449682" @click="dialog = false">Cancel</v-btn>
              </v-form>
            </v-container>
          </v-card>
        </v-dialog>
      </v-sheet>
    </v-sheet>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const email = ref("");
const password = ref("");
const emailForPassSet = ref("");
const settingPassword = ref(false);
const dialog = ref(false);

const setPassword = () => {
  store.dispatch("setPassword", emailForPassSet.value);
  emailForPassSet.value = "";
  settingPassword.value = false;
};

const delUser = () => {
  store.dispatch("delUser", { email: email.value, password: password.value });
  email.value = "";
  password.value = "";
};
</script>

<style></style>
