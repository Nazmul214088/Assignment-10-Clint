import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [signUpUser, setSignUpUser] = useState(null);

  //Create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Create user with google provider
  const googleProvider = new GoogleAuthProvider();
  const signUpWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //Sign In with Email and Password
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Sign out user
  const signOutUser = () => {
    return signOut(auth);
  };
  const authInfo = {
    user,
    setUser,
    signUpUser,
    setSignUpUser,
    createUser,
    signUpWithGoogle,
    signInWithEmail,
    signOutUser,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
