import { UserActionTypes as actionTypes } from './user.types';

// * Action creator function.
export const setCurrentUser = (user) => ({
	type: actionTypes.SET_CURRENT_USER,
	payload: user,
});
