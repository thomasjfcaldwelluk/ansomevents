import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import TodayIcon from '@mui/icons-material/Today';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CelebrationIcon from '@mui/icons-material/Celebration';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import DrawIcon from '@mui/icons-material/Draw';
import Grid from '@mui/material/Grid';
import theme from '../../theme';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../../ReuseableComponents/PageTitle';
import LayoutWrapper from '../../ReuseableComponents/LayoutWrapper';
import { Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

const serviceData = [
	{
		id: 1,
		icon: (
			<CelebrationIcon
				sx={{ fontSize: 35, color: theme.palette.primaryAccent.secondary }}
			/>
		),
		title: 'Full service Event Planning',
		description:
			'At Ansom Events, we take the stress out of planning by offering full-service event management — from sourcing the perfect venue to coordinating trusted suppliers. Whether it’s a wedding, celebration or corporate function, we handle every detail with creativity and care so you can focus on enjoying your day',
		features: [
			'Sourcing the perfect venue',
			'Coordinating trusted suppliers',
			'Creative event design',
			'On-the-day management',
		],
		link: {
			to: '/contact',
			text: 'Message Us To Discuss Your Event',
		},
	},
	{
		id: 2,
		icon: (
			<TodayIcon
				sx={{ fontSize: 35, color: theme.palette.primaryAccent.secondary }}
			/>
		),
		title: 'Day of Coordination',
		description:
			'Let us take the stress off your shoulders on the big day. We’ll handle the setup, manage suppliers, keep things on track, and make sure everything runs smoothly. You just focus on having fun and enjoying every moment — we’ve got the behind-the-scenes covered so you don’t have to.',
		features: [
			'Oversee all setup and styling on the day',
			'Liaise with and coordinate all suppliers/vendors',
			'Keep the timeline on track from start to finish',
			'Handle any unexpected issues quietly and calmly',
		],
		link: {
			to: '/contact',
			text: 'Message Us To Discuss Your Event',
		},
	},
	{
		id: 3,
		icon: (
			<DesignServicesIcon
				sx={{ fontSize: 35, color: theme.palette.primaryAccent.secondary }}
			/>
		),
		title: 'Event Design',
		description:
			'Our event design service takes your vision and turns it into reality. We transform any space with creative décor, setting the perfect tone for your event. From stylish setups to personalized touches, we ensure your event leaves a lasting impression, making it a day to remember.',
		features: [
			'Custom mood boards and style guides tailored to your event',
			'Visual planning for layout, colour schemes, props & signage',
			'Sourcing of unique décor to match your theme or brand',
			'Works seamlessly with our setup, hire, and print services',
		],
		link: {
			to: '/whatweoffer/balloondisplays',
			text: 'See Our Balloon Display Options',
		},
	},
	{
		id: 4,
		icon: (
			<LocalFloristIcon
				sx={{ fontSize: 35, color: theme.palette.primaryAccent.secondary }}
			/>
		),
		title: 'Balloon Stacks',
		description:
			'Add a pop of personality to your celebration with our custom balloon stacks. Whether it’s a birthday, baby shower, or big announcement, our eye-catching stacks are made to match your theme and bring joy to any space — no helium or fuss required!',
		features: [
			'Made-to-order designs to suit your colours or theme',
			'Perfect for doorways, gifts, or party centerpieces ',
			'Easy to transport and set up',
			'Long-lasting and totally Insta-worthy',
		],
		link: {
			to: '/whatweoffer/balloondisplays',
			text: 'See Our Balloon Display Options',
		},
	},
	{
		id: 5,
		icon: (
			<PhotoCameraFrontIcon
				sx={{ fontSize: 35, color: theme.palette.primaryAccent.secondary }}
			/>
		),
		title: 'Backdrops & Displays',
		description:
			'Our backdrops are the perfect way to set the scene. From luxe shimmer walls to boho arches, we’ve got something to suit every vibe. Use them as a photo spot, ceremony backdrop or behind your cake — they’re guaranteed to make your event pop',
		features: [
			'Range of stylish designs from modern to classic',
			'Works beautifully with balloons or signage',
			'Ideal for weddings, birthdays, and corporate events',
			'Delivery and setup available across Cornwall',
		],
		link: {
			to: '/whatweoffer/backdrops',
			text: 'See Our Backdrop Options',
		},
	},
	{
		id: 6,
		icon: (
			<FollowTheSignsIcon
				sx={{ fontSize: 35, color: theme.palette.primaryAccent.secondary }}
			/>
		),
		title: 'Prop Hire',
		description:
			'Bring your event to life with our handpicked collection of props. From vintage suitcases to stylish plinths and neon signs, our inventory adds that extra flair without the hassle of buying it all yourself. We offer a range of unique items to suit any theme, and our team can help you style them perfectly for your event.',
		features: [
			'Mix-and-match items to suit your style',
			'Affordable hire with flexible collection options',
			'Great for DIY setups or planner-led events',
			'Add character and charm to your venue',
		],
		link: {
			to: '/whatweoffer/prophire',
			text: 'See What Is Available For Hire',
		},
	},
	{
		id: 7,
		icon: (
			<LocalMallIcon
				sx={{ fontSize: 35, color: theme.palette.primaryAccent.secondary }}
			/>
		),
		title: '"Ansom & Easy" Pick-Up Party Pack',
		description:
			'Planning something small but special? Our “Ansom & Easy” packs make party planning a total breeze. Just tell us your theme, and we’ll put together a gorgeous collection of pre-prepped decorations, ready for you to collect and style yourself. Perfect for those who want a beautiful, affordable setup without the fuss of full planning.',
		features: [
			'Ideal for small gatherings, birthdays & kids’ parties',
			'Includes balloons, backdrops & simple props',
			'Customized to suit your colours or theme',
			'Budget-friendly and totally stress-free',
		],
		link: {
			to: '/whatweoffer/prophire',
			text: 'Order Your Party Pack',
		},
	},
	{
		id: 8,
		icon: (
			<DrawIcon
				sx={{ fontSize: 35, color: theme.palette.primaryAccent.secondary }}
			/>
		),
		title: 'Design & Print Services',
		description:
			'From invites to menus and welcome signs, we design and print stylish paper goods that tie your event together beautifully. Whether you want classic elegance or something a bit playful, we’ve got the design skills to match your vibe. Our team can create custom designs that reflect your personality and theme, ensuring every detail is perfect.',
		features: [
			'Custom stationery to match your décor & theme',
			'Options for print or digital download',
			'Perfect for weddings, baby showers, and more',
			'Designed in-house to keep everything cohesive',
		],
		link: {
			to: '/whatweoffer/prophire',
			text: 'See our Design & Print Examples',
		},
	},
	{
		id: 9,
		icon: (
			<AutoAwesomeIcon
				sx={{ fontSize: 35, color: theme.palette.primaryAccent.secondary }}
			/>
		),
		title: 'Full Setup & Styling Package',
		description:
			'Let us transform your space with our complete styling package. Ideal for weddings, corporate events, and big celebrations, this package includes everything from linens to centerpieces — plus setup and pack-down, so you don’t lift a finger.',
		features: [
			'Includes linens, chair covers, centerpieces & props',
			'Tailored design to suit your vision & venue',
			'Full setup, styling and breakdown handled by us',
			'Stress-free service with everything taken care of',
		],
		link: {
			to: '/whatweoffer/prophire',
			text: 'Click Here To See Packages',
		},
	},
];

export default function Services() {
	return (
		<Box component='main' id='service' aria-label='Services At Ansom Events'>
			<Helmet>
				<title>
					Full Event Planning, Styling & Prop Hire Services | Ansom Events
				</title>
				<meta
					name='description'
					content='Ansom Events offers full-service event planning, custom styling & design, on-the-day coordination, and luxury prop hire across Cornwall and Devon.'
				/>
				<meta
					name='keywords'
					content='event planning services, wedding coordination, event styling, luxury prop hire Cornwall, on-the-day coordination Devon'
				/>
				<link rel='canonical' href='https://ansomevents.com/services' />
				<meta
					property='og:title'
					content='Ansom Events: Full Event Planning, Design & Coordination Services'
				/>
				<meta
					property='og:description'
					content='Explore our full suite of event services, from comprehensive wedding planning and design to on-the-day management and prop hire.'
				/>
				<meta
					property='og:image'
					content='https://ansomevents.com/images/services-hero-image.jpg'
				/>
				<meta property='og:url' content='https://ansomevents.com/services' />
			</Helmet>
			<PageTitle
				pageHeader={'Services At Ansom Events'}
				pageSubheader={'How We Can Help You'}
				smallHeaderOnMobile
			/>
			<LayoutWrapper>
				<Grid container spacing={4}>
					{serviceData.map((item) => (
						<Grid item size={{ xs: 12, md: 6 }} key={item.id}>
							<Card
								sx={{
									height: '100%',
									padding: 2,
									borderRadius: 2,
									backgroundColor: theme.palette.primaryBackground.secondary,
								}}>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										marginBlock: 1,
									}}>
									{item.icon}
								</Box>
								<CardContent>
									<Typography
										component={'h3'}
										variant='h4'
										textAlign={'center'}>
										{item.title}
									</Typography>
									<Typography component={'p'} variant='p' marginBlock={1}>
										{item.description}
									</Typography>
									{item.features && (
										<Box component='ul' sx={{ pl: 2, mb: 0 }}>
											{item.features.map((feature, idx) => (
												<Typography
													component='li'
													variant='body2'
													key={idx}
													marginBlock={0.5}>
													{feature}
												</Typography>
											))}
										</Box>
									)}
									{item.link && (
										<Box sx={{ mt: 3, textAlign: 'center' }}>
											<MuiLink
												component={Link}
												to={item.link.to}
												underline='hover'
												color={theme.palette.primaryHeader.main}
												fontSize={13}>
												{item.link.text}
											</MuiLink>
										</Box>
									)}
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</LayoutWrapper>
		</Box>
	);
}
