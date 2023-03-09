import { createStore } from "vuex";
import router from "../router";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = null;
    },
  },
  actions: {
    async login({ commit }, userDetails) {
      const { email, password } = userDetails;
      const auth = getAuth();
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case "auth/invalid-email":
            alert("Invalid Email Address");
            break;
          case "auth/user-not-found":
            alert("An Account with this email was not found");
            break;
          case "auth/wrong-password":
            alert("Incorrect password");
            break;
          default:
            alert("Email or Password was incorrect");
            break;
        }
        return;
      }
      commit("SET_USER", auth.currentUser);
      router.push("/Dashboard");
    },

    async logout({ commit }) {
      await signOut(getAuth());
      commit("CLEAR_USER");
      router.push("/");
    },

    async register({ commit }, userDetails) {
      const { email, password } = userDetails;
      const auth = getAuth();
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case "auth/invalid-email":
            alert("Invalid Email Address");
            break;
          case "auth/wrong-password":
            alert("Password must have at least 6 characters");
            break;
          case "auth/uid-already-exists":
            alert("A User with this email already exsits");
            break;
          default:
            alert("Unable to create user, please check Email is vaild");
            break;
        }
        return;
      }
      commit("SET_USER", auth.currentUser);
      router.push("/Dashboard");
    },

    fetchUser({ commit }) {
      getAuth().onAuthStateChanged(async (user) => {
        if (user) {
          commit("SET_USER", user);
          if (router.isReady() && router.currentRoute.value.path === "/") {
            router.push("/Dashboard");
          }
        } else {
          commit("CLEAR_USER");
          router.push("/");
        }
      });
    },
    async resetPassword({ commit }, email) {
      const auth = getAuth();
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("Email Sent!");
        })
        .catch((error) => {
          alert(error.code + ": " + error.message);
        });
    },
  },
});
