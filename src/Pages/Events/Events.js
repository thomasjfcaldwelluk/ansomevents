import { Box, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid2';
import PageTitle from '../../ReuseableComponents/PageTitle';
import easterParty from './EventsAssets/easterParty.png';
import { Helmet } from 'react-helmet-async';
import LayoutWrapper from '../../ReuseableComponents/LayoutWrapper';
import theme from '../../theme';

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
				<Grid container padding={2} justifyContent={'center'}>
					<Grid size={{ xs: 12, md: 8 }}>
						<Box
							padding={5}
							sx={{
								backgroundColor: theme.palette.primaryBackground.secondary,
							}}>
							<Typography
								component={'h3'}
								variant='titleText'
								fontSize={28}
								sx={{ textAlign: 'center' }}>
								Easter Fun at Saltash Football Club!
							</Typography>
							<Typography
								component={'h4'}
								variant='smallerP'
								marginBlock={1}
								sx={{ fontWeight: 450, fontSize: 14, textAlign: 'center' }}>
								Join us for a fantastic Easter event on April 16th, 2025
							</Typography>
							<Typography
								component={'h5'}
								variant='titleText'
								sx={{ textAlign: 'center' }}>
								11 AM - 12:30 PM at Saltash Football Club!
							</Typography>
							<Box marginBlock={5}>
								<Typography
									component={'h5'}
									variant='titleText'
									sx={{ textAlign: 'center' }}>
									{' '}
									What’s Included?
								</Typography>
								<Box>
									<Typography
										component={'p'}
										variant='smallerP'
										sx={{ textAlign: 'center', fontWeight: 550, p: 1 }}>
										Meet & Greet with the Easter Bunny – A perfect photo
										opportunity!
									</Typography>
									<Typography
										component={'p'}
										variant='smallerP'
										sx={{ textAlign: 'center', fontWeight: 550, p: 1 }}>
										🎶Bunny Hop Dance Party – Get ready to groove!
									</Typography>
									<Typography
										component={'p'}
										variant='smallerP'
										sx={{ textAlign: 'center', fontWeight: 550, p: 1 }}>
										Easter Cookie Painting – Unleash creativity with festive
										treats.
									</Typography>
									<Typography
										component={'p'}
										variant='smallerP'
										sx={{ textAlign: 'center', fontWeight: 550, p: 1 }}>
										A Special Treat from the Easter Bunny – A little surprise
										for every child!
									</Typography>
								</Box>
							</Box>

							<Box sx={{ textAlign: 'center', marginBlock: 2 }}>
								<Typography component={'h5'} variant='titleText'>
									Tickets & Booking
								</Typography>
								<Typography component={'h5'} variant='titleText'>
									Price: £7.50 per child ( Adults go FREE!)
								</Typography>
								<Typography component={'h5'} variant='titleText'>
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
