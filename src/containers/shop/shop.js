import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/CollectionsOverview/collection-overview';
import CollectionPage from '../../pages/collection/collection';

// * The reason you have access to the match property is because we have declared Route for ShopPage in App.js file.
// * So this automatically passes those properties into this component
const ShopPage = ({ match }) => {
	return (
		<div className='shop-page'>
			<Route exact path={`${match.path}`} component={CollectionsOverview} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
		</div>
	);
};

export default ShopPage;
