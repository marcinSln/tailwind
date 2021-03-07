import React from 'react';
import { Link } from 'react-router-dom';

export const SectionWithHeader = ({ textHeader, textBegin, text, btn, className, headerLine }) => {
	return (
		<div className={`mr-5 ${className}`}>
			<h2 className="font-bold text-center text-white text-4xl lg:text-6xl md:text-left relative">
				{textHeader}
				{headerLine ? (
					<span className="border-b border-red  w-7/12 -right-40 flex absolute h-1 top-1/2 right-0 transform -translate-y-1/2 md:-right-5 md:w-1/2  xl:w-1/2">
						&nbsp;
					</span>
				) : null}
			</h2>

			<p className="text-white mt-3 mb-1 text-center font-light md:text-left md:mt-6 md:mb-2 md:leading-6 md:text-xl lg:leading-loose lg:text-2xl">
				{textBegin}
			</p>
			<p className="text-white mt-3 mb-1 text-center font-light md:text-left md:mt-6 md:mb-2 md:leading-6 md:text-xl lg:leading-loose lg:text-2xl">
				{text}
			</p>
			<Link
				to="#"
				className="border bg-transparent mt-5 flex text-center w-max  mr-auto ml-auto md:inline-block md:w-auto md:text-left border-white rounded-full text-white px-2 py-1 lg:px-4 lg:py-2  hover:text-blue-dark hover:bg-white"
			>
				Download CV
			</Link>
		</div>
	);
};
