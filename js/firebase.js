// firebase.js

// Importation du SDK Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Configuration Firebase
const firebaseConfig = {

  apiKey: "AIzaSyC_xxglI0cCKMSJ5KUPTYTLeoWU-vKmzo8",

  authDomain: "sicobd-39801.firebaseapp.com",

  projectId: "sicobd-39801",

  storageBucket: "sicobd-39801.firebasestorage.app",

  messagingSenderId: "385616901020",

  appId: "1:385616901020:web:75cea9a131b7028331ce59",

  measurementId: "G-5TMT1GWNW7"

};



// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Exportation des services Firebase
export { db, auth };