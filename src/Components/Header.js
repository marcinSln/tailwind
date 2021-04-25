import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import React, { Component } from 'react';
import LinkItem from './Menu/LinkItem';
import { HeaderLinks } from '../Config/Config';
import uuid from 'react-uuid';
import LinkScroll from './Menu/LinkScroll';

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
			<div className={`header ${isSticky ? 'bg-blur bg-blue-sticky' : ''}`} data-sticky-element="true">
				<div className={`header__container ${isSticky ? 'sticky-header' : null}`}>
					<div className="flex-1  flex xl:flex-1 md:flex-none">
						<LinkScroll
							scrollTo="#Home"
							name="Portfolio"
							key={uuid()}
							className={`header__logo  ${isSticky ? 'text-4xl' : null}`}
						/>
					</div>
					<div className="header__hambuger-menu " onClick={(e) => this.handleOpen(e)}>
						{isOpen ? <FaTimes /> : <FaBars />}
					</div>
					<div className={`header__menu ${isOpen ? 'header__menu--open' : 'hidden md:visible'} `}>
						{HeaderLinks.map((item) => (
							<LinkItem name={item.text} key={uuid()} scrollTo={item.scrollTo ? item.scrollTo : '/'} />
						))}
						<div className="h-10 z-10 flex items-center mt-2 xl:mt-9 lg:h-12 lg:mt-10">
							<LinkScroll
								name="Get started"
								scrollTo={'#About'}
								className="btn btn--small  btn--transparent ml-1"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
