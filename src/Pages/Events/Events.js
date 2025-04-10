import { Box, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid2';
import PageTitle from '../../ReuseableComponents/PageTitle';
import easterParty from './EventsAssets/easterParty.png';
import { Helmet } from 'react-helmet-async';
import LayoutWrapper from '../../ReuseableComponents/LayoutWrapper';

export default function Events() {
	return (
		<Box component={'main'} id='Events' aria-label='Events'>
			<Helmet>
				<title>Ansom Events - Weddings, Parties & Corporate Events</title>
				<meta
					name='description'
					content='From intimate weddings to grand corporate events, we bring your vision to life with expert planning and stunning decor.'
				/>
				<meta
					name='keywords'
					content='weddings, parties, corporate events, event coordination, Cornwall, Devon'
				/>
				<meta
					property='og:title'
					content='Ansom Events - Weddings, Parties & Corporate Events'
				/>
				<meta
					property='og:description'
					content='We create unforgettable weddings, parties, and events with expert styling and coordination.'
				/>
				<meta
					property='og:image'
					content='https://example.com/your-image.jpg'
				/>
				<meta property='og:url' content='https://ansomevents.com/events' />
				<link rel='canonical' href='https://ansomevents.com/events' />
			</Helmet>
			<PageTitle
				pageHeader='Upcoming Events'
				pageSubheader='With Ansom Events'
			/>
			<LayoutWrapper>
				<Grid container padding={6} justifyContent={'center'}>
					<Grid size={{ xs: 12, md: 8 }}>
						<Box paddingBlock={5}>
							<Typography component={'h3'}>
								Easter Fun at Saltash Football Club! 🐰🎉
							</Typography>
							<Typography component={'h5'}>
								Join us for a fantastic Easter event on April 16th, 2025, from
								11 AM - 12:30 PM at Saltash Football Club!
							</Typography>

							<Box>
								<Typography> What’s Included?</Typography>
								<Box>
									<Typography>
										Meet & Greet with the Easter Bunny – A perfect photo
										opportunity!
									</Typography>
								</Box>
								<Box>
									<Typography>
										🎶Bunny Hop Dance Party – Get ready to groove!
									</Typography>
								</Box>
								<Box>
									<Typography>
										Easter Cookie Painting – Unleash creativity with festive
										treats.
									</Typography>
								</Box>
								<Box>
									<Typography>
										A Special Treat from the Easter Bunny – A little surprise
										for every child!
									</Typography>
								</Box>
							</Box>

							<Box>
								<Typography>Tickets & Booking</Typography>
								<Typography>
									Price: £7.50 per child ( Adults go FREE!)
								</Typography>
								<Typography>
									Pre-sale tickets only – No tickets available at the door.
								</Typography>
							</Box>
						</Box>
					</Grid>
					<Grid item size={{ xs: 12, md: 4 }}>
						<Box component={'img'} src={easterParty} sx={{ width: '100%' }} />
					</Grid>
				</Grid>
			</LayoutWrapper>
		</Box>
	);
}
