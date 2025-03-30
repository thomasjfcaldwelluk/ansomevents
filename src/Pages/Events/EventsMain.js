import { Box, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid2';
import PageTitle from '../../ReuseableComponents/PageTitle';
import theme from '../../theme';
import easterParty from './EventsAssets/easterParty.png';
import { Helmet } from 'react-helmet-async';

export default function EventsMain() {
	return (
		<Box
			component={'main'}
			sx={{
				backgroundColor: theme.palette.primaryBackground.main,
				padding: 2,
			}}>
			<Helmet>
				<title>Easter Event 2025 | Family Fun in Saltash | Ansom Events</title>
				<meta
					name='description'
					content='Join us for a fantastic Easter event at Saltash Football Club! Meet the Easter Bunny, enjoy fun activities, and create magical memories. Book now!'
				/>
				<meta
					name='keywords'
					content='Easter event Cornwall, Easter activities Saltash, family events, Easter Bunny meet and greet, kids Easter fun, cookie painting, Easter party'
				/>
				<meta
					property='og:title'
					content='Easter Event 2025 | Fun for the Whole Family!'
				/>
				<meta
					property='og:description'
					content='Hop into Easter with an exciting family-friendly event! Meet the Easter Bunny, join the Bunny Hop Dance Party, and enjoy festive fun. Limited tickets available!'
				/>
				<meta
					property='og:image'
					content='https://ansomevents.com/images/easter-event-2025.jpg'
				/>
				<meta
					property='og:url'
					content='https://ansomevents.com/latest-events/easter-2025'
				/>
				<link
					rel='canonical'
					href='https://ansomevents.com/latest-events/easter-2025'
				/>
			</Helmet>
			<PageTitle
				pageHeader='Upcoming Events'
				pageSubheader='With Ansom Events'
			/>
			<Grid container padding={6} justifyContent={'center'}>
				<Grid size={{ xs: 12, md: 8 }}>
					<Box paddingBlock={5}>
						<Typography variant='h3' component={'h3'} gutterBottom>
							Easter Fun at Saltash Football Club! 🐰🎉
						</Typography>
						<Typography variant='h5' component={'h5'} gutterBottom>
							Join us for a fantastic Easter event on{' '}
							<strong>April 16th, 2025, from 11 AM - 12:30 PM</strong> at
							Saltash Football Club!
						</Typography>

						<Box sx={{ textAlign: 'left', my: 3 }}>
							<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
								🎟 What’s Included?
							</Typography>
							<Box>
								<Typography variant='p'>
									🐰 <strong>Meet & Greet with the Easter Bunny</strong> – A
									perfect photo opportunity!
								</Typography>
							</Box>
							<Box>
								<Typography variant='p'>
									🎶 <strong>Bunny Hop Dance Party</strong> – Get ready to
									groove!
								</Typography>
							</Box>
							<Box>
								<Typography variant='p'>
									🎨 <strong>Easter Cookie Painting</strong> – Unleash
									creativity with festive treats.
								</Typography>
							</Box>
							<Box>
								<Typography variant='p'>
									🎁 <strong>A Special Treat from the Easter Bunny</strong> – A
									little surprise for every child!
								</Typography>
							</Box>
						</Box>

						<Box sx={{ textAlign: 'left', my: 3 }}>
							<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
								🎟 Tickets & Booking
							</Typography>
							<Typography variant='p'>
								<strong>Price:</strong> £7.50 per child (
								<strong>Adults go FREE!</strong>)
							</Typography>
							<Typography variant='p' color='error'>
								<strong>
									Pre-sale tickets only – No tickets available at the door.
								</strong>
							</Typography>
						</Box>
					</Box>
				</Grid>
				<Grid item size={{ xs: 12, md: 4 }}>
					<Box component={'img'} src={easterParty} sx={{ width: '100%' }} />
				</Grid>
			</Grid>
		</Box>
	);
}
