import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDch_TTLCEhpNKAK6J5FzDZ5xhLniSkylM",
  authDomain: "er-connect-33b50.firebaseapp.com",
  projectId: "er-connect-33b50",
  storageBucket: "er-connect-33b50.appspot.com",
  messagingSenderId: "295300485644",
  appId: "1:295300485644:web:062da4229a4be6088c5429",
  measurementId: "G-CWEF7X3Q2Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
