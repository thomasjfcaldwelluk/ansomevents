const footerData = {
	company: {
		logo: '/images/logo.svg',
		address: ['Ansom Events', 'Saltash, Cornwall', 'United Kingdom'],
	},
	contact: {
		phone: '+44 1234 567890',
		email: 'info@ansomevents.com',
	},
	socials: {
		links: [
			{
				name: 'Facebook',
				url: 'https://www.facebook.com/ansomevents',
				icon: 'facebook',
			},
			{
				name: 'Instagram',
				url: 'https://www.instagram.com/ansomevents',
				icon: 'instagram',
			},
			{
				name: 'Whatsapp',
				url: 'https://wa.me/441234567890',
				icon: 'whatsapp',
			},
		],
	},
	legal: [
		{
			id: 'privacy',
			label: 'Privacy Policy',
			type: 'page',
			path: '/privacy-policy',
		},
		{
			id: 'terms',
			label: 'Terms of Service',
			type: 'page',
			path: '/terms-of-service',
		},
		{
			id: 'cookies',
			label: 'Cookie Policy',
			type: 'page',
			path: '/cookie-policy',
		},
	],
	copyright: `© ${new Date().getFullYear()} Ansom Events. All rights reserved.`,
};
export default footerData;
