import React from 'react';
import parse from 'html-react-parser';

export function TextHeader({ text, level, lineType, align = 'center', color = 'white', spaceBetween }) {
	return (
		<React.Fragment>
			{lineType == 'vertical-above' ? (
				<span
					className={`border-l-2 border-red w-1 text-center flex mx-auto h-16 mb-5 md:${spaceBetween} md:h-28`}
				/>
			) : null}
			{text ? (
				parse(
					`<h1 class='text-${align} text-3xl text-${color}  font-bold md:text-6xl md:leading-tight'>${text}</h1>`
				)
			) : null}
			{lineType == 'underline' ? (
				<span className="border-b-2 border-red w-1/4 flex pt-2 m-auto md:pt-5 lg:w-1/5" />
			) : null}
		</React.Fragment>
	);
}
