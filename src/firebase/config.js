import firebase from "firebase/app";
// Required for side-effects
require("firebase/firestore");
require("firebase/storage");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLRDjsIepwJSCis5vYjHhP8rQiwBrWi70",
  authDomain: "ilse-gallery.firebaseapp.com",
  projectId: "ilse-gallery",
  storageBucket: "ilse-gallery.appspot.com",
  messagingSenderId: "307534131641",
  appId: "1:307534131641:web:769be9047c3d4efdcd0668"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timestamp };
