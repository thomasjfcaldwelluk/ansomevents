import React from 'react';
import Hero from './Components/Hero';
import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import PackagesPreview from './Components/PackagesPreview';
import PropHirePreview from './Components/PropHirePreview';
import GalleryPreview from './Components/GalleryPreview';
import Contact from '../Contact/Contact';
import Services from './../Services/Services';

export default function Home() {
	return (
		<Box component={'main'}>
			<Helmet>
				<title>
					Ansom Events | Premier Wedding & Corporate Planners in Cornwall &
					Devon
				</title>
				<meta
					name='description'
					content='Ansom Events is the premier full-service event planning, styling, and hire company for weddings and corporate functions across Cornwall and Devon. Stress-free coordination.'
				/>
				<meta
					name='keywords'
					content='wedding planning Cornwall, corporate event planning Devon, full-service event design, luxury prop hire, Ansom Events'
				/>
				<link rel='canonical' href='https://ansomevents.com/' />
				<meta
					property='og:title'
					content='Ansom Events: Full-Service Event Planning & Styling for the South West'
				/>
				<meta
					property='og:description'
					content='Specialists in event design, wedding planning, and corporate coordination throughout Cornwall and Devon.'
				/>
				<meta
					property='og:image'
					content='https://ansomevents.com/images/homepage-brand-hero.jpg'
				/>
				<meta property='og:url' content='https://ansomevents.com' />
			</Helmet>
			<Box id='hero' component='section' aria-label='Hero'>
				<Hero />
			</Box>
			<Box
				sx={{ flexGrow: 1, padding: 2, marginBlock: 5 }}
				id='whatweoffer-preview'
				component='section'
				aria-label='What We Offer Preview'>
				<Grid container spacing={2}>
					<Grid item size={{ xs: 12, md: 6 }}>
						<PackagesPreview />
					</Grid>
					<Grid item size={{ xs: 12, md: 6 }}>
						<PropHirePreview />
					</Grid>
				</Grid>
			</Box>
			<Box id='services' component='section' aria-label='services'>
				<Services />
			</Box>
			<Box
				id='gallery-preview'
				component='section'
				aria-label='Gallery Preview'
				sx={{ flexGrow: 1, padding: 2 }}>
				<GalleryPreview />
			</Box>
			<Box id='contact' component={'section'} aria-label='contact-us'>
				<Contact />
			</Box>
		</Box>
	);
}
