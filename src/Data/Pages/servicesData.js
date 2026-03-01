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
			id: 1,
			title: 'Day-of Coordination',
			text: 'We Manage suppliers, timelines and logistics so you can enjoy the day.',
			icon: DayOfCoordinationIcon,
		},
		{
			id: 2,
			title: 'Venue Layout & Styling Plans',
			text: 'Visual planning to ensure the space flows and looks incredible.',
			icon: VenueLayoutIcon,
		},
		{
			id: 3,
			title: 'Design & Print',
			text: 'Menus, welcome signs, seating plans and more.',
			icon: PrintServicesIcon,
		},
		{
			id: 4,
			title: 'Setup & Collection',
			text: 'Professional installation and pack down of hired items.',
			icon: SetUpIcon,
		},
	],
	cta: {
		title: 'Need support with your event?',
		buttonText: 'Get Started',
		link: '/contact',
	},
};
export default servicesData;
