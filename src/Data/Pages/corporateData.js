import ChairAltOutlinedIcon from '@mui/icons-material/ChairAltOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import CurtainsOutlinedIcon from '@mui/icons-material/CurtainsOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import EggOutlinedIcon from '@mui/icons-material/EggOutlined';

const corporateData = {
	hero: {
		id: 'corporate-hero',
		title: 'Corporate Events',
		subtitle: 'Styled Without Stress',
		primaryCta: {
			label: 'Make an Enquiry',
			link: '/contact',
		},
		secondaryCta: {
			label: 'View Services',
			link: '#services',
		},
		image:
			'https://res.cloudinary.com/djjqsmlei/image/upload/v1774275155/Ansom%20Events/HeroImage.1_bdagis.webp',
		alt: 'An example of a corporate event styled by Ansom Events',
	},

	trust: [
		{ id: 1, text: 'Professional & reliable' },
		{ id: 2, text: 'Fast communication' },
		{ id: 3, text: 'On-time installation' },
		{ id: 4, text: 'Cornwall based team' },
	],

	services: {
		id: 'corporate-services',
		title: 'What We Do',
		intro: 'Below are the services that we provide to compliment your event',
		items: [
			{
				id: 1,
				title: 'Venue styling',
				icon: ChairAltOutlinedIcon,
				text: 'Professional venue styling to create the perfect atmosphere for your corporate event.',
			},
			{
				id: 2,
				title: 'Branded Décor',
				icon: ChairOutlinedIcon,
				text: 'Custom branded décor to showcase your company’s identity and make a lasting impression.',
			},
			{
				id: 3,
				title: 'Balloon Installations',
				icon: EggOutlinedIcon,
				text: 'Eye-catching balloon installations to add a touch of fun and creativity to your corporate event.',
			},
			{
				id: 4,
				title: 'Backdrops & Staging',
				icon: CurtainsOutlinedIcon,
				text: 'Professional backdrops and staging to enhance the visual appeal of your corporate event.',
			},
			{
				id: 5,
				title: 'Full Event Design',
				icon: CelebrationOutlinedIcon,
				text: 'Comprehensive event design and management services to ensure a seamless and successful corporate event.',
			},
			{
				id: 6,
				title: 'Day-Of Event Coordination',
				icon: InventoryOutlinedIcon,
				text: 'Professional day-of event coordination to ensure a smooth and successful corporate event.',
			},
		],
	},
	support: {
		id: 'corporate-support',
		title: 'How We Support Your Event',
		intro:
			'From first concept to final pack-down, we work alongside your team to deliver a smooth, professional experience.',
		image:
			'https://res.cloudinary.com/djjqsmlei/image/upload/v1770204675/Ansom%20Events/Gallery/newGallerySq1_mjh9aq.webp',
		alt: 'An example of a corporate event styled by Ansom Events',

		eventTypes: [
			'Product launches',
			'Corporate celebrations',
			'Networking events',
			'Seasonal parties',
		],

		benefits: [
			'Clear, transparent quotations',
			'Experienced professional team',
			'Flexible, scalable packages',
			'Calm, stress-free delivery',
		],
	},
	cta: {
		id: 'call-to-action',
		title: 'Let’s plan your next company event',
		subtitle: 'Tell us what you need and we’ll handle the rest.',
		button: {
			label: 'Get a Quote',
			link: '/contact',
		},
	},
};

export default corporateData;
