import React from 'react';

import SignIn from '../../containers/SignIn/sign-in';
import SignUp from '../../containers/SignUp/sign-up';

import './auth.scss';

const Auth = () => {
	return (
		<div className='Auhtentication'>
			<SignIn />
			<SignUp />
		</div>
	);
};

export default Auth;
