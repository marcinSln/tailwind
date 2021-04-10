import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import React, { Component } from 'react';
import LinkItem from './Menu/LinkItem';

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
			this.setState({ isSticky: true });
		} else {
			this.setState({ isSticky: false });
		}
	};

	render() {
		const { isSticky, isOpen } = this.state;
		return (
			<div
				className={`z-10 px-4 flex lg:px-16 md:px-10 fixed  max-w-full transform-gpu w-full transition-all duration-300 ease-in-out ${isSticky
					? 'bg-blur bg-blue-sticky'
					: null}`}
				data-sticky-element="true"
			>
				<div
					className={`flex w-full duration-300 ease-in-out transform-gpu lg:-mt-3 transition-all ${isSticky
						? 'sticky-header'
						: null}`}
				>
					<div className="flex-1  flex xl:flex-1 md:flex-none">
						<h1
							className={`font-logo text-5xl text-white pt-2 -ml-1 md:text-8xl transform-gpu tracking-tight
						 ${isSticky ? 'text-4xl' : null}`}
						>
							Portfolio
						</h1>
						<div className="flex z-10 w-full">
							{/* <img src={backgroundImage} className="hidden xl:block" alt="Porfolio" /> */}
						</div>
					</div>
					<div
						className={`text-white  z-10 flex text-4xl cursor-pointer  items-center md:hidden`}
						onClick={(e) => this.handleOpen(e)}
					>
						{isOpen ? <FaTimes /> : <FaBars />}
					</div>
					<div
						className={`flex flex-1 items-center ${this.state.isOpen
							? 'flex flex-col  top-0 -left-3.5 right-0 bottom-0 fixed bg-blue-dark bg-opacity-95 min-h-screen justify-center -top-3 w-screen transform-gpu scale-150 origin-top md:scale-100 md:w-8/12 md:relative md:bottom-auto md:top-auto md:bg-opacity-100 md:bg-transparent'
							: 'hidden'} md:flex md:items-start md:h-auto md:min-h-0 md:h-full md:w-8/12 md:justify-end md:relative md:flex-row`}
					>
						{/* TODO Refactor */}
						<LinkItem name="About" scrollTo="#About" />
						<LinkItem name="Portfolio" scrollTo="#Portfolio" />
						<LinkItem name="Contact" scrollTo="#Contact" />
						{/* TODO Refactor */}
						<div className="h-10 z-10 flex items-center mt-2 xl:mt-9 lg:h-12 lg:mt-10">
							<Link to="#" className="btn btn--small  btn--transparent ml-1">
								Get started
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
