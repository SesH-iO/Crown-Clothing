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

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, addtionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	// console.log(!snapShot.exists);

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

export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {
	// * we create the collection using the collection Key
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();
	objectsToAdd.forEach((obj) => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map((doc) => {
		const { title, items } = doc.data();

		return {
			routerName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items,
		};
	});

	// * We first pass in out initial object(empty)
	// * The Initial object goes into first new collection(first element) and it sets the first value equal to title(in Lower case)
	// * Eg: Our first value is 'hats' thats equal to the hats collection(obejct of hats collections) and returns that object and goes into second object
	// * and this repeats untill its has loop through all the array of our collections
	return transformedCollection.reduce((accumalator, collection) => {
		accumalator[collection.title.toLowerCase()] = collection;
		return accumalator;
	}, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// * Google Authentication for SignIn
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider); // * for the sign in Popup

export default firebase;
