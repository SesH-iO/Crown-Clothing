import React from 'react';

import FormInput from '../../components/FormInput/form-input';
import CustomButton from '../../components/CustomButton/custom-button';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.scss';

class SignIn extends React.Component {
	state = {
		email: '',
		password: '',
	};

	handleSubmit = (e) => {
		e.preventDefault();

		this.setState({ email: '', password: '' });
	};

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email & password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						type='email'
						label='Email'
						value={this.state.email}
						onChange={this.handleChange}
						required
					/>
					<FormInput
						name='password'
						type='password'
						label='Password '
						value={this.state.password}
						handleChange={this.handleChange}
						required
					/>

					<div className='buttons'>
						<CustomButton type='submit'>SIGN IN</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							SIGN IN WITH GOOGLE
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

// * Check the Auth component in the pages folder
export default SignIn;
