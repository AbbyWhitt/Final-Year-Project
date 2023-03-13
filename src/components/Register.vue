<template>
  <v-card class="h-screen">
    <v-card class="h-screen pa-16" color="#449682" flat rounded="1">
      <v-container>
        <v-row rows="1">
          <v-spacer></v-spacer>
        </v-row>
      </v-container>
      <!-- <h1> Create an Account </h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="register">Submit</button></p>
  <p><button @click="signInWithGoogle" type="submit">Log In with Google</button></p> -->

      <v-container>
        <v-row rows="2">
          <v-col md="4" offset-md="4" class="mt-auto">
            <v-card>
              <v-container>
                <div style="text-align: center">
                  <v-form @submit.prevent="register">
                    <h1>Create a StudyBuddy Account</h1>
                    <v-text-field
                      type="text"
                      label="Name"
                      placeholder="Charlie"
                      outlined
                      v-model="name"
                      variant="underlined"
                    ></v-text-field>

                    <v-text-field
                      type="email"
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

                    <v-checkbox
                      label="*Tick here to agree to the StudyBuddy T&Cs"
                      v-model="isTicked"
                    ></v-checkbox>
                    <div class="link">
                      You must be 18 or over to create a Study Buddy account.
                    </div>
                    <v-spacer />
                    <router-link class="link" to="/termsandconditions"
                      >Click here to view T&Cs</router-link
                    >

                    <p v-if="errorMsg">{{ errorMsg }}</p>
                    <div style="text-align: center">
                      <v-btn
                        :disabled="!isTicked"
                        class="btn my-3"
                        @click="register"
                        color="#449682"
                        elevation="3"
                        >Create Account
                      </v-btn>

                      <v-divider />

                      <router-link to="/" class="link">
                        <v-btn style="color: #3d8674" variant="plain"
                          >Back to Login</v-btn
                        >
                      </router-link>
                    </div>
                  </v-form>
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
import { db } from "@/main";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const email = ref("");
const password = ref("");
const router = useRouter();
const name = ref("");
const store = useStore();
const isTicked = ref(false);

const register = async () => {
  store.dispatch("register", {
    email: email.value,
    password: password.value,
    name: name.value,
  });
};

const signInWithGoogle = () => {};
</script>

<style scoped>
.btn {
  color: white !important;
}
.h-screen {
  background: radial-gradient(circle, #7bc3b2 15%, #58b39d 25%, #3d8674 83%);
  display: grid;
}
.link {
  text-decoration: none;
  color: #3d8674;
}
</style>
