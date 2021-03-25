import React from 'react';

export const ImageWithBorder = ({ image, className }) => {
	return (
		<div className={` bg-navyBlue max-w-3xl py-8 px-5 lg:py-20 lg:px-16 ${className}`}>
			<img src={image} alt="About me" />
		</div>
	);
};
