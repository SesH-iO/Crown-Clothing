import { UserActionTypes as actionTypes } from './user.types';

const INITIAL_STATE = {
	currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};

		default:
			return state;
	}
};

export default userReducer;
