import backgroundImage from '../img/background.png';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
	}

	handleOpen = (e) => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<div className="mx-5 flex lg:mx-20 md:mx-10 ">
				<div className="flex-1  flex xl:flex-1 md:flex-none">
					<h1 className="text-6xl text-white pt-1 xl:text-8xl"> Porfolio </h1>
					<div className="flex z-10 w-full">
						<img src={backgroundImage} className="hidden xl:block" alt="" />
					</div>
				</div>
				<div
					className="text-white  z-10 flex text-4xl cursor-pointer  items-center md:hidden"
					onClick={(e) => this.handleOpen(e)}
				>
					{this.state.isOpen ? <FaTimes /> : <FaBars />}
				</div>
				<div
					className={`flex flex-1 items-center  ${this.state.isOpen
						? 'flex flex-col fixed l-0 bg-blue-dark bg-opacity-90 min-h-screen justify-center top-0 w-full'
						: 'hidden'} md:flex md:items-start md:h-auto md:min-h-0 md:h-full md:w-8/12 md:justify-end md:relative md:flex-row`}
				>
					<div className="h-14 z-10 mx-0 border-b-2 justify-end  border-transparent xl:h-28 xl:mx-2 hover:border-red ">
						<div className="transition duration-300 ease-in-out pt-0 xl:pt-8 hover:bg-red flex items-end">
							<Link to="#" className="text-white  flex font-bold py-2 px-4 lg:py-4 lg:px-4">
								About
							</Link>
						</div>
					</div>
					<div className="h-14 z-10  mx-0 border-b-2  border-transparent xl:h-28 xl:mx-2 hover:border-red ">
						<div className="transition duration-300 ease-in-out pt-0 xl:pt-8 hover:bg-red flex items-end">
							<Link to="#" className="text-white  flex font-bold py-2 px-4 lg:py-4 lg:px-4">
								Portfolio
							</Link>
						</div>
					</div>
					<div className="h-14 z-10  mx-0 border-b-2  border-transparent xl:h-28 xl:mx-2 hover:border-red">
						<div className="transition duration-300 ease-in-out pt-0 xl:pt-8 hover:bg-red flex items-end">
							<Link to="#" className="text-white  flex font-bold py-2 px-4 lg:py-4 lg:px-4">
								Contact
							</Link>
						</div>
					</div>
					<div className="h-10 z-10 mx-2 flex items-center mt-1 xl:mt-9 lg:h-16">
						<Link
							to="#"
							className="border bg-transparent border-white rounded-full text-white px-2 py-1 lg:px-4 lg:py-2  hover:text-blue-dark hover:bg-white"
						>
							Get started
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
