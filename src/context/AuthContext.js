import React, { createContext, useState, useEffect } from "react";
import firebase from "firebase/app";
import app from "../firebase";
import { providerGoogle, providerFacebook } from "../authUtils";

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const [currentUser, setCurrentUser] = useState(null);
  const [provider, setProvider] = useState(null);
  const [erroCode, setErrorCode] = useState(null);
  const [token, setToken] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [credential, setCredential] = useState(null);
  const [email, setEmail] = useState(null);

  console.log(currentUser);

  const loginGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(providerGoogle)
      .then(function(result) {
        // // This gives you a Google Access Token. You can use it to access the Google API.
        setToken(result.credential.accessToken);
        console.log("Utilizador Entrou");
      })
      .catch(function(error) {
        // Handle Errors here.
        // setErrorCode(error.code);
        // setErrorMessage(error.message);
        // setEmail(error.email);
        // // The firebase.auth.AuthCredential type that was used.
        // setCredential(error.credential);
        console.log(error);
        // ...
      });
    return { token, erroCode, errorMessage, email, credential };
  };

  const loginFacebook = () => {
    firebase
      .auth()
      .signInWithPopup(providerFacebook)
      .then(function(result) {
        // // This gives you a Google Access Token. You can use it to access the Google API.
        setToken(result.credential.accessToken);
        console.log("Utilizador Entrou");
      })
      .catch(function(error) {
        // Handle Errors here.
        // setErrorCode(error.code);
        // setErrorMessage(error.message);
        // setEmail(error.email);
        // // The firebase.auth.AuthCredential type that was used.
        // setCredential(error.credential);
        console.log(error);
        // ...
      });

    return { token, erroCode, errorMessage, email, credential };
  };

  const logout = () => {
    app.auth().signOut();
    console.log("Utilizador Saiu");
  };

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, loginGoogle, loginFacebook, logout, setProvider }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
