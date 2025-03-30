import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import TodayIcon from '@mui/icons-material/Today';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import VerticalShadesIcon from '@mui/icons-material/VerticalShades';
import CelebrationIcon from '@mui/icons-material/Celebration';
import SectionHeader from '../../../ReuseableComponents/SectionHeader';
import Grid from '@mui/material/Grid2';
import theme from '../../../theme';

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
			<VerticalShadesIcon
				sx={{ fontSize: 25, color: theme.palette.primaryAccent.secondary }}
			/>
		),
		title: 'Backdrop Decor',
		description:
			'Add a WOW factor to your event with stunning backdrops, perfect for stylish celebrations and Instagram-worthy moments',
	},
	{
		id: 4,
		icon: (
			<LocalFloristIcon
				sx={{ fontSize: 25, color: theme.palette.primaryAccent.secondary }}
			/>
		),
		title: 'Prop Hire and Balloon Decor',
		description:
			'Elevate your event with Marquee Lights and festive balloon decor, adding style and excitement for an unforgettable celebration.',
	},
	{
		id: 5,
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
		<Box component='section' className='Ansom_Events_Services'>
			<Grid
				container
				sx={{ backgroundColor: theme.palette.primaryBackground.main }}
				padding={4}
				spacing={3}>
				<SectionHeader
					sectionHeader='Our Services'
					sectionSubheader='We Craft Memories Of Dreams'
					color={theme.palette.primaryHeader.main}
				/>
				{/* First Row with 3 Cards */}
				<Grid container item spacing={4}>
					{serviceData.slice(0, 3).map((item) => (
						<Grid item size={{ xs: 12, lg: 4 }} key={item.id}>
							<Card
								sx={{
									height: '100%',
									padding: 1,
									borderRadius: 2,
									backgroundColor: theme.palette.primaryBackground.secondary,
								}}>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
									}}>
									{item.icon}
								</Box>
								<CardContent>
									<Typography
										variant='infoHeaderText'
										component={'h4'}
										gutterBottom>
										{item.title}
									</Typography>
									<Typography variant='infoText' component={'p'}>
										{item.description}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
				{/* Second Row with 2 Cards */}
				<Grid container item spacing={4}>
					{serviceData.slice(3).map((item) => (
						<Grid item size={{ xs: 12, sm: 6 }} key={item.id}>
							<Card
								sx={{
									height: '100%',
									padding: 1,
									borderRadius: 2,
									backgroundColor: theme.palette.primaryBackground.secondary,
								}}>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										marginBlock: 1,
									}}>
									{item.icon}
								</Box>
								<CardContent>
									<Typography
										variant='infoHeaderText'
										component={'h4'}
										gutterBottom>
										{item.title}
									</Typography>
									<Typography variant='infoText' component={'p'}>
										{item.description}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Box>
	);
}
