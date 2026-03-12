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
			},
			{
				name: 'Instagram',
				url: 'https://www.instagram.com/ansomevents',
				icon: Instagram,
			},
			{
				name: 'Whatsapp',
				url: 'https://wa.me/441234567890',
				icon: WhatsApp,
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
