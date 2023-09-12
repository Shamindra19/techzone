import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHD3W3pjBRxeab5M-nWytGUG0TweX4BoY",
  authDomain: "clone-11a84.firebaseapp.com",
  projectId: "clone-11a84",
  storageBucket: "clone-11a84.appspot.com",
  messagingSenderId: "127054846670",
  appId: "1:127054846670:web:43275c2fb57bcba1bf8e9f",
  measurementId: "G-D7XT4M153P"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };