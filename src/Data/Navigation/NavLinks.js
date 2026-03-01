const navLinks = [
	{
		id: 'home',
		label: 'Home',
		type: 'page', // page | anchor | external
		path: '/',
		showInNav: true,
		showInMobile: true,
		showInFooter: true,
	},
	{
		id: 'services',
		label: 'Services',
		type: 'page',
		path: '/services',
		showInNav: true,
		showInMobile: true,
		showInFooter: true,
	},
	{
		id: 'corporate',
		label: 'Corporate Events',
		type: 'page',
		path: '/corporate',
		showInNav: true,
		showInMobile: true,
		showInFooter: true,
	},
	{
		id: 'weddings',
		label: 'Weddings',
		type: 'page',
		path: '/weddings',
		showInNav: true,
		showInMobile: true,
		showInFooter: true,
	},

	{
		id: 'decor',
		label: 'Décor',
		type: 'page',
		path: '/decor',
		showInNav: true,
		showInMobile: true,
		showInFooter: true,
	},
	{
		id: 'about',
		label: 'About Us',
		type: 'page',
		path: '/about-us',
		showInNav: false,
		showInMobile: false,
		showInFooter: true,
	},

	{
		id: 'gallery',
		label: 'Gallery',
		type: 'page',
		path: '/gallery',
		showInNav: true,
		showInMobile: true,
		showInFooter: true,
	},

	{
		id: 'contact',
		label: 'Contact Us',
		type: 'page',
		path: '/contact-us',
		showInNav: true,
		showInMobile: true,
		showInFooter: true,
		button: true, // special styling
	},
	{
		id: 'faqs',
		label: 'FAQs',
		type: 'page',
		path: '/faqs',
		showInNav: false,
		showInMobile: false,
		showInFooter: true,
	},
	// FUTURE → scroll to section example
	{
		id: 'testimonials',
		label: 'Testimonials',
		type: 'anchor',
		path: '/#testimonials',
		showInNav: false,
		showInMobile: false,
		showInFooter: true,
	},
];
export default navLinks;
