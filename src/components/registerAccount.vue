<template>
  <v-card class="h-screen">
    <v-card class="h-screen pa-16" color="#449682" flat rounded="1" border="">
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
            <v-card class="pa-10">
              <h1>Create a StudyBuddy Account</h1>
              <v-text-field
                type="text"
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

              <v-checkbox label="*Tick here to agree to the StudyBuddy T&Cs"></v-checkbox>  <!-- TODO: Make T&Cs page and link it back here and make create button disabled until ticked.  -->

              <p v-if="errorMsg">{{ errorMsg }}</p>
              <div style="text-align: center">
                <v-btn
                  class="btn my-3"
                  @click="register"
                  color="#449682"
                  elevation="3"
                  >Create Account</v-btn
                >

                <v-divider />

                <v-btn
                  class="my-3"
                  prepend-icon="mdi-google"
                  @click="signInWithGoogle"
                  elevation="3"
                  type="submit"
                  >Login with Google</v-btn
                >

                  <v-divider />

                <router-link to="/">
                 <v-btn style="color: #3d8674;" variant="plain">Back to Login</v-btn>
                </router-link>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
  const auth = getAuth(); //This allows the user sigin to be cached in local storage to stay logged in even in new tabs
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Success Registration!");

      console.log(auth.currentUser); //this is for cached signin

      router.push("/Dashboard"); //once logged in this sends to home
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
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
</style>
