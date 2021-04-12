import React from 'react';

export const Wrapper = ({ children, isRow, className }) => {
	return (
		<div className={` ${isRow ? 'flex justify-space-between' : null} mx-10 xl:mx-20 ${className} `}>{children}</div>
	);
};
