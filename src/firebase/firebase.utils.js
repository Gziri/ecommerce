import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const confing = {
  apiKey: "AIzaSyAhKJk9Fz2-qsTr1sSdBUasdc6oDQqwv5Q",
  authDomain: "ecommerce-1bb16.firebaseapp.com",
  projectId: "ecommerce-1bb16",
  storageBucket: "ecommerce-1bb16.appspot.com",
  messagingSenderId: "695310289508",
  appId: "1:695310289508:web:11643f034d6bf40a5ead71",
};

firebase.initializeApp(confing);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
