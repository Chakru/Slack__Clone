import { getDefaultNormalizer } from '@testing-library/react';
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAKNM42bmCY-5nkPar3hIRVdLHHMLuhxG4',
  authDomain: 'cloned-slack.firebaseapp.com',
  databaseURL: 'https://cloned-slack.firebaseio.com',
  projectId: 'cloned-slack',
  storageBucket: 'cloned-slack.appspot.com',
  messagingSenderId: '672005724778',
  appId: '1:672005724778:web:06b6d8ac035900c3d9c813',
  measurementId: 'G-2SCZKVWY1Z',
};

//Connect frontend to backend
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Access to the database
const db = firebaseApp.firestore();

//Authentication module
const auth = firebase.auth();

//Provider for providing Google Services
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
