import React from 'react';
import LinkScroll from './LinkScroll';

const LinkItem = ({ name, scrollTo }) => {
	return (
		<div className="menu__item">
			<div className="menu__item-block">
				<div className="menu__item-link">
					<LinkScroll name={name} scrollTo={scrollTo} />
				</div>
			</div>
		</div>
	);
};

export default LinkItem;
