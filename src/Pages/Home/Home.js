import React from 'react';
import Hero from './Components/Hero';
import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PackagesPreview from './Components/PackagesPreview';
import PropHirePreview from './Components/PropHirePreview';
import GalleryPreview from './Components/GalleryPreview';
import theme from '../../theme';

export default function Home() {
	return (
		<Box component={'main'}>
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
				<link rel='canonical' href='https://ansomevents.com' />
			</Helmet>
			<Hero />
			<Box sx={{ flexGrow: 1 }}>
				<Grid
					container
					sx={{ backgroundColor: theme.palette.primaryBackground.main }}>
					<Grid item size={6}>
						<Box>
							<PackagesPreview />
						</Box>
					</Grid>
					<Grid item size={{ xs: 12, md: 6 }}>
						<Box>
							<PropHirePreview />
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Box>
				<GalleryPreview />
			</Box>
		</Box>
	);
}
