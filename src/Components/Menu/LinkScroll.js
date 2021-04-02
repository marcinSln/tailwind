import React from 'react';
import { Link } from 'react-router-dom';

const LinkScroll = ({ scrollTo, name, className }) => {
	const scrollToSection = (e) => {
		let targetLink = e.target.getAttribute('href').substr(1);
		let targetScroll = document.querySelector(`[target-scroll="${targetLink}"]`);
		let top = document.querySelector('[data-sticky-element]').offsetHeight;

		window.scrollTo({
			top: targetScroll.offsetTop - top,
			behavior: 'smooth'
		});
	};

	return (
		<Link className={className ? className : null} to={scrollTo} onClick={scrollToSection.bind(this)}>
			{name}
		</Link>
	);
};

export default LinkScroll;
