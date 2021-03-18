import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBF4L9cgUALk11VC2dX_n4ICVX-6uVqR2Q',
	authDomain: 'crwn-clothing-db-43d89.firebaseapp.com',
	projectId: 'crwn-clothing-db-43d89',
	storageBucket: 'crwn-clothing-db-43d89.appspot.com',
	messagingSenderId: '95639120634',
	appId: '1:95639120634:web:501934785a843b137bf743',
	measurementId: 'G-51QLEL2BZE',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// * Google Authentication for SignIn
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider); // * for the sign in Popup

export default firebase;
