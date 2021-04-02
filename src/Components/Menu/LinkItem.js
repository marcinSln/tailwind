import React from 'react';
import LinkScroll from './LinkScroll';

const LinkItem = ({ name, scrollTo }) => {
	return (
		<div className="menu__item">
			<div className="transition duration-300 pt-1 ease-in-out hover:bg-red flex items-end lg:pt-0">
				<div className="menu__item-link">
					<LinkScroll name={name} scrollTo={scrollTo} />
				</div>
			</div>
		</div>
	);
};

export default LinkItem;
