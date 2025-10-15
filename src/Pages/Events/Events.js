import { Box, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import PageTitle from '../../ReuseableComponents/PageTitle';
import { Helmet } from 'react-helmet-async';
import LayoutWrapper from '../../ReuseableComponents/LayoutWrapper';

export default function Events() {
	return (
		<Box component={'main'} id='Events' aria-label='Events'>
			<Helmet>
				<title>
					Upcoming Events in Cornwall & Devon | Ansom Events Schedule
				</title>
				<meta
					name='description'
					content='Check the latest schedule of upcoming weddings, corporate functions, and themed parties planned by Ansom Events across Cornwall and Devon. Book your slot today!'
				/>
				<meta
					name='keywords'
					content='upcoming events Cornwall, Devon event schedule, Ansom Events booking, local corporate events, public parties'
				/>

				<link rel='canonical' href='https://ansomevents.com/events' />

				<meta
					property='og:title'
					content='See Our Full List of Upcoming Events & Dates | Ansom Events'
				/>
				<meta
					property='og:description'
					content='Find your perfect event! View the current list of upcoming public and private events, weddings, and parties across the South West.'
				/>
				<meta
					property='og:image'
					content='https://ansomevents.com/images/events-schedule-preview.jpg'
				/>
				<meta property='og:url' content='https://ansomevents.com/events' />
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
