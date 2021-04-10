import React from 'react';

export const Skill = ({ skill }) => {
	return (
		<React.Fragment>
			{[ skill ].map((item) => (
				<div className="w-full max-w-xs flex justify-center flex-col text-center">
					<img src={require(`../img/${item.image}`).default} alt={item.header} className="w-auto mx-auto" />
					<h3 className="text-3xl text-white font-medium my-3">{item.header}</h3>
					<p className="text-white font-light leading-loose mx-auto sm:w-3/4 xs:w-full ">{item.text}</p>
				</div>
			))}
		</React.Fragment>
	);
};
