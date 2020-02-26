import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


export var providerGoogle = new firebase.auth.GoogleAuthProvider();
export var providerFacebook = new firebase.auth.FacebookAuthProvider();