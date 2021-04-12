import React from 'react';
import uuid from 'react-uuid';

export default function TabContent({ children }) {
	return (
		<React.Fragment>
			{children.map((item) => (
				<span
					className={`grid transition-opacity delay-100 ease-in-out duration-300 gap-x-6  gap-y-6 xs:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-5 ${item.isActive ==
					true
						? 'block opacity-100'
						: 'hidden opacity-0'}`}
					key={uuid()}
				>
					{item.items.map((el, index) => (
						<div
							data-aos="zoom-in"
							data-aos-offset="150"
							data-aos-delay={index * 400}
							key={uuid()}
							className={`relative group animate-wiggle delay-${(index + 1) *
								200} cursor-pointer transition-all duration-300`}
						>
							<div className="transition-all duration-300 overflow-hidden rounded-3xl transform-gpu relative hover:scale-y-110">
								<img src={el.src} alt={el.header} />
								<span className="h-full w-full bg-red absolute top-0 left-0 opacity-0 transition-all duration-300 group-hover:opacity-80" />
							</div>
							{el.header || el.text ? (
								<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
									<p className="text-white font-bold text-4xl">{el.header}</p>
									<p className=" text-white font-light text-xl">{el.text}</p>
								</div>
							) : null}
						</div>
					))}
				</span>
			))}
		</React.Fragment>
	);
}
