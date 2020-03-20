import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Firebase = {
  // auth
  loginWithEmail: (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  loginWithSocialNetwork: credential => {
    return firebase.auth().signInWithCredential(credential);
  },
  getFacebookCredentials: token => {
    return firebase.auth.FacebookAuthProvider.credential(token);
  },
  getGoogleCredentials: ({ idToken, accessToken }) => {
    return firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
  },
  signupWithEmail: (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },
  signOut: () => {
    return firebase.auth().signOut();
  },
  getCurrentUser: () => {
    return firebase.auth().currentUser;
  },
  checkUserAuth: user => {
    return firebase.auth().onAuthStateChanged(user);
  },
  passwordReset: email => {
    return firebase.auth().sendPasswordResetEmail(email);
  },
  // firestore
  createNewUser: userData => {
    return firebase
      .firestore()
      .collection("users")
      .doc(`${userData.uid}`)
      .set(userData, { merge: true });
  },

  updateUser(id, userData) {
    return firebase
      .firestore()
      .collection("users")
      .doc(`${id}`)
      .set(userData, { merge: true });
  },

  getUser(id) {
    return firebase
      .firestore()
      .collection("users")
      .doc(`${id}`)
      .get()
      .then(function(doc) {
        if (doc.exists) {
          return doc.data();
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  }
};

export default Firebase;
