import React, { useEffect } from 'react';
import uuid from 'react-uuid';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Skill = ({ skill, effect, delay, offset }) => {
	useEffect(() => {
		AOS.init({
			duration: 400
		});
	}, []);
	return (
		<React.Fragment>
			{[ skill ].map((item) => (
				<div
					className="w-full max-w-xs flex justify-center flex-col text-center"
					data-aos={effect}
					data-aos-delay={delay}
					data-aos-offset="150"
					key={uuid()}
				>
					<img src={require(`../img/${item.image}`).default} alt={item.header} className="w-auto mx-auto" />
					<h3 className="text-3xl text-white font-medium my-3">{item.header}</h3>
					<p className="text-white font-light leading-loose mx-auto sm:w-3/4 xs:w-full ">{item.text}</p>
				</div>
			))}
		</React.Fragment>
	);
};
