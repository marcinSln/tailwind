import backgroundImage from '../img/background.png';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<div className="container mx-20 flex">
			<div className="flex-1 flex">
				<h1 className="text-8xl text-white pt-1"> Porfolio </h1>
				<div className="flex z-10">
					<img src={backgroundImage} alt="" />
				</div>
			</div>
			<div className="flex flex-2 items-start">
				<div className="h-28 z-10 mx-2 border-b-2  border-transparent hover:border-red">
					<div className="transition duration-300 ease-in-out hover:bg-red flex items-end pt-8">
						<Link to="#" className="text-white  flex font-bold py-4 px-8">
							About
						</Link>
					</div>
				</div>
				<div className="h-28 z-10  mx-2 border-b-2  border-transparent hover:border-red">
					<div className="transition duration-300 ease-in-out hover:bg-red flex items-end pt-8">
						<Link to="#" className="text-white  flex font-bold py-4 px-8">
							Portfolio
						</Link>
					</div>
				</div>
				<div className="h-28 z-10  mx-2 border-b-2  border-transparent hover:border-red">
					<div className="transition duration-300 ease-in-out hover:bg-red flex items-end pt-8">
						<Link to="#" className="text-white  flex font-bold py-4 px-8">
							Contact
						</Link>
					</div>
				</div>
				<div className="h-16 z-10 mx-2 flex items-center mt-9">
					<Link
						to="#"
						className="border bg-transparent border-white rounded-full text-white px-4 py-2  hover:text-blue-dark hover:bg-white"
					>
						Get started
					</Link>
				</div>
			</div>
		</div>
	);
};
