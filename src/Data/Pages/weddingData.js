const weddingData = {
	hero: {
		title: 'Filler Text',
		subtitle: 'Filler Text',
		image: 'https://res.cloudinary.com/your-image.jpg',
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
		items: [
			{
				id: 1,
				icon: 'FaGlassCheers',
				text: 'Full Venue Styling',
			},
			{
				id: 2,
				icon: 'FaChair',
				text: 'Ceremony & Reception Set Up',
			},
			{
				id: 3,
				icon: 'FaCameraRetro',
				text: 'Prop, Backdrops & Florals',
			},
			{
				id: 4,
				icon: 'FaGem',
				text: 'On-The-Day Coordination',
			},
		],
	},

	packages: {
		title: 'Our Wedding Packages',
		items: [
			{
				id: 1,
				name: 'Essential',
				price: {
					amount: 350,
					display: 'from £350',
				},
				includes: [
					{ text: 'Welcome sign with easel' },
					{ text: 'Card box with simple table décor' },
					{ text: 'Your choice of one photo backdrop:', bullet: false },
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
		items: [
			{ id: 1, image: '', name: 'Neon signs' },
			{ id: 2, image: '', name: 'Sweet cart' },
			{ id: 3, image: '', name: 'Welcome easel' },
			{ id: 4, image: '', name: 'Extra florals' },
		],
	},
};

export default weddingData;
