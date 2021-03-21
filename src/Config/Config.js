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

const a = { test: 'aa', test: '2' };

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
