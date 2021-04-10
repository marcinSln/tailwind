import React from 'react';

export const ImageWithBorder = ({ image, className }) => {
	return (
		<div className={` ${className}`}>
			<img src={image} alt="About me" />
		</div>
	);
};
