import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectCollectionOverview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../CollectionPreview/collection-preview';

import './collection-overview.scss';

const CollectionsOverview = ({ collections }) => (
	<div className='collections-overview'>
		{collections.map(({ id, ...otherCollectionProps }) => (
			<CollectionPreview key={id} {...otherCollectionProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionOverview,
});

export default connect(mapStateToProps)(CollectionsOverview);
