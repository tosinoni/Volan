import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";
import { InventoryFirebaseFunctions } from "./inventory";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

const getCurrentUser = () => {
  return auth.currentUser;
};

const getUser = (id) => {
  return db
    .collection("users")
    .doc(`${id}`)
    .get()
    .then(function (doc) {
      if (doc.exists) {
        return doc.data();
      }
    })
    .catch(function (error) {
      console.log("Error getting document:", error);
    });
};

const Firebase = {
  // auth
  loginWithEmail: (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  },
  loginWithSocialNetwork: (credential) => {
    return auth.signInWithCredential(credential);
  },
  getFacebookCredentials: (token) => {
    return firebase.auth.FacebookAuthProvider.credential(token);
  },
  getGoogleCredentials: ({ idToken, accessToken }) => {
    return firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
  },
  signupWithEmail: (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  },
  signOut: () => {
    return auth.signOut();
  },
  getCurrentUser,
  getLoggedInUserObj: async () => {
    const currentUser = await getCurrentUser();
    return getUser(currentUser.uid);
  },
  checkUserAuth: (user) => {
    return auth.onAuthStateChanged(user);
  },
  passwordReset: (email) => {
    return auth.sendPasswordResetEmail(email);
  },
  // firestore
  createNewUser: (userData) => {
    return db
      .collection("users")
      .doc(`${userData.uid}`)
      .set(userData, { merge: true });
  },

  updateUser(id, userData) {
    return db.collection("users").doc(`${id}`).set(userData, { merge: true });
  },

  getUser,
  ...InventoryFirebaseFunctions(db),
};

export default Firebase;
