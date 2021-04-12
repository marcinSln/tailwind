import React from 'react';
import { Link } from 'react-router-dom';
import PersonImage from '../img/img.svg';
import { socialMedia, baner } from '../Config/Config';
import parse from 'html-react-parser';

export const Baner = () => {
	const buttons = baner.buttons.map((item) => (
		<Link to={item.link} className={item.className}>
			{item.text}
		</Link>
	));

	return (
		<div className="baner">
			<div className="baner__side-short">
				<div className="items-center mx-auto flex flex-col flex-row md:ml-10 lg:items-start lg:ml-20">
					<div className="">
						<p className="baner__subtitle">{baner.subtitle}</p>
						<h1 className="baner__header ">{parse(baner.header)}</h1>
						<div className="font-light  pb-4 pt-1 text-white lg:text-xl">{parse(baner.text)}</div>
						<p className="text-white  text text-xl">{baner.socialMediaHeader}</p>
						<div className="pb-2 pt-1 pl-0.5  gap-x-4 flex">
							{socialMedia.map((item) => (
								<a className="text-icon" href={item.link}>
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
					<img src={PersonImage} alt="Baner" />
				</div>
			</div>
		</div>
	);
};
