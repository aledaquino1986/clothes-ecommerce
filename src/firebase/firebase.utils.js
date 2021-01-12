import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD-VSxJXYc5GWa5yfyjwinENudp2YXBxAM",
  authDomain: "ecommerce-aac3f.firebaseapp.com",
  projectId: "ecommerce-aac3f",
  storageBucket: "ecommerce-aac3f.appspot.com",
  messagingSenderId: "260244451716",
  appId: "1:260244451716:web:a1269baf091aefb9e2add1",
  measurementId: "G-RJJZFG831S"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
