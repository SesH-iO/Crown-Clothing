import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDyiTudcByQiwWFsxt6OFapMr4eWj-EJtQ',
	authDomain: 'crwn-db-9a74b.firebaseapp.com',
	projectId: 'crwn-db-9a74b',
	storageBucket: 'crwn-db-9a74b.appspot.com',
	messagingSenderId: '451657259133',
	appId: '1:451657259133:web:110cf7e4436142d0c9b914',
	measurementId: 'G-JP9TEPTSHS',
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...addtionalData,
			});
		} catch (error) {
			console.error('Error creating the user', error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// * Google Authentication for SignIn
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider); // * for the sign in Popup

export default firebase;
