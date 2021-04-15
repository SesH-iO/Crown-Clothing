import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
	collections: null,
	isFetching: false,
	errMsg: undefined,
	loading: true,
};

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ShopActionTypes.FETCH_COLLECTION_START:
			return {
				...state,
				isFetching: true,
				loading: false,
			};

		case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
			return {
				...state,
				collections: action.payload,
				isFetching: false,
			};

		case ShopActionTypes.FETCH_COLLECTION_FAILURE:
			return {
				...state,
				isFetching: true,
				errMsg: action.payload,
			};

		default:
			return state;
	}
};

export default shopReducer;
