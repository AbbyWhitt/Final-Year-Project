import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADsbnxx07GauNIzs36bDYibnz2PAbRjWw",
  authDomain: "ci601fyp.firebaseapp.com",
  projectId: "ci601fyp",
  storageBucket: "ci601fyp.appspot.com",
  messagingSenderId: "767724466178",
  appId: "1:767724466178:web:8a27947ae99261742a371b",
  measurementId: "G-LF6XYQQ6YR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



loadFonts();

createApp(App).use(router).use(vuetify).mount("#app");
