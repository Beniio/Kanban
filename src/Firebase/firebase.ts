import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { useEffect, useState, useCallback } from 'react';
// const firebaseConfig = require('../appSettings.json')
const firebaseConfig = {
  apiKey: "AIzaSyCmHZ6rDVuwsUOjMLbK0vpUAcp4V9zLmVs",
  authDomain: "fir-app-d5b32.firebaseapp.com",
  databaseURL: "https://fir-app-d5b32.firebaseio.com",
  projectId: "fir-app-d5b32",
  storageBucket: "fir-app-d5b32.appspot.com",
  messagingSenderId: "609590467362",
  appId: "1:609590467362:web:5c21e1b1fec24d4dbc237b",
  measurementId: "G-6XYCYJT2XY"
}
firebase.initializeApp(firebaseConfig)
const useFirebase = () =>{
  const [authUser, setAuthUser] = useState(firebase.auth().currentUser);
  const [auth, setAuth] = useState(firebase.auth());
  const [db, setDb] = useState(firebase.database());

  useEffect(()=>{
    const unsubscribe = firebase.auth()
      .onAuthStateChanged((user) => setAuthUser(user))
      return () => {unsubscribe()};
    // firebase.initializeApp(firebaseConfig);
    // setAuth(firebase.auth())
    // setDb(firebase.database())
  },[])

  const login = useCallback((email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password), []);

  const logout = useCallback(() => firebase.auth().signOut(), [])
  
  return { login, authUser, logout }

  const doCreateUserWithEmailAndPassword = (email: any, password: any) =>
    auth.createUserWithEmailAndPassword(email, password);

  const doSignInWithEmailAndPassword = (email: any, password: any) =>
    auth.signInWithEmailAndPassword(email, password);

  const doSignOut = () => 
    auth.signOut();

  const doPasswordReset = (email: any) => 
    auth.sendPasswordResetEmail(email);

  const doPasswordUpdate = (password: any) =>{
    if(auth.currentUser)
      auth.currentUser.updatePassword(password);
  }

  const user = (uid: any) =>
    db.ref(`users/${uid}`);

  const users = () => 
    db.ref('users');
}

export { useFirebase }