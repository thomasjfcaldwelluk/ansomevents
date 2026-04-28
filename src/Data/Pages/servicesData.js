import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import AllInboxOutlinedIcon from '@mui/icons-material/AllInboxOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';

const servicesData = {
	hero: {
		title: 'Services We Offer At Ansom Events',
		text: 'Expert support From Ansom.',
		description:
			'At Ansom Events we do not just organise, style & manage your events.We also offer a range of other services such as design/ print services, day-of coordination to full event planning to support your event needs.',
		image:
			'https://res.cloudinary.com/djjqsmlei/image/upload/e_auto_enhance/v1776086914/Ansom%20Events/servicesNew_kcrbls.webp',
	},
	services: [
		{
			title: 'Print & Design Services',
			icon: PrintOutlinedIcon,
			description:
				'Do you have invites to send out? Does your event need signage? We’ve got you covered—from design and print to those all-important finishing touches that tie everything together.',
			image:
				'https://res.cloudinary.com/djjqsmlei/image/upload/v1775070904/Ansom%20Events/DesignPrint/printServices1_nsc1ct.webp',
		},
		{
			title: 'Ansom & Easy',
			icon: AllInboxOutlinedIcon,
			description:
				'Ansom & Easy is a service where you can use our supplies to host your event. Want to save money or your event is on location, save time by telling us what supplies you need and we can pack them up for you.',
			image:
				'https://res.cloudinary.com/djjqsmlei/image/upload/v1777387617/Ansom%20Events/AnsomAndEasy/ansomAndEasy_t5sjis.webp',
		},
		{
			title: 'Vendor Coordination',
			icon: InventoryOutlinedIcon,
			description:
				'Have you already booked your event but need support bringing everything together? From catering and music to photographers and more, we’ll use our trusted network of suppliers to handle every detail—from booking through to setup and arrival.',
			image:
				'https://res.cloudinary.com/djjqsmlei/image/upload/v1775070301/Ansom%20Events/Services/VendorCoOrdination_noavda.webp',
		},
	],
	cta: {
		title: 'Need support with your event?',
		buttonText: 'Get Started',
		link: '/contact',
	},
};
export default servicesData;
