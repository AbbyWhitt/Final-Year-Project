<template>
  <h1> Create an Account </h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="register">Submit</button></p>
  <p><button @click="signInWithGoogle" type="submit">Log In with Google</button></p>

</template>

<script setup>
import {ref} from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const router = useRouter()

const register = () => {
  const auth = getAuth() //This allows the user sigin to be cached in local storage to stay logged in even in new tabs
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Success Registration!");

      console.log(auth.currentUser) //this is for cached signin 

      router.push('/') //once logged in this sends to home
    })
    .catch((error => {
      console.log(error.code);
      alert(error.message);
    }))
};

const signInWithGoogle = () => {

}
</script>

<style>

</style>