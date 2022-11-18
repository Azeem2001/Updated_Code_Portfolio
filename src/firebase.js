import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { doc, setDoc, getDoc, addDoc, getDocs, getFirestore, arrayRemove,query, arrayUnion,where, updateDoc, onSnapshot,collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAD7NhvOoo168OrZjN213h_4Xc-yG_ZygA",
  authDomain: "azeem-portfolio.firebaseapp.com",
  projectId: "azeem-portfolio",
  storageBucket: "azeem-portfolio.appspot.com",
  messagingSenderId: "565965916297",
  appId: "1:565965916297:web:6471e1d65fa7fb0f451e58",
  measurementId: "G-MKMBLE3KQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {
  doc,
  setDoc,
  getDoc,
  getDocs,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  auth,
  db,
  query,
  where,
  arrayRemove, arrayUnion, updateDoc, onSnapshot, onAuthStateChanged,
  addDoc,collection
};
