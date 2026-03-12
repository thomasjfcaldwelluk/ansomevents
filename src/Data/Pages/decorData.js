const decorData = {
	packages: {
		id: 'decor-packages',
		title: 'Packages',
		intro: '',
		grid: { size: { sm: 12, md: 6 } },
		items: [
			{
				id: 'ansom-signature',
				label: 'Signature Package',
				title: 'Ansom Signature',
				description:
					'Our most complete and statement-making décor package, designed to transform your space and create a true focal point for your celebration. Perfect for larger events where impact, layering and detail matter.',

				includes: [
					{
						text: 'Feature backdrop (Twinkle Wall) with balloon garland',
						weight: 'bold',
					},
					{
						text: 'Secondary backdrop choice: Circle Arch or Sailboard with balloon garland',
						weight: 'bold',
					},
					{
						text: 'Pedestal with styled vase & arrangement',
					},
					{
						text: 'Selection of up to 3 non-chrome balloon colours',
					},
					{
						text: 'Feature statement chair',
					},
					{
						text: 'Customisable display boxes (wording or theme adjusted to suit your event)',
					},
					{
						text: 'Personalised sign or statement phrase (event-appropriate wording)',
					},
				],
				price: {
					amount: 350,
					display: 'from £350',
				},
				cta: {
					label: 'Enquire Now',
					link: '/contact-us',
				},
			},
			{
				id: 'ansom-deluxe',
				label: 'Deluxe Package',
				title: 'Ansom Deluxe',
				description:
					'A beautifully balanced package offering style, structure and visual interest. Ideal for celebrations that want a polished, cohesive look without feeling overdone.',
				includes: [
					{
						text: 'Choice of backdrop: Twinkle Wall, Circle Arch or Sailboard with balloon garland',
						weight: 'bold',
					},
					{
						text: 'Pedestal with styled vase & arrangement',
					},
					{
						text: 'Feature statement chair',
					},
					{
						text: 'Customisable display boxes (event wording tailored to suit)',
					},
					{
						text: 'Selection of up to 3 non-chrome balloon colours',
					},
					{
						text: 'Personalised sign or statement phrase (event-appropriate wording)',
					},
				],
				price: {
					amount: 200,
					display: 'from £350',
				},
				cta: {
					label: 'Enquire Now',
					link: '/contact-us',
				},
			},
			{
				id: 'ansom-classic',
				label: 'Classic Package',
				title: 'Ansom Classic',
				description:
					'A stylish, versatile package designed to elevate smaller celebrations or intimate spaces. Clean, coordinated and effortlessly elegant.',
				includes: [
					{
						text: 'Sailboard backdrop with balloon garland',
						weight: 'bold',
					},
					{
						text: 'Display boxes or Pedestal with styled vase & arrangement',
					},
					{
						text: 'Selection of up to 3 non-chrome balloon colours',
					},
					{
						text: 'Personalised sign or statement phrase',
					},
				],
				price: {
					amount: 175,
					display: 'from £175',
				},
				cta: {
					label: 'Enquire Now',
					link: '/contact-us',
				},
			},
			{
				id: 'ansom-basic',
				label: 'Basic Package',
				title: 'Ansom Basic',
				description:
					'A simple yet impactful décor package that adds charm and structure to your event. Ideal for relaxed gatherings, home celebrations or smaller venues.',
				includes: [
					{
						text: 'Wicker divider with balloon cluster',
						weight: 'bold',
					},
					{
						text: 'Feature statement chair',
					},
					{
						text: 'Pedestal with styled vase & arrangement',
					},
					{
						text: 'Balloon-accented display boxes',
					},
					{
						text: 'Customisable bunting or small statement signage',
					},
				],
				price: {
					amount: 125,
					display: 'from £125',
				},
				cta: {
					label: 'Enquire Now',
					link: '/contact-us',
				},
			},
		],
	},
	backdrops: {
		id: 'backdrops',
		title: 'Backdrops',
		intro:
			'If you’re looking for just a backdrop, we’ve got you covered! Choose from shimmer, fringe, or classic plain white. We also offer hoop designs—full or half—for a stunning event feature!',
		grid: { size: { sm: 12, md: 4 } },
		items: [
			{
				id: 'shimmer-wall',
				image:
					'https://res.cloudinary.com/djjqsmlei/image/upload/v1771419013/Ansom%20Events/Events/shimmerPackage_wc7jsm.webp',
				title: 'Shimmer Wall With Stand',
				description:
					'Transform your event with our 5x6 stand and shimmer backdrop. Customize with balloon garlands for a stunning, elegant focal point, perfect for photos and special occasions.',
				includes: [
					{
						text: '5ft by 6ft Stand',
					},
					{ text: 'Shimmer Backdrop' },
					{ text: 'Balloon Garland' },
				],
			},
			{
				id: 'fringe-wall',
				image:
					'https://res.cloudinary.com/djjqsmlei/image/upload/v1771419013/Ansom%20Events/Events/fringePackage_dnylv6.webp',
				title: 'Fringe Wall With Stand',
				description:
					'Enhance your event with a 6x6 stand and fringe backdrop. Add balloon garlands for a vibrant centerpiece, perfect for photos and bringing flair to any celebration',
				includes: [
					{
						text: '6ft by 6ft Stand',
					},
					{ text: 'Fringe Backdrop' },
					{ text: 'Balloon Garland' },
				],
			},
			{
				id: 'Hoop Balloon Garland',
				image:
					'https://res.cloudinary.com/djjqsmlei/image/upload/v1770204793/Ansom%20Events/BalloonDisplay/fullHoop_gzhizw.webp',
				title: 'Hoop Balloon Garland',
				description:
					'Create a stunning focal point with a full or half hoop balloon garland. A stylish, customizable addition, perfect for photos and enhancing any celebration or special gathering.',
				includes: [
					{
						text: '6ft by 6ft Stand',
					},
					{ text: '2m by 2m Hoop Stand' },
					{ text: 'Balloon Garland' },
				],
			},
		],
	},
	props: {
		id: 'props',
		title: 'Props',
		intro:
			'Enhance your event with our stunning add-on décor! From elegant peacock chairs to stylish props, custom signs, and so much more, we have the perfect extras to complete your setup.',
		grid: { size: { sm: 6, md: 3 } },
		items: [
			{
				id: '4ft-light-up-letters',
				image:
					'https://res.cloudinary.com/djjqsmlei/image/upload/v1771420239/Ansom%20Events/BalloonDisplay/light-up-number_ddtqoi.webp',
				title: '4ft Light Up Letters',
				price: {
					amount: 125,
					display: 'from £125',
				},
			},
			{
				id: 'Happy Birthday Sign',
				image:
					'https://res.cloudinary.com/djjqsmlei/image/upload/v1772717371/Ansom%20Events/Props/happyBirthdaySign_jnnf5q.webp',
				title: 'Happy Birthday Sign',
				price: {
					amount: 5,
					display: 'from £5',
				},
			},
			{
				id: 'baby-name-sign',
				image:
					'https://res.cloudinary.com/djjqsmlei/image/upload/v1772717370/Ansom%20Events/Props/ohBabySign_a3gr7n.webp',
				title: 'Baby Name Sign',
				price: {
					amount: 5,
					display: 'from £5',
				},
			},
			{
				id: 'peacock-chair',
				image:
					'https://res.cloudinary.com/djjqsmlei/image/upload/v1772717371/Ansom%20Events/Props/peacockChair_dasemb.webp',
				title: 'Peacock Chair',
				price: {
					amount: 75,
					display: 'from £75',
				},
			},
			{
				id: 'Decor Pedestal',
				image:
					'https://res.cloudinary.com/djjqsmlei/image/upload/v1772717371/Ansom%20Events/Props/vase_nikhqw.webp',
				title: 'Decor Pedestal',
				price: {
					amount: 25,
					display: 'from £25',
				},
			},
			{
				id: 'cardboard-display',
				image:
					'https://res.cloudinary.com/djjqsmlei/image/upload/v1770204786/Ansom%20Events/BalloonDisplay/characterCutout_yz1qnn.webp',
				title: 'Cardboard Display',
				price: {
					amount: 25,
					display: 'from £25',
				},
			},
		],
	},
	balloons: {
		id: 'balloons',
		title: 'Balloons Displays',
		intro:
			'Our bespoke balloon displays are the perfect way to make your event stand out. From elegant garlands to playful stacks and striking installations, we tailor each design to suit your theme and space. Ideal for weddings, parties, and special occasions of all kinds!',
		grid: { size: { sm: 6, md: 3 } },
		items: [
			{
				id: 'single-stack',
				image:
					'https://res.cloudinary.com/djjqsmlei/image/upload/v1770204778/Ansom%20Events/BalloonDisplay/Single_Stack_qkd1us.webp',
				title: 'Single Stack',
				// description:
				// 	'A large foil balloon stack makes a bold statement with vibrant metallic balloons, available as a single or double stack to create a striking, high-impact focal point at your event.',
				price: {
					amount: 25,
					display: 'from £25',
				},
			},
			{
				id: 'double-stack',
				image:
					'https://res.cloudinary.com/djjqsmlei/image/upload/v1770204777/Ansom%20Events/BalloonDisplay/doubleStack_rcrigw.webp',
				title: 'Double Stack',
				// description:
				// 	'A large foil balloon stack makes a bold statement with vibrant metallic balloons, available as a single or double stack to create a striking, high-impact focal point at your event.',
				price: {
					amount: 50,
					display: 'from £50',
				},
			},
			{
				id: 'welcome-sign-with-balloon-garland',
				image:
					'https://res.cloudinary.com/djjqsmlei/image/upload/v1770204783/Ansom%20Events/BalloonDisplay/WelcomeSign_ewmfny.webp',
				title: 'Welcome Sign With Balloon Garland',
				// description:
				// 	'A stylish welcome sign with a matching balloon garland. Perfect for creating a warm and festive entrance at your event.',
				price: {
					amount: 110,
					display: 'from £110',
				},
			},
			{
				id: 'easel-sign-with-balloon-garland',
				image:
					'https://res.cloudinary.com/djjqsmlei/image/upload/v1770204782/Ansom%20Events/BalloonDisplay/easelSign_g8wfuj.webp',
				title: 'Easel Sign With Balloon Garland',
				// description:
				// 	'A stylish easel sign with a matching balloon garland. Perfect for creating a warm and festive entrance at your event.',
				price: {
					amount: 90,
					display: 'from £90',
				},
			},
			{
				id: 'single-light-up-letter-number-with-balloon-garland',
				image:
					'https://res.cloudinary.com/djjqsmlei/image/upload/v1770204777/Ansom%20Events/BalloonDisplay/lightUpSmallGarland_no10y2.webp',
				title: 'Single Light Up Letter/Number With Balloon Garland',
				// description:
				// 	'A single light-up letter or number with a matching balloon garland. Perfect for creating a personalized and festive focal point at your event.',
				price: {
					amount: 85,
					display: 'from £85',
				},
			},
			{
				id: 'double-light-up-letter-number-with-balloon-garland',
				image:
					'https://res.cloudinary.com/djjqsmlei/image/upload/v1770204775/Ansom%20Events/BalloonDisplay/lightUpBigGarland_d2bort.webp',
				title: 'Double Light Up Letter/Number With Balloon Garland',
				// description:
				// 	'Two light-up letters or numbers with a matching balloon garland. Perfect for creating a personalized and festive focal point at your event.',
				price: {
					amount: 110,
					display: 'from £110',
				},
			},
			{
				id: 'single-sailboard',
				image:
					'https://res.cloudinary.com/djjqsmlei/image/upload/v1770204781/Ansom%20Events/BalloonDisplay/singleSailBoard_acokoj.webp',
				title: 'Single Sailboard',
				// description:
				// 	'A single sailboard backdrop with a balloon garland. Perfect for creating a stylish and festive focal point at your event.',
				price: {
					amount: 125,
					display: 'from £125',
				},
			},
			{
				id: 'double-sailboard',
				image:
					'https://res.cloudinary.com/djjqsmlei/image/upload/v1770204772/Ansom%20Events/BalloonDisplay/doubleSailBoard_hegx7j.webp',
				title: 'Double Sailboard',
				// description:
				// 	'Two sailboard backdrops with a balloon garland. Perfect for creating a stylish and festive focal point at your event.',
				price: {
					amount: 175,
					display: 'from £175',
				},
			},
			{
				id: 'balloon-wall',
				image:
					'https://res.cloudinary.com/djjqsmlei/image/upload/v1770204788/Ansom%20Events/BalloonDisplay/balloonWall_ffeo42.webp',
				title: 'Balloon Wall',
				// description:
				// 	'A stunning balloon wall that creates a vibrant and festive atmosphere. Perfect for weddings, parties, and special occasions.',
				price: {
					amount: 220,
					display: 'from £220',
				},
			},
			{
				id: 'Table Center Piece',
				image:
					'https://res.cloudinary.com/djjqsmlei/image/upload/v1770204771/Ansom%20Events/BalloonDisplay/TableCenterPiece_ctldeu.webp',
				title: 'Table Center Piece',
				// description:
				// 	'A beautiful table center piece that adds elegance and charm to any event.',
				price: { amount: 20, display: 'from £20' },
			},
		],
	},
};
export default decorData;
