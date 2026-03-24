import { ReactComponent as DayOfCoordinationIcon } from '../../Assets/SVG/eventPlanning.svg';
import { ReactComponent as PrintServicesIcon } from '../../Assets/SVG/PrintServices.svg';
import { ReactComponent as SetUpIcon } from '../../Assets/SVG/SetUp.svg';

const servicesData = {
	hero: {
		title: 'Our Services',
		text: 'Professional help to make your event seamless, stylish and stress-free.',
		description:
			'At Ansom Events we do not just organize, style & manage your events we also offer a range of other services such as design and print services to day-of coordination, we offer a range of services to support your event needs. Below is a list of support services we offer, if you do not see what you need please reach out to us and we can discuss how we can support your event needs.',
		image:
			'https://res.cloudinary.com/djjqsmlei/image/upload/v1774278007/Ansom%20Events/HeroImage.3_fpoww8.webp',
	},
	services: [
		{
			title: 'Print & Design Services',
			icon: PrintServicesIcon,
			description: '...',
			image:
				'https://res.cloudinary.com/djjqsmlei/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1770206788/Ansom%20Events/DesignPrint/designPrintOne_oluesk.webp',
		},
		{
			title: 'Ansom & Easy',
			icon: SetUpIcon,
			description: '...',
			image:
				'https://res.cloudinary.com/djjqsmlei/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1770206835/Ansom%20Events/AnsomAndEasy/partyPackTwo_vlmkia.webp',
		},
		{
			title: 'Vendor Coordination',
			icon: DayOfCoordinationIcon,
			description: '...',
			image:
				'https://res.cloudinary.com/djjqsmlei/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1770206835/Ansom%20Events/AnsomAndEasy/partyPackTwo_vlmkia.webp',
		},
	],
	cta: {
		title: 'Need support with your event?',
		buttonText: 'Get Started',
		link: '/contact',
	},
};
export default servicesData;
