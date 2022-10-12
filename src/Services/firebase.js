import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA3nIeOYgJOd0MdWb1ToXegPhS9B2cqmzM",
  authDomain: "tarift-fc9a8.firebaseapp.com",
  databaseURL: "https://tarift-fc9a8.firebaseio.com",
  projectId: "tarift-fc9a8",
  storageBucket: "tarift-fc9a8.appspot.com",
  messagingSenderId: "427732268435",
  appId: "1:427732268435:web:a62552475cd21a2012a466",
  measurementId: "G-4GZT9J8FB5"
};

firebase.initializeApp(firebaseConfig);

const projectStore = firebase.firestore();

export { projectStore}