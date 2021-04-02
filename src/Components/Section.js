import React, { Component } from 'react';

export const Section = ({ children, className, target }) => {
	return (
		<div target-scroll={target ? target : null} className={className}>
			{children}
		</div>
	);
};
