
import { getFirestore } from 'firebase/firestore'; 
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth  } from 'firebase/auth'



// const firebaseConfig = {

//   apiKey: "AIzaSyCajGIpuz-1gdTkalzGM3iTLaG0-wunBYM",
//   authDomain: "swe-hostelandcomplaint.firebaseapp.com",
//   projectId: "swe-hostelandcomplaint",
//   storageBucket: "swe-hostelandcomplaint.appspot.com",
//   messagingSenderId: "402049354453",
//   appId: "1:402049354453:web:b94ef39484a64d783e305c",
//   measurementId: "G-TBQG0JTGJ5"

// };





// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfcC4In7z-Zorb8sBEL1FMl3o45033MwM",
  authDomain: "development-21873.firebaseapp.com",
  projectId: "development-21873",
  storageBucket: "development-21873.appspot.com",
  messagingSenderId: "36471041007",
  appId: "1:36471041007:web:55a1a6c4a6fc563eb6241a"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
 const db = getFirestore(app);
 const provider = new GoogleAuthProvider();
export {provider,auth,db}