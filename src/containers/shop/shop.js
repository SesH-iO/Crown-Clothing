import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CollectionsOverviewContainer from '../../components/CollectionsOverview/collection-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.container';

import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';

// * The reason you have access to the match property is because we have declared Route for ShopPage in App.js file.
// * So this automatically passes those properties into this component
class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollectionStartAsync } = this.props;
		fetchCollectionStartAsync();
	}

	render() {
		const { match } = this.props;

		return (
			<div className='shop-page'>
				<Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
				<Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
