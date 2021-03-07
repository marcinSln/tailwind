import React from 'react';
import { Header } from './Components/Header';
import { Baner } from './Components/Baner';
import { Wrapper } from './Components/Wrapper';
import { Section } from './Components/Section';
import { SectionWithHeader } from './Components/SectionWithHeader';
import { ImageWithBorder } from './Components/ImageWithBorder';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

//images
import aboutMeImg from './img/about.svg';

export default function App() {
	return (
		<BrowserRouter>
			<div className="bg-blue-dark  min-h-screen">
				<Header />
				<Baner />

				<Section>
					<Wrapper isRow="true" className="items-start flex-wrap md:flex-nowrap">
						<SectionWithHeader
							textHeader="About Me"
							textBegin="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
								ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
								nisi ut aliquip ex ea commodo consequat"
							text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
							textButton="Download  CV"
							buttonType="transparent"
							headerLine="right"
							className="w-full mb-10 md:w-6/12 xl:w-1/2 md:mb-0"
						/>
						<ImageWithBorder image={aboutMeImg} className="w-full max-w-2xl md:w-6/12 xl:w-1/2" />
					</Wrapper>
				</Section>
			</div>
		</BrowserRouter>
	);
}
