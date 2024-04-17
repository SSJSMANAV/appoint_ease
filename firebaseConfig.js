import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBVfhmKS7xY2b2PRc7mIqsE-wK9yM6d0xQ",
  authDomain: "my-portfolio-4f616.firebaseapp.com",
  projectId: "my-portfolio-4f616",
  storageBucket: "my-portfolio-4f616.appspot.com",
  messagingSenderId: "357464885376",
  appId: "1:357464885376:web:3613df43acd49cbfc17e65",
  measurementId: "G-YZ534DD1EH",
};

const app = initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
