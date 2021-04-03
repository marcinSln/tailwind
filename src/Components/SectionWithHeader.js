import React from 'react';
import { Link } from 'react-router-dom';

export const SectionWithHeader = ({ content, className, headerLine }) => {
	return (
		<div className={`mr-5 ${className}`}>
			{content.map((item) => (
				<React.Fragment key={item.header}>
					<h2 className="text-header md:text-left relative">
						{item.header}
						{headerLine ? <span className="horizontal-line" /> : null}
					</h2>
					<p className="section-text">{item.introduction}</p>
					<p className="section-text">{item.text}</p>
					<Link
						to="#"
						className="btn btn--transparent btn--rounded mr-auto ml-auto md:inline-block md:w-auto md:text-left"
					>
						{item.textonButton}
					</Link>
				</React.Fragment>
			))}
		</div>
	);
};
