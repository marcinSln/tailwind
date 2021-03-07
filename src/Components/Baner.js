import React from 'react';
import { Link } from 'react-router-dom';
import { FaBehance, FaDribbble, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';
import PersonImage from '../img/img.png';

export const Baner = () => {
	return (
		<div className="flex flex-col  justify-between mx-20 items-center min-h-full  lg:mt-0 md:flex-row  md:mt-28">
			<div className="bg-no-repeat bg-left-center mt-10 bg-left bg-contain mx-auto w-full lg:w-full md:bg-elipse md:-ml-20 md:bg-50%">
				<div className="items-center mx-auto flex flex-col flex-row md:ml-10 lg:items-start lg:ml-20">
					<div className="">
						<p className="text-white lg:text-1xl xl:text-4xl ">Hello, i'm Mark</p>
						<h1 className=" text-white text-7xl xl:text-8xl">
							Mark
							<br />Reccardo
						</h1>
						<div className="font-light pt-3 pb-4 text-white lg:text-1xl">
							A young <span className="text-red">UI/UX</span> designer with crazy for mobile & web design.
						</div>

						<p className="text-white">Find Me on</p>
						<div className="py-4  gap-x-4 flex">
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
							<Link
								to="#"
								className="bg-red transition duration-300 ease-in-out  rounded-full text-white px-4 py-2  hover:bg-warning-800"
							>
								Hire me
							</Link>
							<Link
								to="#"
								className="border bg-blue-dark transition duration-300 ease-in-out border-white rounded-full text-white px-4 py-2  hover:text-blue-dark hover:bg-white"
							>
								Portfolio
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className=" mt-10 max-w-md md:max-w-max lg:w-max md:mt-0 lg:-mr-10 md:-mr-20">
				<div>
					<img src={PersonImage} />
				</div>
			</div>
		</div>
	);
};
