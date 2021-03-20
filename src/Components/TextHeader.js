import React from 'react';
import parse from 'html-react-parser';

export function TextHeader({ text, level, lineType, align = 'center', color = 'white' }) {
	return (
		<React.Fragment>
			{text ? (
				parse(`<h1 class='text-${align} text-3xl text-${color}   font-bold md:text-6xl'>${text}</h1>`)
			) : null}
			{lineType ? <span className="border-b-2 border-red w-1/4 flex pt-2 m-auto md:pt-5 lg:w-1/5" /> : null}
		</React.Fragment>
	);
}
