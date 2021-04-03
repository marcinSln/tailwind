import tab1 from '../img/tab1.png';
import tab2 from '../img/tab2.png';
import tab3 from '../img/tab3.png';
import tab4 from '../img/tab4.png';
import tab5 from '../img/tab5.png';
import tab6 from '../img/tab6.png';

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
		textonButton: 'Download  CV'
	}
];

export const skills = [
	{
		header: 'Web',
		text: 'Get awesome design services from inkyy.com ',
		image: 'item.svg'
	},
	{
		header: 'JavasScript',
		text: 'Get awesome design services from inkyy.com ',
		image: 'item.svg'
	},
	{
		header: 'Web Design',
		text: 'Get awesome design services from inkyy.com ',
		image: 'item.svg'
	},
	{
		header: 'Web Design',
		text: 'Get awesome design services from inkyy.com ',
		image: 'item.svg'
	},
	{
		header: 'Web Design',
		text: 'Get awesome design services from inkyy.com ',
		image: 'item.svg'
	},
	{
		header: 'Web Design',
		text: 'Get awesome design services from inkyy.com ',
		image: 'item.svg'
	}
];
