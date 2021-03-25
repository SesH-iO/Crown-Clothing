import React from 'react';

import './homepage.styles.scss';
import { HomePageContainer } from './homepage.styled';

import Directory from '../../containers/Directory/directory';

const HomePage = () => {
	return (
		<HomePageContainer>
			<Directory />
		</HomePageContainer>
	);
};

export default HomePage;
