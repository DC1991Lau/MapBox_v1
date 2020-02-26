import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD2ozHxEvGTJIeQwkDmRR-wR9pkmtWZAtU",
  authDomain: "mapfinder-8fc9d.firebaseapp.com",
  databaseURL: "https://mapfinder-8fc9d.firebaseio.com",
  projectId: "mapfinder-8fc9d",
  storageBucket: "mapfinder-8fc9d.appspot.com",
  messagingSenderId: "739834553708",
  appId: "1:739834553708:web:85a6563e813549bba87f49",
  measurementId: "G-MT3FWYX03K"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export var providerGoogle = new firebase.auth.GoogleAuthProvider();
export var providerFacebook = new firebase.auth.FacebookAuthProvider();
export default app;
