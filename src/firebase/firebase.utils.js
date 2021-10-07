import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCy-u42RSI_Zn4zWvk5EzgfFY0ADnJPqVo',

  authDomain: 'large-scale-e-com.firebaseapp.com',

  projectId: 'large-scale-e-com',

  storageBucket: 'large-scale-e-com.appspot.com',

  messagingSenderId: '3280476123',

  appId: '1:3280476123:web:0aade6d41166a476c1b9fe',
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const store = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// const authGoogle = getAuth();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
