import { Box, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import XmasElfs from './XmasElfs';
import Grid from '@mui/material/Grid';
import PageTitle from '../../ReuseableComponents/PageTitle';
import LayoutWrapper from '../../ReuseableComponents/LayoutWrapper';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import SetUp1 from '../../Assets/Photos/XmasImages/christmasSetUp1.webp';
import SetUp2 from '../../Assets/Photos/XmasImages/christmasSetUp2.webp';
import SetUp3 from '../../Assets/Photos/XmasImages/christmasSetUp3.webp';
import SetUp4 from '../../Assets/Photos/XmasImages/christmasSetUp4.webp';
import SetUp5 from '../../Assets/Photos/XmasImages/christmasSetUp5.webp';
import SetUp6 from '../../Assets/Photos/XmasImages/christmasSetUp6.webp';

const additions = [
	{ id: 1, title: 'White Twinkle Wall behind arch or Hoop', price: '£125' },
	{
		id: 2,
		title: 'White Drapery with stand behind arch or Hoop',
		price: '£100',
	},
	{ id: 3, title: '(5) Gift Boxes to the sides of backdrops', price: '£30' },
	{ id: 4, title: 'Peacock Chair with Red Throw Pillows', price: '£50' },
	{ id: 5, title: '(2) Festive Entrance Poles', price: '£30' },
	{ id: 6, title: 'Chair Cover with Bow', price: '£3.50 each' },
	{
		id: 7,
		title: 'Table Design festive centerpiece with runner',
		price: '£25 each table',
	},
];

const items = [
	{ id: 1, title: '3m x 3m Frame Backdrop', price: '£125', img: SetUp1 },
	{
		id: 2,
		title: ' Hoop Backdrop Faux Garland',
		price: '£225',
		img: SetUp2,
	},
	{
		id: 3,
		title: 'Hoop with Greenery, Floral & Drapery',
		price: '£350',
		img: SetUp3,
	},
	{
		id: 4,
		title: '5ft x 6ft Gold Shimmer Wall',
		price: '£165',
		img: SetUp4,
	},
	{
		id: 5,
		title: '7ft Sailboard Backdrop',
		price: '£150',
		img: SetUp5,
	},
	{
		id: 6,
		title: 'Squared Arch With Garland/Baubles',
		price: '£225',
		img: SetUp6,
	},
];

export default function XmasDisplays() {
	return (
		<Box
			component='main'
			id='xmas_displays'
			aria-label='Christmas Displays At Ansom Events'>
			<Helmet>
				<title>Ansom Events - Prop & Decor Hire in Cornwall & Devon</title>
				<meta
					name='description'
					content='Rent stunning event props, backdrops, balloon garlands, and more. Perfect for weddings, parties, and corporate events.'
				/>
				<meta
					name='keywords'
					content='prop hire, decor hire, event styling, Cornwall, Devon, wedding decor'
				/>
				<meta property='og:title' content='Ansom Events - Prop & Decor Hire' />
				<meta
					property='og:description'
					content='Transform your event with our stunning props and decorations for hire.'
				/>
				<meta
					property='og:image'
					content='https://example.com/your-image.jpg'
				/>
				<meta
					property='og:url'
					content='https://ansomevents.com/prop-decor-hire'
				/>
				<link rel='canonical' href='https://ansomevents.com/prop-decor-hire' />
			</Helmet>
			<PageTitle
				pageHeader={'Christmas Displays'}
				pageSubheader={'Festive, eye-catching setups for the holiday season.'}
				smallSubheaderOnMobile
			/>
			<LayoutWrapper>
				<Typography component={'p'} variant='titleText'>
					Enhance your event with our stunning add-on décor! From elegant
					peacock chairs to stylish props, custom signs, and so much more, we
					have the perfect extras to complete your setup.
				</Typography>
				<Grid container spacing={3} sx={{ marginBlock: 4 }}>
					{items.map((item) => (
						<Grid item size={{ xs: 12, md: 6, lg: 4 }} key={item.id}>
							<Card sx={{ borderRadius: '16px', boxShadow: 3 }}>
								<CardMedia
									component='img'
									height='auto'
									image={item.img}
									alt={item.title}
									sx={{ objectFit: 'fill' }}
								/>
								<CardContent
									sx={{ textAlign: 'center', background: '#f8f5f0' }}>
									<Typography variant='h6' component='div'>
										{item.title}
									</Typography>
									<Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
										{item.price}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
				<Box>
					<Typography
						variant='h4'
						component={'h5'}
						gutterBottom
						sx={{ textAlign: 'center' }}>
						Possible Additions
					</Typography>
					<Grid container spacing={3}>
						{additions.map((item) => (
							<Grid item size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
								<Card
									sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
									<CardContent>
										<Typography variant='subtitle1' fontWeight='bold'>
											{item.title}
										</Typography>
										<Typography color='text.secondary'>{item.price}</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Box>
				<XmasElfs />
			</LayoutWrapper>
		</Box>
	);
}
