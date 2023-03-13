<template>
  <v-card class="h-screen">
    <v-card class="h-screen" color="#449682" flat rounded="1">
      <v-container>
        <v-row rows="1">
          <v-spacer></v-spacer>
        </v-row>
      </v-container>

      <v-container>
        <v-row rows="2">
          <v-col md="4" offset-md="4" class="mt-auto">
            <v-card>
              <v-container>
                <div style="text-align: center">
                  <v-form @submit.prevent="login">
                    <h1>Sign Into StudyBuddy</h1>
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

                    <p v-if="errorMsg">{{ errorMsg }}</p>

                    <v-btn
                      class="btn my-3"
                      color="#449682"
                      elevation="3"
                      type='submit'
                      >Login</v-btn
                    >
                  </v-form>
                  <v-divider></v-divider>

                  <v-btn
                    class="my-3"
                    prepend-icon="mdi-lock-reset"
                    @click="resettingPassword = true"
                    elevation="3"
                    >Forgotten Password?</v-btn
                  >

                  <div v-if="resettingPassword">
                    Please enter the email used for the account.
                    <v-text-field
                      label="Email"
                      variant="underlined"
                      type="email"
                      v-model="emailForPassReset"
                    >
                    </v-text-field>
                    <v-btn type="button" @click="resetPassword"
                      >Send Reset Email</v-btn
                    >
                  </div>

                  <v-divider> </v-divider>

                  <router-link to="/CreateAccount" class="title">
                    <v-btn
                      class="create my-3"
                      prepend-icon="mdi-account-box"
                      elevation="3"
                      >Create an Account</v-btn
                    >
                  </router-link>
                </div>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const email = ref("");
const password = ref("");
const errorMsg = ref();
const emailForPassReset = ref("");
const resettingPassword = ref(false);
const router = useRouter();
const store = useStore();

const login = () => {
  store.dispatch("login", { email: email.value, password: password.value });
};

const resetPassword = () => {
  store.dispatch("resetPassword", emailForPassReset.value);
  emailForPassReset.value = "";
  resettingPassword.value = false;
};
</script>

<style scoped>
.btn {
  color: white !important;
}
.h-screen {
  background: radial-gradient(circle, #7bc3b2 15%, #58b39d 25%, #3d8674 83%);
  display: grid;
}
.create {
  text-decoration: none;
  color: #3d8674;
}
</style>
