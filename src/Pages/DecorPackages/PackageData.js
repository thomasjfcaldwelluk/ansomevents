import lightUpNumbers from '../../Assets/Photos/Packages/numbersAddon.jpg';
import happyBirthday from '../../Assets/Photos/Packages/happybirthdayAddOn.jpg';
import ohBabyBanner from '../../Assets/Photos/Packages/OhBabyBannerAddOn.jpg';
import ohBabyAddon from '../../Assets/Photos/Packages/ohBabyAddon.jpg';
import chairAdd from '../../Assets/Photos/Packages/chairAddOn.jpg';
import pedestalAdd from '../../Assets/Photos/Packages/pedestalStandAddOn.jpg';
import platinum from '../../Assets/Photos/Packages/packagePlatinum.webp';
import gold from '../../Assets/Photos/Packages/packageGold.webp';
import silver from '../../Assets/Photos/Packages/packageSilver.webp';
import bronze from '../../Assets/Photos/Packages/packageBronze.webp';

export const fullPackageData = [
	{
		id: 1,
		title: 'Platinum Package',
		image: platinum,
		alt: 'Platinum Package Available From Ansom Events',
		description:
			'Our most luxurious package, designed to create an unforgettable experience with stunning décor and elegant details that elevate your event to the highest level.',
		included: [
			'Backdrop Twinkle Wall With Balloon Garland',
			'Circle Arch or Sail Board With Balloon Garland',
			'Pedestal with Vase & Arrangement',
			'Selection of up to 3 Balloon Non-Chrome Colours',
			'Peacock Chair',
			'Baby Box',
			'"Oh Baby" Wooden Sign',
		],
		price: 350,
	},
	{
		id: 2,
		title: 'Gold Package',
		image: gold,
		alt: 'Gold Package Available From Ansom Events',
		description:
			'A perfect balance of style and sophistication, this package brings a touch of elegance to any event, ensuring a beautifully designed and memorable setting',
		included: [
			'Choice of Backdrop either Twinkle Wall, Circle Arch or Sail Board with Balloon Garland',
			'Pedestal with Vase & Arrangement',
			'"Oh Baby" Wooden Sign',
			'Selection of up to 3 Balloon Non-Chrome Colours',
			'Peacock Chair',
			'Baby Box',
			'"Oh Baby" Wooden Sign',
		],
		price: 250,
	},
	{
		id: 3,
		title: 'Sliver Package',
		image: silver,
		alt: 'Sliver Available From Ansom Events',
		description:
			'A stylish and affordable option, offering a beautifully coordinated look that enhances your event with carefully curated décor and a welcoming atmosphere',
		included: [
			'Choice of Backdrop either Twinkle Wall, Circle Arch or Sail Board with Balloon Garland',
			'Baby Box with balloons or Pedestal with Vase & Arrangement',
			'Selection of up to 3 Balloon Non-Chrome Colours',
			'"Oh Baby" Wooden Sign',
		],
		price: 175,
	},
	{
		id: 4,
		title: 'Bronze Package',
		image: bronze,
		alt: 'Bronze Package Available From Ansom Events',
		description:
			'A simple yet effective décor package that adds charm and elegance to your event while keeping things beautifully minimal and thoughtfully styled.',
		included: [
			'Wicker Divider with Balloon Cluster',
			'Peacock Chair',
			'Pedestal with Vase & Arrangement',
			'Baby Box with Balloons',
			'"Oh Baby" Bunting',
		],
		price: 125,
	},
];

export const addOnImages = [
	{
		id: 1,
		title: '4ft Light Up Letters',
		image: lightUpNumbers,
		alt: 'Image of light up letters & Numbers available from Ansom Events',
		price: '25',
	},
	{
		id: 2,
		title: 'Happy Birthday Sign',
		image: happyBirthday,
		alt: 'Image of Happy Birthday Sign available from Ansom Events',
		price: '5',
	},
	{
		id: 3,
		title: 'Baby Shower Banner',
		image: ohBabyBanner,
		alt: 'Image of Baby Shower Banner available from Ansom Events',
		price: '5',
	},
	{
		id: 4,
		title: 'Baby Shower Sign',
		image: ohBabyAddon,
		alt: 'Image of Baby Shower Sign available from Ansom Events',
		price: '5',
	},
	{
		id: 5,
		title: 'Peacock Chair',
		image: chairAdd,
		alt: 'Image of Peacock Chair available from Ansom Events',
		price: '50',
	},
	{
		id: 6,
		title: 'Decor Pedestal',
		image: pedestalAdd,
		alt: 'Image of Decor Pedestal available from Ansom Events',
		price: '75',
	},
];
