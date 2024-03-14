import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6kgh8megAxrTEUxZ2e3bfRCxSni2oB-c",
  authDomain: "scissors-authentication.firebaseapp.com",
  projectId: "scissors-authentication",
  storageBucket: "scissors-authentication.appspot.com",
  messagingSenderId: "4838137490",
  appId: "1:4838137490:web:28d16be02e57f68c2fd04b",
  measurementId: "G-JGJXEDF483",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
