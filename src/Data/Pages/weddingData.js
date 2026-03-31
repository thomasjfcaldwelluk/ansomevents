import { ReactComponent as PropIcon } from '../../Assets/SVG/props.svg';
import { ReactComponent as DayOfCoordinationIcon } from '../../Assets/SVG/eventPlanning.svg';
import { ReactComponent as WeddingSetUpIcon } from '../../Assets/SVG/WeddingSetUp.svg';
import { ReactComponent as FullStylingIcon } from '../../Assets/SVG/FullVenue.svg';

const weddingData = {
	hero: {
		title: 'Love Celebrations',
		subtitle: 'Make Memories',
		image:
			'https://res.cloudinary.com/djjqsmlei/image/upload/v1774278002/Ansom%20Events/HeroImage.2_mtewtu.webp',
		ctas: [
			{
				id: 'view-packages',
				label: 'View Packages',
				link: '#packages',
			},
			{
				id: 'check-date',
				label: 'Check Availability',
				link: '/contact',
			},
		],
	},

	helpWith: {
		title: 'How We Can Help',
		intro:
			'From styling to coordination, we’re here to help bring your event together seamlessly.',
		items: [
			{
				id: 1,
				icon: FullStylingIcon,
				text: 'Full Venue Styling',
			},
			{
				id: 2,
				icon: WeddingSetUpIcon,
				text: 'Ceremony & Reception Set Up',
			},
			{
				id: 3,
				icon: PropIcon,
				text: 'Prop, Backdrops & Florals',
			},
			{
				id: 4,
				icon: DayOfCoordinationIcon,
				text: 'On-The-Day Coordination',
			},
		],
	},

	packages: {
		title: 'Our Wedding Packages',
		intro:
			'We’ve created a range of packages to get you started, all of which can be tailored to suit your event.',
		items: [
			{
				id: 1,
				label: 'Beautifully Simple',
				name: 'Essential',
				price: {
					amount: 350,
					display: 'from £350',
				},
				includes: [
					{ text: 'Welcome sign with easel' },
					{ text: 'Card box with simple table décor' },
					{
						text: 'Your choice of one photo backdrop:',
						bullet: false,
						bold: true,
					},
					{
						text: 'Either Arch with fabric & faux florals or Sailboard with balloon garland or Shimmer wall with balloon garland',
					},
					{
						text: 'Styling for 5 guest tables + top couple’s table including - Table runners, faux white florals/greenery, LED candles',
					},
				],
			},
			{
				id: 2,
				label: 'Most Popular',
				name: 'Signature',
				price: {
					amount: 350,
					display: 'from £350',
				},
				includes: [
					{
						text: 'Everything included in the Essential Package PLUS',
						bold: true,
					},
					{ text: 'Styling for 8 guest tables' },
					{ text: 'Light-up LOVE sign or Seating Plan sign' },
				],
			},
			{
				id: 3,
				label: 'The Ultimate Celebration',
				name: 'Luxury',
				price: {
					amount: 350,
					display: 'from £350',
				},
				includes: [
					{
						text: 'Everything included in the Essential & Signature Packages PLUS',
						bold: true,
					},
					{
						text: 'Styling for up to 10 guest tables',
					},
					{ text: 'Chair covers & bows for up to 80 seats' },
					{ text: 'Both Love Sign & Seating plan sign' },
				],
			},
		],
	},

	addOns: {
		title: 'Enhance Your Package',
		intro:
			'Looking to add the finishing touches to your event? Take a look at our range of special add-ons.',
		items: [
			{
				id: 1,
				image:
					'https://res.cloudinary.com/djjqsmlei/image/upload/v1773833429/Ansom%20Events/WeddingNeonSign_ywkfp4.webp',
				name: 'Neon signs',
				price: { amount: 100, display: 'from £100' },
			},
			{
				id: 2,
				image:
					'https://res.cloudinary.com/djjqsmlei/image/upload/v1773833429/Ansom%20Events/weddingSweetCart_ualkep.webp',
				name: 'Sweet cart',
				price: { amount: 150, display: 'from £150' },
			},
			{
				id: 3,
				image:
					'https://res.cloudinary.com/djjqsmlei/image/upload/v1773833429/Ansom%20Events/weddingWelcomeSign_ldk3yq.webp',
				name: 'Welcome easel',
				price: { amount: 75, display: 'from £75' },
			},
			{
				id: 4,
				image:
					'https://res.cloudinary.com/djjqsmlei/image/upload/v1773833429/Ansom%20Events/weddingExtraFlorals_bflfmb.webp',
				name: 'Extra florals',
				price: { amount: 200, display: 'from £200' },
			},
		],
	},
};

export default weddingData;
