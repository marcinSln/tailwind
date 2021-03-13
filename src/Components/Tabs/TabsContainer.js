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
		return (
			<React.Fragment>
				<div className="">
					<div className="flex flex-col mt-6 md:flex-row md:-ml-4 ">
						<TabHeader children={tabsHeader} onClick={(e) => this.handleTab(e)} />
					</div>
					<div className="row grid mt-16 md:mt-32">
						<TabContent children={tabsContent} />
					</div>
				</div>
			</React.Fragment>
		);
	}
}
