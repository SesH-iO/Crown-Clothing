import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../HOC/Spinner/WithSpinner';
import CollectionsOverview from './collection-overview';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching,
});

// * compose lets us pass all the functions in just by calling the compose function
// * in Other words it just allows us to evaluate multiple queried functions where the function returns another function that expects to be passed to it and allows you to chain all together
const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
