import ShopActionTypes from './shop.types';

import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';

export const fetchCollectionStart = () => ({
	type: ShopActionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = (collectionMap) => ({
	type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
	payload: collectionMap,
});

export const fetchCollectionFailure = (errMsg) => ({
	type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
	payload: errMsg,
});

export const fetchCollectionStartAsync = () => {
	return (dispatch) => {
		// * 'collections' is name we provided in our firestore
		const collectionRef = firestore.collection('collections');
		dispatch(fetchCollectionStart());

		collectionRef
			.get()
			.then((snapshop) => {
				const collectionMap = convertCollectionsSnapshotToMap(snapshop);
				dispatch(fetchCollectionSuccess(collectionMap));
			})
			.catch((err) => dispatch(fetchCollectionFailure(err.message)));
	};
};
