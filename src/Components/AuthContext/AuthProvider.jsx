import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [signUpUser, setSignUpUser] = useState(null);
  const [loading, setLoading] = useState(true); // Must start as true

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
  useEffect(() => {
    // Firebase observer for login/logout changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    loading,
    setLoading,
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
