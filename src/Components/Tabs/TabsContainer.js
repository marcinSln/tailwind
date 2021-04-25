import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TabHeader from './TabHeader';
import TabContent from './TabContent';
import { tabsHeader, tabsContent } from '../../Config/Config';

export default class TabsContainer extends Component {
	state = {
		acitveTab: tabsHeader[0].name
	};

	handleTab = (e) => {
		let isScroll = e.target.closest('.tab__container').getAttribute('data-scroll');
		let targetScroll = document.querySelector('[target-scroll="#Portfolio"]');
		let top = document.querySelector('[data-sticky-element]').offsetHeight;
		if (isScroll) {
			window.scrollTo({
				top: targetScroll.offsetTop - top,
				behavior: 'smooth'
			});
		}
		this.setState({ acitveTab: e.target.outerText });
		tabsHeader.map(
			(item) => (
				item.isActive == true ? (item.isActive = false) : null,
				item.name == e.target.outerText ? (item.isActive = true) : null
			)
		);
		tabsContent.map(
			(item) => (
				item.isActive == true ? (item.isActive = false) : null,
				item.name == e.target.outerText ? (item.isActive = true) : null
			)
		);
	};

	render() {
		let { isScroll } = this.props;
		return (
			<React.Fragment>
				<div className="tab__container" data-scroll={isScroll ? 'true' : null}>
					<div className="flex flex-col mt-4 md:flex-row md:-ml-1 2xl:mt-6 ">
						<TabHeader isScroll="true" children={tabsHeader} onClick={(e) => this.handleTab(e)} />
					</div>
					<div className="row grid mt-10 xl:mt-16 2xl:mt-32 tab__content">
						<TabContent children={tabsContent} />
					</div>
				</div>
			</React.Fragment>
		);
	}
}
