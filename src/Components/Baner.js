import React from 'react';
import { Link } from 'react-router-dom';
import { FaBehance, FaDribbble, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';
import PersonImage from '../img/img.svg';

export const Baner = () => {
	return (
		<div className="flex flex-col  justify-between mx-16 items-center min-h-full  lg:mt-0 md:flex-row  md:pt-40">
			<div className="bg-no-repeat bg-left-center mt-10 bg-left bg-contain mx-auto w-full lg:w-full md:bg-elipse md:-ml-20 md:bg-50%">
				<div className="items-center mx-auto flex flex-col flex-row md:ml-10 lg:items-start lg:ml-20">
					<div className="">
						<p className="text-white text mb-2 lg:text-1xl xl:text-3xl ">Hello, i am</p>
						<h1 className=" text-white text -mt-4 font-bold text-7xl xl:text-9xl">
							Mark
							<br />Reccardo
						</h1>
						<div className="font-light  pb-4 text-white lg:text-xl">
							A young <span className="text-red text text-xl">UI/UX</span> designer with crazy for mobile
							& web design.
						</div>

						<p className="text-white text text-xl">Find Me on</p>
						<div className="py-3  gap-x-4 flex">
							<Link to="#" className="text-white text-4xl ">
								<FaBehance />
							</Link>
							<Link to="#" className="text-white text-4xl">
								<FaDribbble />
							</Link>
							<Link to="#" className="text-white text-4xl">
								<FaInstagram />
							</Link>
							<Link to="#" className="text-white text-4xl">
								<FaLinkedin />
							</Link>
							<Link to="#" className="text-white text-4xl">
								<FaPinterest />
							</Link>
						</div>
						<div className="py-4 flex gap-x-4">
							<Link to="#" className="btn btn--red btn--rounded">
								Hire me
							</Link>
							<Link to="#" className="btn btn--transparent">
								Portfolio
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className=" mt-10 max-w-md w-full md:max-w-max lg:w-max md:mt-0 lg:-mr-10 md:-mr-20">
				<div>
					<img src={PersonImage} alt="Baner" />
				</div>
			</div>
		</div>
	);
};
