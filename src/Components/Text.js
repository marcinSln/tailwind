import React from 'react';

export function Text({ text, color = 'white', size = 'xl', align = 'center', lineHeight }) {
	return (
		<div
			className={`text-${color}  ${lineHeight} text-base text-center py-6 lg:text-${size} lg:${lineHeight} md:text-${align}`}
		>
			{' '}
			{text}{' '}
		</div>
	);
}
