import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/CollectionsOverview/collection-overview';
import CollectionPage from '../../pages/collection/collection';
import WithSpinner from '../../HOC/Spinner/WithSpinner';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

// * The reason you have access to the match property is because we have declared Route for ShopPage in App.js file.
// * So this automatically passes those properties into this component
class ShopPage extends React.Component {
	state = {
		loading: true,
	};

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		// * 'collections' is name we provided in our firestore
		const collectionRef = firestore.collection('collections');
		collectionRef.onSnapshot(async (snapshop) => {
			const collectionMap = convertCollectionsSnapshotToMap(snapshop);
			updateCollections(collectionMap);
			this.setState({ loading: false });
		});
	}

	render() {
		const { match } = this.props;
		const { loading } = this.state;
		return (
			<div className='shop-page'>
				<Route
					exact
					path={`${match.path}`}
					render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => <CollectionsPageWithSpinner isLoading={loading} {...props} />}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionMap) => dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
