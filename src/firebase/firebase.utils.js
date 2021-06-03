import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDCeVW52rrcBh408rbErzrAmt7mI8tiT6E",
    authDomain: "crown-db-6569a.firebaseapp.com",
    projectId: "crown-db-6569a",
    storageBucket: "crown-db-6569a.appspot.com",
    messagingSenderId: "813359454987",
    appId: "1:813359454987:web:96e73b49598c7b1b05200e",
    measurementId: "G-KQCLD2WV35"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
