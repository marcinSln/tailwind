import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PersonImage from '../img/img.jpg';
import PersonImage_mobile from '../img/img_mobile.jpeg';
import { socialMedia, baner } from '../Config/Config';
import parse from 'html-react-parser';
import uuid from 'react-uuid';
import AOS from 'aos';
import LinkScroll from './Menu/LinkScroll';
import 'aos/dist/aos.css';

export const Baner = () => {
	const buttons = baner.buttons.map((item) => (
		<LinkScroll name={item.text} scrollTo={item.link} key={uuid()} className={item.className} />
	));

	useEffect(() => {
		AOS.init({
			duration: 400
		});
	}, []);

	return (
		<div className="baner">
			<div className="baner__side-short">
				<div className="items-center mx-auto flex flex-col flex-row md:ml-10 lg:items-start lg:ml-20">
					<div className="">
						<p className="baner__subtitle" data-aos="zoom-in">
							{baner.subtitle}
						</p>
						<h1 className="baner__header " data-aos="fade-down">
							{parse(baner.header)}
						</h1>
						<div className="font-light  pb-4 pt-1 text-white lg:text-xl" data-aos="fade-right">
							{parse(baner.text)}
						</div>
						<p className="text-white  text text-xl">{baner.socialMediaHeader}</p>
						<div className="pb-2 pt-1 pl-0.5  gap-x-4 flex">
							{socialMedia.map((item) => (
								<a className="text-icon" href={item.link} key={uuid()}>
									<i className={item.icon} />
								</a>
							))}
						</div>
						<div className="py-4 mt-2 flex flex-col gap-y-2 xs:gap-y-0 xs:flex-row xs:gap-x-4">
							{' '}
							{buttons}
						</div>
					</div>
				</div>
			</div>
			<div className="baner__side--bigger">
				<div>
					<picture>
						<source media="(max-width: 500px)" srcSet={PersonImage_mobile} />
						<source media="(min-width: 500px)" srcSet={PersonImage} />
						<img
							src={PersonImage}
							className="text-center mx-auto"
							alt="Baner"
							data-aos="fade-zoom-in"
							data-aos-easing="ease-in-back"
							data-aos-delay="0"
							data-aos-offset="0"
						/>/>
					</picture>
				</div>
			</div>
		</div>
	);
};
