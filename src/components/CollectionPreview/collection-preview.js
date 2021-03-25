import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../CollectionItems/collection-items';

import './collection-preview.scss';
import {
	CollectionPreviewContainer,
	TitleContainer,
	PreviewContainer,
} from './collection-preview.styles';

const CollectionPreview = (props) => {
	const { title, items, history, match, routerName } = props;
	return (
		<CollectionPreviewContainer>
			<TitleContainer onClick={() => history.push(`${match.path}/${routerName}`)}>
				{title.toUpperCase()}
			</TitleContainer>
			<PreviewContainer>
				{items
					.filter((item, idx) => idx < 4)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))}
			</PreviewContainer>
		</CollectionPreviewContainer>
	);
};

export default withRouter(CollectionPreview);
