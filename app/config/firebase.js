import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: "burger-builder-b9049.firebaseapp.com",
  databaseURL: "https://burger-builder-b9049-default-rtdb.firebaseio.com",
  projectId: "burger-builder-b9049",
  storageBucket: "burger-builder-b9049.appspot.com",
  messagingSenderId: "106975920097",
  appId: "1:106975920097:web:b94eb0459117ab137c1ca0",
  measurementId: "G-HC3XBP1D03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const schema = {
//   title: String,
//   location: String,
//   images: [String],
//   features: [String],
//   youtube: String,
//   location: String,
// };
