import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBHyKgvBvEESqZqctcwDscd5PtbNPoDHE0",
  authDomain: "crwn-db-b8d54.firebaseapp.com",
  databaseURL: "https://crwn-db-b8d54.firebaseio.com",
  projectId: "crwn-db-b8d54",
  storageBucket: "crwn-db-b8d54.appspot.com",
  messagingSenderId: "296170122487",
  appId: "1:296170122487:web:7ed8fe2eb579055e96f7f2",
  measurementId: "G-D48L2BPGRY"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;