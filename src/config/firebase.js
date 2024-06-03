
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAQa-ljwZGQDgFrVj0iYgB3sCoY14XRKoM",
  authDomain: "awesomeartanddecor.firebaseapp.com",
  projectId: "awesomeartanddecor",
  storageBucket: "awesomeartanddecor.appspot.com",
  messagingSenderId: "751242020162",
  appId: "1:751242020162:web:e2ffd11d8ba075dfa874db",
  measurementId: "G-Z8MKHCTC4F"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);