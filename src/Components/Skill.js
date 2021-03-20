import React from 'react';

export function Skill({ image, textHeader, text }) {
	return (
		<div className="w-full max-w-xs flex justify-center flex-col text-center">
			<img src={image} alt="" className="w-auto mx-auto" />
			<h3 className="text-3xl text-white font-medium my-3">{textHeader}</h3>
			<p className="text-white font-light leading-loose mx-auto sm:w-3/4 xs:w-full ">{text}</p>
		</div>
	);
}
