import React from 'react';
import parse from 'html-react-parser';

export function TextHeader({ text, lineType, align = 'center', color = 'white', spaceBetween, className }) {
	return (
		<React.Fragment>
			{lineType == 'vertical-above' ? <span className={`line-vertical md:${spaceBetween} `} /> : null}
			{text ? (
				parse(
					`<h1 class='text-${align} text-3xl text-${color}  ${className} font-bold md:text-6xl md:leading-tight'>${text}</h1>`
				)
			) : null}
			{lineType == 'underline' ? <span className="line-underline " /> : null}
		</React.Fragment>
	);
}
