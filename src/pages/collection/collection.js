import React from 'react';

import { connect } from 'react-redux';

import CollectionItems from '../../components/CollectionItems/collection-items';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.scss';

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<div className='collection-page'>
			<h2 className='title'>{title}</h2>
			<div className='items'>
				{items.map((item) => (
					<CollectionItems key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

// * ownProps is the properties that we have in its own component
const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
