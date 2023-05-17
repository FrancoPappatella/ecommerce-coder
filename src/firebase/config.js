// Import the functions you need from the SDKs you need

import 'firebase/firestore';
import firebase from "firebase/app";
//import { initializeApp}  from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBXcETDZbsj7jdEAzZ3fJIJ7MotAv5tk0",
  authDomain: "react-app-coffee.firebaseapp.com",
  projectId: "react-app-coffee",
  storageBucket: "react-app-coffee.appspot.com",
  messagingSenderId: "807849865916",
  appId: "1:807849865916:web:0b7613a9be92779e9cd6b9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);



export const getFirestore = () => {
    return firebase.firestore(app)
}