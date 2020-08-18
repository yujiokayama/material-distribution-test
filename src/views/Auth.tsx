import React from "react";

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const Auth: React.FC = () => {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAuEToYiA0yxeQavBD-86k_tKuIwC9auUo",
    authDomain: "material-distribution-test.firebaseapp.com",
    databaseURL: "https://material-distribution-test.firebaseio.com",
    projectId: "material-distribution-test",
    storageBucket: "material-distribution-test.appspot.com",
    messagingSenderId: "826837474678",
    appId: "1:826837474678:web:dfd2abe74db5141e51ee57"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  return (
    <>
      <h1>認証画面</h1>
    </>
  );
};

export default Auth;
