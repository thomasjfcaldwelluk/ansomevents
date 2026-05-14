import ansomLogo from '../../Assets/Logo/AnsomEventsLogoForWeb.svg';
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';

const footerData = {
	company: {
		logo: ansomLogo,
		address: ['Saltash, Cornwall'],
	},
	contact: {
		phone: '+44 7310 009764',
		email: 'info@ansomevents.com',
	},
	socials: {
		links: [
			{
				name: 'Facebook',
				url: 'https://www.facebook.com/ansomevents',
				icon: Facebook,
				ariaLabel: 'Visit our Facebook page',
				title: 'Ansom Events Facebook',
				rel: 'noopener noreferrer',
			},
			{
				name: 'Instagram',
				url: 'https://www.instagram.com/ansomevents',
				icon: Instagram,
				ariaLabel: 'Visit our Instagram page',
				title: 'Ansom Events Instagram',
				rel: 'noopener noreferrer',
			},
			{
				name: 'Whatsapp',
				url: 'https://wa.me/447310009764',
				icon: WhatsApp,
				ariaLabel: 'Chat with us on WhatsApp',
				title: 'Ansom Events WhatsApp',
				rel: 'noopener noreferrer',
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
