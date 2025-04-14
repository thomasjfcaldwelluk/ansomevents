import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import TodayIcon from '@mui/icons-material/Today';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CelebrationIcon from '@mui/icons-material/Celebration';
import Grid from '@mui/material/Grid2';
import theme from '../../theme';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../../ReuseableComponents/PageTitle';
import LayoutWrapper from '../../ReuseableComponents/LayoutWrapper';

const serviceData = [
	{
		id: 1,
		icon: (
			<CelebrationIcon
				sx={{ fontSize: 25, color: theme.palette.primaryAccent.secondary }}
			/>
		),
		title: 'Full service Event Planning',
		description:
			'Comprehensive event planning and management, handling venue and vendor selection for a stress-free experience',
	},
	{
		id: 2,
		icon: (
			<TodayIcon
				sx={{ fontSize: 25, color: theme.palette.primaryAccent.secondary }}
			/>
		),
		title: 'Day of Coordination',
		description:
			'Relax and enjoy your event as we handle coordination, ensuring a seamless, stress-free, and memorable day',
	},
	{
		id: 3,
		icon: (
			<LocalFloristIcon
				sx={{ fontSize: 25, color: theme.palette.primaryAccent.secondary }}
			/>
		),
		title: 'Prop Hire and Balloon/Backdrop Decor',
		description:
			'Elevate your event with Marquee Lights and festive balloon decor, adding style and excitement for an unforgettable celebration.',
	},
	{
		id: 4,
		icon: (
			<DesignServicesIcon
				sx={{ fontSize: 25, color: theme.palette.primaryAccent.secondary }}
			/>
		),
		title: 'Event Design',
		description:
			'We transform venues with creative decor, bringing your dream event to life and leaving a lasting impression',
	},
];

export default function Services() {
	return (
		<Box component='main' id='service' aria-label='Services At Ansom Events'>
			<Helmet>
				<title>Ansom Events - Event Planning & Design Services</title>
				<meta
					name='description'
					content='We offer full-service event planning, on-the-day coordination, and custom event styling across Cornwall and Devon.'
				/>
				<meta
					name='keywords'
					content='event planning, wedding coordination, event design, Cornwall, Devon'
				/>
				<meta
					property='og:title'
					content='Ansom Events - Event Planning & Design Services'
				/>
				<meta
					property='og:description'
					content='Let us handle every detail of your event with our expert planning and design services.'
				/>
				<meta
					property='og:image'
					content='https://example.com/your-image.jpg'
				/>
				<meta property='og:url' content='https://ansomevents.com/services' />
				<link rel='canonical' href='https://ansomevents.com/services' />
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
									padding: 4,
									borderRadius: 2,
									backgroundColor: theme.palette.primaryBackground.secondary,
								}}>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}>
									{item.icon}
								</Box>
								<CardContent>
									<Typography
										component={'h3'}
										variant='titleText'
										textAlign={'center'}>
										{item.title}
									</Typography>
									<Typography component={'p'} variant='p' marginBlock={3}>
										{item.description}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</LayoutWrapper>
		</Box>
	);
}
