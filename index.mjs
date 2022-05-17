// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP2jT3SYXl4np8qPgN7po3SF1bAdaPxxE",
  authDomain: "mil22-team-e.firebaseapp.com",
  projectId: "mil22-team-e",
  storageBucket: "mil22-team-e.appspot.com",
  messagingSenderId: "97574635209",
  appId: "1:97574635209:web:39de445e476d3b8d636f18",
  measurementId: "G-D7035J4N5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ref = collection(db, 'highest');
const q = query(collection(db, 'highest'), orderBy('score'));

const docSnap = await getDocs(q)
console.log(docSnap)