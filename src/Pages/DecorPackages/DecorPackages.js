import React from 'react';
import { Box, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Packages from './Components/Packages';
import PageTitle from '../../ReuseableComponents/PageTitle';
import Backdrops from './Components/Backdrops';
import AddOn from './Components/AddOn';

import { Helmet } from 'react-helmet-async';

export default function DecorPackages() {
	const theme = useTheme();
	return (
		<Box component='main' className='Ansom_Events_Decor_Packages'>
			<Helmet>
				<title>
					Event Packages | Decor, Linen & Balloon Styling | Ansom Events
				</title>
				<meta
					name='description'
					content='Explore our event packages for weddings, corporate events, and private parties. Includes decor hire, linen, balloon styling, and bespoke designs in Cornwall & Devon.'
				/>
				<meta
					name='keywords'
					content='event packages Cornwall, corporate event decor, wedding styling, prop hire, balloon decorations, linen hire, party planning, bespoke event decor'
				/>
				<meta
					property='og:title'
					content='Event Packages | Weddings, Corporate & Private Events'
				/>
				<meta
					property='og:description'
					content='From weddings to corporate events, our tailored packages include decor hire, linen, and balloon styling. Stunning designs for all occasions. Book now!'
				/>
				<meta
					property='og:image'
					content='https://ansomevents.com/images/event-packages.jpg'
				/>
				<meta property='og:url' content='https://ansomevents.com/packages' />
				<link rel='canonical' href='https://ansomevents.com/packages' />
			</Helmet>
			<Grid
				component={'section'}
				container
				spacing={4}
				sx={{
					backgroundColor: theme.palette.primaryBackground.main,
					padding: 3,
				}}>
				<PageTitle
					pageHeader='Decor Packages For Hire At Ansom Events'
					pageSubheader='Impress Your Guests'
				/>
				<Packages />
				<Backdrops />
				<AddOn />
			</Grid>
		</Box>
	);
}
