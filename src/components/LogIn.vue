<template>
  <v-card class="h-screen">
    <v-card class="h-screen pa-16" color="#449682" flat rounded="1" border="">
      <v-container>
        <v-row rows="1">
          <v-spacer></v-spacer>
        </v-row>
      </v-container>

      <v-container>
        <v-row rows="2">
          <v-col md="4" offset-md="4" class="mt-auto">
            <v-card class="pa-10">
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
              <div style="text-align: center">
                <v-btn
                  class="btn my-3"
                  @click="login"
                  color="#449682"
                  elevation="3"
                  >Login</v-btn
                >

                <v-divider></v-divider>

                <v-btn
                  class="my-3"
                  prepend-icon="mdi-google"
                  @click="signInWithGoogle"
                  elevation="3"
                  >Login with Google</v-btn
                >

                <v-divider />

                <router-link to="/CreateAccount">
                  <v-btn
                    class="create my-3"
                    prepend-icon="mdi-account-box"
                    elevation="3"
                    >Create an Account</v-btn
                  >
                </router-link>

                <!-- TODO: Add a forgotten password link  -->
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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const errorMsg = ref();
const router = useRouter();

const login = () => {
  const auth = getAuth(); //This allows the user sigin to be cached in local storage to stay logged in even in new tabs
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully Signed In!");

      //   console.log(auth.currentUser) //this is for cached signin

      router.push("/Dashboard"); //once logged in this sends to home
    })

    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errorMsg.value = "Invalid Email Address";
          break;
        case "auth/user-not-found":
          errorMsg.value = "An Account with this email was not found";
          break;
        case "auth/wrong-password":
          errorMsg.value = "Incorrect password";
          break;
        default:
          errorMsg.value = "Email or Password was incorrect";
          break;
          
      }
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
.create {
  text-decoration: none;
  color: #3d8674;
}
</style>
