// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCkRarcAJMtwCNBWzWhRHNfAWC6yXgzYRU",

  authDomain: "quick-notes-fa186.firebaseapp.com",

  projectId: "quick-notes-fa186",

  storageBucket: "quick-notes-fa186.appspot.com",

  messagingSenderId: "721201933757",

  appId: "1:721201933757:web:154bc76040cbdf497e76d4",

  measurementId: "G-W1Y1Z5DKB8",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
// eslint-disable-next-line no-unused-vars
const db = getFirestore(app);

// Get a list of cities from your database
// eslint-disable-next-line no-unused-vars
async function getCities(db) {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}

const auth = getAuth();
// eslint-disable-next-line no-undef
export const ingresarCorreoContrasenha= (email, password) => signInWithEmailAndPassword(auth, email, password)
export const crearUsuario=(email,password)=>createUserWithEmailAndPassword(auth,email,password)
