import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyC_A_awbd6D-Z_IaRbzxVWupwgG9fGytKQ",
  authDomain: "react-redux-app-617cc.firebaseapp.com",
  projectId: "react-redux-app-617cc",
  storageBucket: "react-redux-app-617cc.appspot.com",
  messagingSenderId: "859556216820",
  appId: "1:859556216820:web:f98ad64d0d34c4fc7483a1"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
