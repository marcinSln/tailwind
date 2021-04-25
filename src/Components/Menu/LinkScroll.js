import React from 'react';
import { Link } from 'react-router-dom';

const LinkScroll = ({ scrollTo, name, className }) => {
	const scrollToSection = (e) => {
		let targetLink = e.target.getAttribute('data-scroll-to');
		let targetScroll = document.querySelector(`[target-scroll="${targetLink}"]`);
		let top = document.querySelector('[data-sticky-element]').offsetHeight;
		console.log('targetScroll', targetScroll);
		console.log('top', top);
		window.scrollTo({
			top: targetScroll.offsetTop - top,
			behavior: 'smooth'
		});
	};

	return (
		<Link
			className={className ? className : null}
			to="#"
			data-scroll-to={scrollTo}
			onClick={scrollToSection.bind(this)}
		>
			{name}
		</Link>
	);
};

export default LinkScroll;
