import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import AllInboxOutlinedIcon from '@mui/icons-material/AllInboxOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';

const servicesData = {
	hero: {
		title: 'Our Services',
		text: 'Expert support to keep your event seamless, stylish, and effortlessly Ansom.',
		description:
			'At Ansom Events we do not just organize, style & manage your events we also offer a range of other services such as design and print services to day-of coordination, we offer a range of services to support your event needs. Below is a list of support services we offer, if you do not see what you need please reach out to us and we can discuss how we can support your event needs.',
		image:
			'https://res.cloudinary.com/djjqsmlei/image/upload/v1770204685/Ansom%20Events/Gallery/newGalleryLong2_guqx9f.webp',
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
				'Ansom & Easy is a service where you can use our supplies to host your event. Want to save money or your event is on location, save time by telling us what supplies you need and we can pack it them up for you.',
			image:
				'https://res.cloudinary.com/djjqsmlei/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1770206835/Ansom%20Events/AnsomAndEasy/partyPackTwo_vlmkia.webp',
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
