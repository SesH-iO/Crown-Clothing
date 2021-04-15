import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../HOC/Spinner/WithSpinner';
import CollectionPage from './collection';

const mapStateToProps = createStructuredSelector({
	isLoading: (state) => !selectIsCollectionLoaded(state),
});

// * compose lets us pass all the functions in just by calling the compose function
// * in Other words it just allows us to evaluate multiple queried functions where the function returns another function that expects to be passed to it and allows you to chain all together
const CollectionsPageContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionPage);

export default CollectionsPageContainer;
