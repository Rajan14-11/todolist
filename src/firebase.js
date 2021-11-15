import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyCchmBtrttm5IRE5sgjNoYylVL41Wc5LQQ",
  authDomain: "to-do-list-a64ea.firebaseapp.com",
  projectId: "to-do-list-a64ea",
  storageBucket: "to-do-list-a64ea.appspot.com",
  messagingSenderId: "992347264122",
  appId: "1:992347264122:web:be9aa5bc12a811238197c3",
  measurementId: "G-JDMKQ1BF74",
});

const db = getFirestore(firebaseApp);

export { db };
