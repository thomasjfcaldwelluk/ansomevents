import { Box, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid2';
import PageTitle from '../../ReuseableComponents/PageTitle';
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
			<LayoutWrapper>
				<PageTitle
					pageHeader='Upcoming Events'
					pageSubheader='With Ansom Events'
				/>
				<Grid container padding={2} justifyContent={'center'}>
					<Grid item>
						<Box height='100vh'>
							<Typography variant='p' component={'p'}>
								Check Back To See Our Upcoming Events
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</LayoutWrapper>
		</Box>
	);
}
