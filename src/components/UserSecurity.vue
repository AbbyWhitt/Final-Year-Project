<template>
  <v-card class="ma-5">
    <v-container>
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
        <v-card-title class="font-weight-bold">Delete Account</v-card-title>
        Delete Account:
        <v-spacer />
        <v-btn class="mt-3" type="button" color="error"
          >Delete Account
          <v-dialog v-model="dialog" activator="parent">
            <v-card class="w-50 center">
              <v-card-text>
                Doing this will permanently delete all data connected with this
                account. ALL DATA WILL BE LOST. Your account will no longer be
                active and no data will be stored related to this account. You
                will be asked to log in again before you can continue.
              </v-card-text>
              <v-card-actions>
                <v-btn color="error">Confirm</v-btn>
                <v-btn color="449682" @click="dialog = false">Cancel</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-btn>
      </v-sheet>
    </v-container>
  </v-card>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const password = ref("");
const emailForPassSet = ref("");
const settingPassword = ref(false);

const setPassword = () => {
  store.dispatch("setPassword", emailForPassSet.value);
  emailForPassSet.value = "";
  settingPassword.value = false;
};

export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style></style>
