import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA24SC9vn4RCjUbT6brF_K91Q_XlgSoJ80",
    authDomain: "album-6e606.firebaseapp.com",
    databaseURL: "https://album-6e606-default-rtdb.firebaseio.com",
    projectId: "album-6e606",
    storageBucket: "album-6e606.appspot.com",
    messagingSenderId: "41087528503",
    appId: "1:41087528503:web:4eade576043ef40a0159b2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const p_storage = firebase.storage();

const p_firestore = firebase.firestore();

const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {
    p_storage , p_firestore , timeStamp
};