import React from 'react';

import FormInput from '../../components/FormInput/form-input';
import CustomButton from '../../components/CustomButton/custom-button';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.scss';

class SignUp extends React.Component {
	state = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	};

	handleSubmit = async (e) => {
		e.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert(`Passwords Don't Match`);
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, { displayName });
			// * to clear our forms
			this.setState({ displayName: '', email: '', password: '', confirmPassword: '' });
		} catch (err) {
			console.error(err);
		}
	};

	handleChange = (e) => {
		const { name, value } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className='sign-up'>
				<h2 className='title'>I do not have a account</h2>
				<span>Sign up with your email & password</span>
				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						onChange={this.handleChange}
						label='Name'
						required
					/>
					<FormInput
						type='email'
						name='email'
						value={email}
						onChange={this.handleChange}
						label='Email'
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						onChange={this.handleChange}
						label='Password'
						required
					/>
					<FormInput
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						onChange={this.handleChange}
						label='Confirm Password'
						required
					/>
					<CustomButton type='submit'>SIGN UP</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
