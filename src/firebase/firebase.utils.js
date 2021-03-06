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

export const createUserProfileDocument =  async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const  { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
     
  return userRef;
  
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider .setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

