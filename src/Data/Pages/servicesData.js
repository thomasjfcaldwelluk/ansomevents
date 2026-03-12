import { ReactComponent as DayOfCoordinationIcon } from '../../Assets/SVG/eventPlanning.svg';
import { ReactComponent as VenueLayoutIcon } from '../../Assets/SVG/venueLayout.svg';
import { ReactComponent as PrintServicesIcon } from '../../Assets/SVG/PrintServices.svg';
import { ReactComponent as SetUpIcon } from '../../Assets/SVG/SetUp.svg';

const servicesData = {
	hero: {
		title: 'Our Services',
		text: 'Professional help to make your event seamless, stylish and stress-free.',
	},
	services: [
		{
			type: 'image',
			image:
				'https://res.cloudinary.com/djjqsmlei/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1709161608/veggieBox_lolz9l.jpg',
		},
		{ type: 'text', title: 'Business Card Design', description: '...' },
		{
			type: 'image',
			image:
				'https://res.cloudinary.com/djjqsmlei/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1709161608/veggieBox_lolz9l.jpg',
		},

		{ type: 'text', title: 'Logo Branding', description: '...' },
		{
			type: 'image',
			image:
				'https://res.cloudinary.com/djjqsmlei/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1709161608/veggieBox_lolz9l.jpg',
		},
		{ type: 'text', title: 'Brand Identity', description: '...' },
	],
	cta: {
		title: 'Need support with your event?',
		buttonText: 'Get Started',
		link: '/contact',
	},
};
export default servicesData;
