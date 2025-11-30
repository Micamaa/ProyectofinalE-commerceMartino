
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA11_LS3qc0pg_1gJeMaokotfIELdaTSvs",
  authDomain: "lo-de-vivi-124bc.firebaseapp.com",
  projectId: "lo-de-vivi-124bc",
  storageBucket: "lo-de-vivi-124bc.firebasestorage.app",
  messagingSenderId: "211011568527",
  appId: "1:211011568527:web:f506a1a69d7aaa6aa101fa"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
