import React from 'react';
import { Box } from '@mui/material';
import ChristmasCard from './ChristmasCard.js';
import ChristmasBanners from './ChristmasBanners.js';
import { LatestSpecialsContainer } from './LatestSpecialsStyles.js';
import PageTitle from '../../ReuseableComponents/PageTitle.js';
import Grid from '@mui/material/Grid2';
import { Helmet } from 'react-helmet-async';
import Valentines from './Valentines.js';

const LatestSpecials = () => {
	return (
		<LatestSpecialsContainer
			component='main'
			className='Ansom_Events_Latest_Specials'>
			<Helmet>
				<title>Ansom Events - Full-Service Event Planning</title>
				<meta
					name='description'
					content='Ansom Events offers full-service event planning, prop hire, and event design in Cornwall and Devon.'
				/>
				<meta
					name='keywords'
					content='event planning, prop hire, Cornwall, Devon, weddings, coordination'
				/>
				<meta
					property='og:title'
					content='Ansom Events - Full-Service Event Planning'
				/>
				<meta
					property='og:description'
					content='We specialize in event coordination and design across Cornwall and Devon.'
				/>
				<meta
					property='og:image'
					content='https://example.com/your-image.jpg'
				/>
				<meta property='og:url' content='https://ansomevents.com' />
				<link rel='canonical' href='https://ansomevents.com/decorpackages' />
			</Helmet>
			<Grid
				component={'section'}
				container
				spacing={4}
				sx={{
					padding: 3,
				}}>
				<PageTitle
					pageHeader='Latest Specials At Ansom Events'
					pageSubheader='Seasonal Decor Deals'
				/>
				{/* <ChristmasCard />
				<ChristmasBanners /> */}
				<Valentines />
			</Grid>
		</LatestSpecialsContainer>
	);
};

export default LatestSpecials;
