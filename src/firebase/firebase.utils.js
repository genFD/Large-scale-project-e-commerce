import firebase from 'firebase/compat/app'; //pulling in the firebase utility library
import 'firebase/compat/firestore'; //importing the store
import 'firebase/compat/auth'; //importing auth for authentication

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

//Function that allows us to take that user auth that we got back from firebase and store inside of our database. we're making an API request so this is going to be an async code

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //first checking if we getting back a valid object(user)
  if (!userAuth) return;
  //if user (userAuth) the object) exist we can query inside our database to see if the user already exists we're using the special method doc and get to query our data base
  const userRef = store.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    //if there's no data we need to create a new slot for our new user
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(`Error creating user ${userAuth.uid} `, error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionref = store.collection(collectionKey);
  const batch = store.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionref.doc();
    batch.set(newDocRef, obj);
  });
  await batch.commit();
};

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

//setup our google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
//trigger the google pop-up whenever we use provider
provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
