import lightUpNumbers from '../../Assets/Photos/Packages/numbersAddon.webp';
import happyBirthday from '../../Assets/Photos/Packages/happybirthdayAddOn.webp';
import ohBabyBanner from '../../Assets/Photos/Packages/OhBabyBannerAddOn.webp';
import ohBabyAddon from '../../Assets/Photos/Packages/ohBabyAddon.webp';
import chairAdd from '../../Assets/Photos/Packages/peacockChairAddon.webp';
import pedestalAdd from '../../Assets/Photos/Packages/vaseAddon.webp';
import propAdd from '../../Assets/Photos/Packages/winnieThePooh.webp';
import platinum from '../../Assets/Photos/Packages/packagePlatinum.webp';
import gold from '../../Assets/Photos/Packages/packageGold.webp';
import silver from '../../Assets/Photos/Packages/packageSilver.webp';
import bronze from '../../Assets/Photos/Packages/packageBronze.webp';
import shimmerImage from '../../Assets/Photos/Packages/shimmerPackage.webp';
import fringeImage from '../../Assets/Photos/Packages/fringePackage.webp';
import hoopImage from '../../Assets/Photos/Packages/hoopImage.webp';

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

export const backdropData = [
	{
		id: 1,
		title: 'Shimmer Wall With Stand',
		image: shimmerImage,
		alt: 'Shimmer Wall backdrop Image',
		description:
			'Transform your event with our 5x6 stand and shimmer backdrop. Customize with balloon garlands for a stunning, elegant focal point, perfect for photos and special occasions.',
		included: ['5ft by 6ft Stand', 'Shimmer Backdrop', 'Balloon Garland'],
		price: [
			'Wall With Stand £100 ',
			'1 side £160 ',
			'L-Shape £190 ',
			'Full £235',
		],
	},
	{
		id: 2,
		title: 'Fringe Wall With Stand',
		image: fringeImage,
		alt: 'Fringe Wall & Stand backdrop Image',
		description:
			'Enhance your event with a 6x6 stand and fringe backdrop. Add balloon garlands for a vibrant centerpiece, perfect for photos and bringing flair to any celebration',
		included: ['5ft by 6ft Stand', 'Fringe Backdrop', 'Balloon Garland'],
		price: [
			'Wall With Stand £80 ',
			'1 side £140 ',
			'L-Shape £170 ',
			'Full £215',
		],
	},
	{
		id: 3,
		title: 'Hoop Balloon Garland',
		image: hoopImage,
		alt: 'Hoop Balloon Garland Image',
		description:
			'Create a stunning focal point with a full or half hoop balloon garland. A stylish, customizable addition, perfect for photos and enhancing any celebration or special gathering.',
		included: ['2m by 2m Hoop Stand', 'Full Hoop or Half Hoop Ballon Garland'],
		price: [' Half £175 ', 'Full £225'],
	},
];

export const addOnData = [
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
	{
		id: 7,
		title: 'Props',
		image: propAdd,
		alt: 'Image of Decor props available from Ansom Events',
		price: '75',
	},
	{
		id: 8,
		title: 'Props',
		image: propAdd,
		alt: 'Image of Decor props available from Ansom Events',
		price: '75',
	},
];
