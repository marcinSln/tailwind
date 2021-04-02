import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			isSticky: false
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleOpen = (e) => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	handleScroll = (e) => {
		let scrollDistance = document.scrollingElement.scrollTop;
		let header = document.querySelector('[data-sticky-element]');

		if (header && scrollDistance > 10) {
			this.setState({
				isSticky: true
			});
		} else {
			this.setState({
				isSticky: false
			});
		}
	};

	render() {
		return (
			<div
				className={`px-4 flex lg:px-16 md:px-10 fixed max-w-full w-full ${this.state.isSticky
					? 'bg-blur'
					: null}`}
				data-sticky-element="true"
			>
				<div
					className={`flex-1  flex xl:flex-1 md:flex-none  ${this.state.isSticky ? '`sticky-header' : null}`}
				>
					<h1 className="font-logo text-5xl text-white pt-2 -ml-1 xl:text-8xl tracking-tight"> Portfolio </h1>
					<div className="flex z-10 w-full">
						{/* <img src={backgroundImage} className="hidden xl:block" alt="Porfolio" /> */}
					</div>
				</div>
				<div
					className={`text-white  z-10 flex text-4xl cursor-pointer  items-center md:hidden`}
					onClick={(e) => this.handleOpen(e)}
				>
					{this.state.isOpen ? <FaTimes /> : <FaBars />}
				</div>
				<div
					className={`flex flex-1 items-center ${this.state.isSticky ? 'sticky-header' : null}  ${this.state
						.isOpen
						? 'flex flex-col fixed l-0 bg-blue-dark bg-opacity-90 min-h-screen justify-center top-0 w-full'
						: 'hidden'} md:flex md:items-start md:h-auto md:min-h-0 md:h-full md:w-8/12 md:justify-end md:relative md:flex-row`}
				>
					<div className="h-14 z-10 border-b-1 justify-end  border-transparent xl:h-21 hover:border-red ">
						<div className="transition duration-300 ease-in-out hover:bg-red flex items-end">
							<Link
								to="#"
								className="text-white text flex tracking-wide font-medium py-2 px-4 lg:pt-6 lg:pb-2 lg:px-4"
							>
								About
							</Link>
						</div>
					</div>
					<div className="h-14 z-10  border-b-1 justify-end  border-transparent xl:h-21 hover:border-red ">
						<div className="transition duration-300 ease-in-out hover:bg-red flex items-end">
							<Link
								to="#"
								className="text-white text flex tracking-wide font-medium py-2 px-4 lg:pt-6 lg:pb-2 lg:px-4"
							>
								Portfolio
							</Link>
						</div>
					</div>
					<div className="h-14 z-10 border-b-1 justify-end  border-transparent xl:h-21 hover:border-red ">
						<div className="transition duration-300 ease-in-out hover:bg-red flex items-end">
							<Link
								to="#"
								className="text-white text flex tracking-wide font-medium py-2 px-4 lg:pt-6 lg:pb-2 lg:px-4"
							>
								Contact
							</Link>
						</div>
					</div>
					<div className="h-10 z-10 flex items-center mt-0 xl:mt-9 lg:h-12">
						<Link to="#" className="btn btn--small  btn--transparent">
							Get started
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
