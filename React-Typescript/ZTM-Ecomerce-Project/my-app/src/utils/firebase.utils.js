import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTI-wrM8Q0z6LAhX6KMpmEPH35UZjw6dE",
  authDomain: "crwn-clothing-db-98e3e.firebaseapp.com",
  projectId: "crwn-clothing-db-98e3e",
  storageBucket: "crwn-clothing-db-98e3e.appspot.com",
  messagingSenderId: "411198961864",
  appId: "1:411198961864:web:8587c45fa3da07427dcdfd",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  // if user  data doesnt exists
  if (!userSnapshot.exists()) {
    // create / set docment with the dara from userAuth in my collection
    const { displayName, email } = userAuth;
    const createDat = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createDat,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  // if user  data  exists

  return userDocRef;
};
