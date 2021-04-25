import tab1 from '../img/tab1.jpg';
import tab2 from '../img/tab2.jpg';
import tab3 from '../img/tab3.jpg';
import tab4 from '../img/tab4.jpg';
import tab5 from '../img/tab5.jpg';
import tab6 from '../img/tab6.jpg';

export const tabsHeader = [
	{ name: 'All', isActive: true },
	{ name: 'Logo', isActive: false },
	{ name: 'Websites', isActive: false },
	{ name: 'Mobile Apps', isActive: false }
];

export const OptionContactForm = [
	{ name: '100', value: 100 },
	{ name: '1000', value: 1000 },
	{ name: '2000', value: 2000 },
	{ name: '5000', value: 5000 }
];

export const email = {
	ServiceID: 'service_dgvvi59',
	TemplateID: 'template_mlroj99',
	userID: 'user_wTVrRHWB5JEUqAgB7GOX6'
};

export const tabsContent = [
	{
		name: 'All',
		items: [
			{ src: tab1, header: 'Bigos', text: 'lorem ipsum' },
			{ src: tab2, header: 'Bigos', text: 'lorem' },
			{ src: tab3 },
			{ src: tab6 },
			{ src: tab5 }
		],
		isActive: true
	},
	{
		name: 'Logo',
		items: [ { src: tab2 }, { src: tab3, header: 'Bigos' }, { src: tab6 }, { src: tab5, text: 'ipsum' } ],
		isActive: false
	},
	{ name: 'Websites', items: [ { src: tab2, header: 'Bigos' }, { src: tab3 }, { src: tab6 } ], isActive: false },
	{ name: 'Mobile Apps', items: [ { src: tab2, text: 'text 1' }, { src: tab3 } ], isActive: false }
];

export const textInSectionAboutMe = [
	{
		header: 'About Me',
		introduction: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed 
					do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
					ad minim veniam, quis nostrud exercitation ullamco laboris 
					nisi ut aliquip ex ea commodo consequat`,
		text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		textButton: 'Contact with me',
		scrollTo: '#Contact'
	}
];

export const textInSectionWhatSayAboutMe = {
	header: 'What My Client Says',
	introduction: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
		ut labore et t enim ad minim veniam, quis nostrud exercitation.`,
	text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
			laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto 
			beatae vitae dicta sunt is the most explicabo.`
};

export const sectionMyCababilities = {
	header: 'My Capabilities',
	text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
			  incididunt ut labore et t enim ad minim veniam, quis nostrud exercitation.`
};

export const baner = {
	subtitle: 'Hello, i am',
	header: 'Mark <br/> Reccardo',
	socialMediaHeader: 'Find Me on',
	text: 'A young <span class="text-red text text-xl">UI/UX</span> designer with crazy for mobile & web design.',
	buttons: [
		{ text: 'Hire me', className: 'btn btn--red btn--rounded', link: '#Contact' },
		{ text: 'Portfolio', className: 'btn btn--transparent', link: '#Portfolio' }
	]
};

export const sectionLetsMakeSomething = {
	header: 'Let’s Make Something </br> Great Together',
	text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
			   sed do eiusmod tempor incididunt ut labore et t enim ad minim veniam, 
			   quis nostrud exercitation.`
};

export const footerLink = [
	{ text: 'About', className: 'footer__text', scrollTo: '#About' },
	{ text: 'Portfolio', className: 'footer__text', scrollTo: '#Portfolio' },
	{ text: 'Kontakt', className: 'footer__text', scrollTo: '#Contact' }
];

export const HeaderLinks = [
	{ text: 'About', className: 'footer__text', scrollTo: '#About' },
	{ text: 'Portfolio', className: 'footer__text', scrollTo: '#Portfolio' },
	{ text: 'Kontakt', className: 'footer__text', scrollTo: '#Contact' }
];

export const footerText = [
	{ text: 'NY', className: 'footer__text', link: null },
	{ text: '538 756 519', className: 'footer__text', link: 'tel:538756519' },
	{ text: 'marcin.smolen.774@gmail.com', className: 'footer__text', link: 'mailto:marcin.smolen.774@gmail.com' }
];

export const socialMedia = [
	{ icon: 'fa fa-behance', link: 'https://www.facebook.com' },
	{ icon: 'fa fa-dribbble', link: 'https://www.dribble.com' },
	{ icon: 'fa fa-instagram', link: 'https://www.instagram.com' },
	{ icon: 'fa fa-pinterest', link: 'https://www.pinterest.com' }
];

export const skills = [
	{
		header: 'JavaScript',
		text: 'Get awesome design services from inkyy.com ',
		image: 'item.svg'
	},
	{
		header: 'CSS3',
		text: 'Get awesome design services from inkyy.com ',
		image: 'item.svg'
	},
	{
		header: 'JQuery',
		text: 'Get awesome design services from inkyy.com ',
		image: 'item.svg'
	},
	{
		header: 'React',
		text: 'Get awesome design services from inkyy.com ',
		image: 'item.svg'
	},
	{
		header: 'React Native',
		text: 'Get awesome design services from inkyy.com ',
		image: 'item.svg'
	}
];
