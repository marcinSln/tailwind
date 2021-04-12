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
import { FormHandler } from './Components/FormHandler';
import { InputField } from './Components/InputField';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';

// config
import {
	OptionContactForm,
	textInSectionAboutMe,
	textInSectionWhatSayAboutMe,
	sectionMyCababilities,
	sectionLetsMakeSomething,
	footerText,
	skills,
	footerLink,
	socialMedia
} from './Config/Config';

//images
import aboutMeImg from './img/about.png';
import worldWide from './img/worldwide.svg';
import LinkScroll from './Components/Menu/LinkScroll';
import 'font-awesome/css/font-awesome.min.css';

export default function App() {
	return (
		<BrowserRouter>
			<div className="bg-navyBlue  min-h-screen">
				<Header />
				<Baner />
				<Section className="bg-darkBlue pt-20 pb-16 md:pt-24 md:pb-24 2xl:pt-48 lg:pb-36" target="#About">
					<Wrapper isRow="true" className="items-start flex-wrap md:flex-nowrap">
						<SectionWithHeader
							content={textInSectionAboutMe}
							buttonType="transparent"
							headerLine="right"
							className="w-full mb-10 -mr-5  md:w-6/12 xl:w-1/2 md:mb-0 md:mr-16"
						/>
						<ImageWithBorder
							image={aboutMeImg}
							className="bg-navyBlue max-w-3xl py-8 px-5 2xl:py-20 2xl:px-16"
						/>
					</Wrapper>
				</Section>
				<Section className="bg-darkBlue pt-8  pb-24 lg:pt-8 lg:pb-32 " target="#Portfolio">
					<Wrapper isRow="false" className="items-start flex-wrap">
						<div className="w-full  md:w-6/12 md:w-auto">
							<h2 className="font-bold inline-block relative text-center text-white text-4xl lg:text-6xl md:text-left relative">
								Portfolio
								<span className="horizontal-line horizontal-line--left" />
							</h2>
						</div>
						<div className="w-6/12 w-auto" />
						<TabsContainer />
					</Wrapper>
				</Section>
				<Section className="pt-12 pb-24 md:pt-24 md:pb-52">
					<Wrapper className="items-start">
						<TextHeader text={sectionMyCababilities.header} lineType="underline" />
						<Text className="text__section lg:text-3xl" text={sectionMyCababilities.text} />
						<Section className="skill__content">
							{skills.map((skill) => <Skill key={uuid()} skill={skill} />)}
						</Section>
					</Wrapper>
				</Section>
				<Section className="bg-darkBlue  pt-12 pb-12 md:pt-24 md:pb-52">
					<Wrapper>
						<TextHeader text={textInSectionWhatSayAboutMe.header} lineType="underline" />
						<Text className="text__section lg:text-3xl" text={textInSectionWhatSayAboutMe.introduction} />
						<Section className="flex-col items-center justify-center gap-x-12 mt-10 lg:mt-20 md:flex md:flex-row lg:gap-x-24">
							<img
								src={worldWide}
								alt={textInSectionWhatSayAboutMe.header}
								className="w-full md:w-1/2 inline-block mb-10 md:-ml-5"
							/>
							<Text
								className="text__section lg:text-3xl md:text-left max-w-4xl"
								text={textInSectionWhatSayAboutMe.text}
							/>
						</Section>
					</Wrapper>
				</Section>
				<Section className="pb-24 " target="#Contact">
					<Wrapper>
						<TextHeader
							text={sectionLetsMakeSomething.header}
							lineType="vertical-above"
							spaceBetween="mb-14"
						/>
						<Text
							className="text__section lg:text-xl md:text-center max-w-4xl"
							text={sectionLetsMakeSomething.text}
						/>
						<FormHandler className="mt-4 xs:mt-0 max-w-6xl mx-auto text-center">
							<div className="gap-y-4 grid-cols-1 grid md:grid-cols-2 md:gap-x-6 md:gap-y-6">
								<InputField typeOfElement="input" type="text" name="Name" />
								<InputField typeOfElement="input" type="email" name="Email" />
								<InputField typeOfElement="input" type="phone" name="Phone#" />
								<InputField typeOfElement="select" type="" name="Budget" options={OptionContactForm} />
							</div>
							<InputField typeOfElement="textarea" type="" name="Message" />
							<input type="submit" value="Hire me" className="btn btn--red btn--rounded" />
						</FormHandler>
					</Wrapper>
				</Section>
				<Section className="pb-12 bg-darkBlue md:pb-24">
					<Wrapper>
						<TextHeader
							text="Portfolio"
							className="header__logo"
							lineType="vertical-above"
							spaceBetween="mb-14"
						/>
						<div className="pt-6 xs:pt-2 row flex divide-x-2 divide-white justify-center py-2 pt-3 md:pt-6">
							{footerLink.map((link) => (
								<LinkScroll
									scrollTo={link.scrollTo}
									name={link.text}
									key={uuid()}
									className={link.className}
								/>
							))}
						</div>
						<div className="footer__content ">
							{footerText.map((item) => (
								<a className={item.className} key={uuid()} href={item.link}>
									{item.text}
								</a>
							))}
						</div>
						<div className="py-4 gap-x-4 flex justify-center">
							{socialMedia.map((item) => (
								<a className="text-icon" key={uuid()} href={item.link}>
									<i className={item.icon} />
								</a>
							))}
						</div>
					</Wrapper>
				</Section>
				<Section className="section--footer">
					<span className="text-white text-base">Copyright © 2019 Graphics Studio | All rights reserved</span>
				</Section>
			</div>
		</BrowserRouter>
	);
}
