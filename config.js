import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyCOzc4WI57TNQxADM_xj0fmrv4SM2yUQT4",
    authDomain: "project71-9a94f.firebaseapp.com",
    databaseURL:"https://console.firebase.google.com/u/1/project/project71-9a94f/firestore/data",
    projectId: "project71-9a94f",
    storageBucket: "project71-9a94f.appspot.com",
    messagingSenderId: "1069611899552",
    appId: "1:1069611899552:web:000f1bd6c83208b95d47c5"
  };
  firebase.initializeApp(firebaseConfig);


  export default firebase.firestore();