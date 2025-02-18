// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  where,
  query,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore/lite";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

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

export const auth = getAuth();
// eslint-disable-next-line no-undef
export const ingresarCorreoContrasenha = (email, password) => // dos parámetros que van a cambiar
  signInWithEmailAndPassword(auth, email, password); //recibe al auth como primer parámetro, es algo estático
export const crearUsuario = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
  
export const salirSesion = ()=> signOut(auth);
  
export const ingresoBaseDatos = (nameColection, data) => {
  const collectionReferencia = collection(db, nameColection);
  const funcionAgregar = addDoc(collectionReferencia, data);
  return funcionAgregar;
};
export const getAllNotes = (nameColection, idUser) => {
  const colRef = query(
    collection(db, nameColection),
    where("creator", "==", idUser)
  );
  const notes = getDocs(colRef).then((docs) => {
    let arrayNotes = [];
    docs.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      arrayNotes.push({ ...doc.data(), id: doc.id });
    });
    return arrayNotes;
  });
  return notes;
};
export const deleteNote = (id) => deleteDoc(doc(db, "notas", id));
export const updateStateNote = (idNote) =>
  updateDoc(doc(db, "notas", idNote), { status: false });

export const updateNewNote = (idNote, newEditNotes) =>
  updateDoc(doc(getFirestore(), "notas", idNote), newEditNotes);

/*export const exitUser = (idUser) => {
  const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
};*/
