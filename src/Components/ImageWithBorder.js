import React from 'react';

export const ImageWithBorder = ({ image, className, image_mobile }) => {
	return (
		<div className={` ${className}`}>
			<picture>
				<source media="(max-width: 500px)" srcset={image_mobile} />
				<source media="(min-width: 500px)" srcset={image} />
				<img src={image} className="text-center mx-auto" alt="Baner" />
			</picture>
		</div>
	);
};
