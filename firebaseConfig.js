import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBVfhmKS7xY2b2PRc7mIqsE-wK9yM6d0xQ",
  authDomain: "my-portfolio-4f616.firebaseapp.com",
  projectId: "my-portfolio-4f616",
  storageBucket: "my-portfolio-4f616.appspot.com",
  messagingSenderId: "357464885376",
  appId: "1:357464885376:web:3613df43acd49cbfc17e65",
  measurementId: "G-YZ534DD1EH",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, db, storage };
