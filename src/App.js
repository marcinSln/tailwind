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
import Parser from 'html-react-parser';
import aboutMeImg from './img/about.svg';
import worldWide from './img/worldwide.svg';
import LinkScroll from './Components/Menu/LinkScroll';
import 'font-awesome/css/font-awesome.min.css';

export default function App() {
	return (
		<BrowserRouter>
			<div className="bg-navyBlue  min-h-screen">
				<Header />
				<Baner />
				<Section className="bg-darkBlue pt-20 pb-16 lg:pt-48 lg:pb-36" target="#About">
					<Wrapper isRow="true" className="items-start flex-wrap md:flex-nowrap">
						<SectionWithHeader
							content={textInSectionAboutMe}
							buttonType="transparent"
							headerLine="right"
							className="w-full mb-10 md:w-6/12 xl:w-1/2 md:mb-0"
						/>
						<ImageWithBorder image={aboutMeImg} className="w-full max-w-2xl md:w-6/12 xl:w-1/2" />
					</Wrapper>
				</Section>
				<Section className="bg-darkBlue pt-8  pb-24 lg:pt-8 lg:pb-32 " target="#Portfolio">
					<Wrapper isRow="false" className="items-start flex-wrap">
						<div className="w-full  md:w-6/12 md:w-auto">
							<h2 className="font-bold text-center text-white text-4xl lg:text-6xl md:text-left relative">
								Portfolio
								<span className="horizontal-line" />
							</h2>
						</div>
						<div className="w-6/12 w-auto" />
						<TabsContainer />
					</Wrapper>
				</Section>
				<Section className="pt-12 pb-24 md:pt-24 md:pb-52">
					<Wrapper className="items-start">
						<TextHeader text={sectionMyCababilities.header} level="2" lineType="underline" />
						<Text color="white" size="3xl" align="center" text={sectionMyCababilities.text} />
						<Section className="skill__content">{skills.map((skill) => <Skill skill={skill} />)}</Section>
					</Wrapper>
				</Section>
				<Section className="bg-darkBlue  pt-12 pb-12 md:pt-24 md:pb-52">
					<Wrapper>
						<TextHeader text={textInSectionWhatSayAboutMe.header} level="2" lineType="underline" />
						<Text color="white" size="3xl" align="center" text={textInSectionWhatSayAboutMe.introduction} />
						<Section className="flex-col items-center justify-center gap-x-12 mt-10  lg:mt-20 md:flex md:flex-row lg:gap-x-24">
							<img
								src={worldWide}
								alt={textInSectionWhatSayAboutMe.header}
								className="w-full md:w-1/2 inline-block mb-10 md:-ml-5"
							/>
							<Text
								align="left"
								size="3xl"
								lineHeight="leading-loose"
								text={textInSectionWhatSayAboutMe.text}
							/>
						</Section>
					</Wrapper>
				</Section>
				<Section className="pb-24 " target="#Contact">
					<Wrapper>
						<TextHeader
							text={sectionLetsMakeSomething.header}
							level="2"
							lineType="vertical-above"
							spaceBetween="mb-14"
						/>
						<Text
							align="center"
							className="max-w-4xl mx-auto leading-loose"
							lineHeight="leading-loose"
							text={sectionLetsMakeSomething.text}
						/>
						<FormHandler className="max-w-6xl mx-auto text-center">
							<div className="gap-y-6 grid-cols-1 grid md:grid-cols-2 md:gap-x-6">
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
						<TextHeader text="Portfolio" level="2" lineType="vertical-above" spaceBetween="mb-14" />
						<div className="row flex divide-x-2 divide-white justify-center py-2 pt-3 md:pt-6">
							{footerLink.map((link) => (
								<LinkScroll scrollTo={link.scrollTo} name={link.text} className={link.className} />
							))}
						</div>
						<div className="footer__content">
							{footerText.map((item) => (
								<a className={item.className} href={item.link}>
									{item.text}
								</a>
							))}
						</div>
						<div className="py-4 gap-x-4 flex justify-center">
							{socialMedia.map((item) => (
								<a className="text-icon" href={item.link}>
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
