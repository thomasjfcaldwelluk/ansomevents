import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import CurtainsOutlinedIcon from '@mui/icons-material/CurtainsOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import ChairAltOutlinedIcon from '@mui/icons-material/ChairAltOutlined';

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
				icon: CelebrationOutlinedIcon,
				text: 'Full Venue Styling',
			},
			{
				id: 2,
				icon: ChairAltOutlinedIcon,
				text: 'Ceremony & Reception Set Up',
			},
			{
				id: 3,
				icon: CurtainsOutlinedIcon,
				text: 'Prop, Backdrops & Florals',
			},
			{
				id: 4,
				icon: InventoryOutlinedIcon,
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
						text: 'Styling for 4 guest tables + top couple’s table including - Table runners, faux white florals/greenery, LED candles',
					},
				],
			},
			{
				id: 2,
				label: 'Most Popular',
				name: 'Signature',
				price: {
					amount: 600,
					display: 'from £550',
				},
				includes: [
					{
						text: 'Everything included in the Essential Package PLUS',
						bold: true,
					},
					{ text: 'Styling for 8 guest tables' },
					{ text: 'Artificial Floral Horn Arch(Green & White)' },
				],
			},
			{
				id: 3,
				label: 'The Ultimate Celebration',
				name: 'Luxury',
				price: {
					amount: 750,
					display: 'from £750',
				},
				includes: [
					{
						text: 'Everything included in the Essential & Signature Packages PLUS',
						bold: true,
					},
					{
						text: 'Styling for up to 8 guest tables',
					},
					{ text: 'Chair covers & bows for up to 80 seats' },
					{ text: 'Artificial Floral Horn Arch(Green & White)' },
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
				price: { amount: 15, display: 'from £15' },
			},
			{
				id: 2,
				image:
					'https://res.cloudinary.com/djjqsmlei/image/upload/c_pad,b_gen_fill,ar_4:3/v1773833429/Ansom%20Events/weddingSweetCart_ualkep.webp',
				name: 'Sweet cart',
				price: { amount: 150, display: 'from £150' },
			},
			{
				id: 3,
				image:
					'https://res.cloudinary.com/djjqsmlei/image/upload/v1774962339/Ansom%20Events/welcomeSign_ukcwwc.webp',
				name: 'Welcome easel',
				price: { amount: 75, display: 'from £75' },
			},
			{
				id: 4,
				image:
					'https://res.cloudinary.com/djjqsmlei/image/upload/v1775062934/Ansom%20Events/extraFlorals_hrcubt.webp',
				name: 'Extra florals',
				price: { amount: 200, display: 'Price on Request' },
			},
		],
	},
};

export default weddingData;
