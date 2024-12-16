import React from 'react';
import { useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Packages from './Components/Packages';
import PageTitle from '../../ReuseableComponents/PageTitle';
import SmallPackages from './Components/SmallPackages';
import AddOn from './Components/AddOn';
import { Helmet } from 'react-helmet-async';

export default function DecorPackages() {
	const theme = useTheme();
	return (
		<Grid
			container
			spacing={4}
			sx={{
				backgroundColor: theme.palette.primaryBlue.main,
				padding: 3,
			}}>
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
			<PageTitle
				pageHeader='Decor Packages For Hire At Ansom Events'
				pageSubheader='Impress Your Guests'
			/>
			<Packages />
			<SmallPackages />
			<AddOn />
		</Grid>
	);
}
