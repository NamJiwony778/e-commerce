import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAV6D11G4UdSc1jnhRcjY3QQhiv6GuaSFw",
    authDomain: "crwn-db-da2b7.firebaseapp.com",
    projectId: "crwn-db-da2b7",
    storageBucket: "crwn-db-da2b7.appspot.com",
    messagingSenderId: "820847316360",
    appId: "1:820847316360:web:9ce5d98ca7ef310cc87e3d",
    measurementId: "G-V9W7XKFVZZ"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider .setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

