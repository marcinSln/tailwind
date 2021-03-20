import React from 'react';
import { Header } from './Components/Header';
import { Baner } from './Components/Baner';
import { Wrapper } from './Components/Wrapper';
import TabsContainer from './Components/Tabs/TabsContainer';
import { Section } from './Components/Section';
import { SectionWithHeader } from './Components/SectionWithHeader';
import { ImageWithBorder } from './Components/ImageWithBorder';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { TextHeader } from './Components/TextHeader';
import { Text } from './Components/Text';
import { Skill } from './Components/Skill';

//images
import aboutMeImg from './img/about.svg';
import worldWide from './img/worldwide.svg';
import skillItem from './img/item.svg';

export default function App() {
	return (
		<BrowserRouter>
			<div className="bg-blue-dark  min-h-screen">
				<Header />
				<Baner />

				<Section className="bg-darkBlue pt-20 pb-16 lg:pt-48 lg:pb-36">
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
				<Section className="bg-darkBlue pt-8  pb-24 lg:pt-8 lg:pb-32 ">
					<Wrapper isRow="false" className="items-start flex-wrap">
						<div className="w-full  md:w-6/12 md:w-auto">
							<h2 className="font-bold text-center text-white text-4xl lg:text-6xl md:text-left relative">
								Portfolio
								<span className="border-b border-red -right-40  w-7/12 md:right-20 flex absolute h-1 top-1/2 transform -translate-y-1/2  md:w-4/12">
									&nbsp;
								</span>
							</h2>
						</div>
						<div className="w-6/12 w-auto" />
						<TabsContainer />
					</Wrapper>
				</Section>
				<Section className="pt-12 pb-24 md:pt-24 md:pb-52">
					<Wrapper className="items-start">
						<TextHeader text="My Capabilities" level="2" lineType="underline" />
						<Text
							color="white"
							size="3xl"
							align="center"
							text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
						incididunt ut labore et t enim ad minim veniam, quis nostrud exercitation."
						/>
						<Section className="py-5 grid gap-x-3 gap-y-16 justify-items-center sm:grid-cols-2  md:grid-cols-3 lg:gap-y-32 lg:gap-x-6 xs:gap-x-3 xs:grid-cols-2">
							<Skill
								textHeader="Web Design"
								text="Get awesome design services from inkyy.com "
								image={skillItem}
							/>
							<Skill
								textHeader="Web Design"
								text="Get awesome design services from inkyy.com "
								image={skillItem}
							/>
							<Skill
								textHeader="Web Design"
								text="Get awesome design services from inkyy.com "
								image={skillItem}
							/>
							<Skill
								textHeader="Web Design"
								text="Get awesome design services from inkyy.com "
								image={skillItem}
							/>
							<Skill
								textHeader="Web Design"
								text="Get awesome design services from inkyy.com "
								image={skillItem}
							/>
							<Skill
								textHeader="Web Design"
								text="Get awesome design services from inkyy.com "
								image={skillItem}
							/>
						</Section>
					</Wrapper>
				</Section>
				<Section className="bg-darkBlue  pt-12 pb-12 md:pt-24 md:pb-52">
					<Wrapper>
						<TextHeader text="What My Client Says" level="2" lineType="underline" />
						<Text
							color="white"
							size="3xl"
							align="center"
							text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
							ut labore et t enim ad minim veniam, quis nostrud exercitation."
						/>
						<Section className="flex-col items-center justify-center gap-x-12 md:flex md:flex-row lg:gap-x-24">
							<img src={worldWide} alt="" className="w-full md:w-1/2" />
							<Text
								align="left"
								size="3xl"
								lineHeight="leading-loose"
								text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
								laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto 
								beatae vitae dicta sunt is the most explicabo. "
							/>
						</Section>
					</Wrapper>
				</Section>
			</div>
		</BrowserRouter>
	);
}
