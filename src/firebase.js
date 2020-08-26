import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBe0WXZPlNI-rclWljzcZHNwdVkmazE3r4",
  authDomain: "tik-tok-clone-c6b6b.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-c6b6b.firebaseio.com",
  projectId: "tik-tok-clone-c6b6b",
  storageBucket: "tik-tok-clone-c6b6b.appspot.com",
  messagingSenderId: "356128531626",
  appId: "1:356128531626:web:f9b34d35cf5b8bc0d81cd3",
  measurementId: "G-MEKMB84J8W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;