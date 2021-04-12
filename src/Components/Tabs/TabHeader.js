import React from 'react';

export default function TabHeader({ children, onClick }) {
	return (
		<React.Fragment>
			{children.map((item) => (
				<span
					className={`text-center my-2 py-1 text-xl  px-4 cursor-pointer md:my-0 md:py-0 md:text-3xl  md:pb-2 ${item.isActive ==
					true
						? ' border-b-2 border-red text-red md:text-left md:border-b-0'
						: 'text-white'} `}
					key={item.name}
					onClick={onClick}
				>
					{item.name}
				</span>
			))}
		</React.Fragment>
	);
}
