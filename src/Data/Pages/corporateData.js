import { ReactComponent as PropIcon } from '../../Assets/SVG/props.svg';
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
			'https://res.cloudinary.com/djjqsmlei/image/upload/v1773167103/Ansom%20Events/corpEvent_ocbxic.webp',
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
		items: [
			{
				id: 1,
				title: 'Venue styling',
				icon: PropIcon,
				text: 'Professional venue styling to create the perfect atmosphere for your corporate event.',
			},
			{
				id: 2,
				title: 'Branded Décor',
				icon: PropIcon,
				text: 'Custom branded décor to showcase your company’s identity and make a lasting impression.',
			},
			{
				id: 3,
				title: 'Balloon Installations',
				icon: PropIcon,
				text: 'Eye-catching balloon installations to add a touch of fun and creativity to your corporate event.',
			},
			{
				id: 4,
				title: 'Backdrops & Staging',
				icon: PropIcon,
				text: 'Professional backdrops and staging to enhance the visual appeal of your corporate event.',
			},
			{
				id: 5,
				title: 'Full Event Design',
				icon: PropIcon,
				text: 'Comprehensive event design and management services to ensure a seamless and successful corporate event.',
			},
			{
				id: 6,
				title: 'Day-Of Event Coordination',
				icon: PropIcon,
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
