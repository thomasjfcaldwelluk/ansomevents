import React from 'react';
import Hero from './Components/Hero';
import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import PackagesPreview from './Components/PackagesPreview';
import PropHirePreview from './Components/PropHirePreview';
import GalleryPreview from './Components/GalleryPreview';
import ContactForm from '../Contact/ContactForm';
import Services from './../Services/Services';

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
			<Box id='hero' component='section' aria-label='Hero'>
				<Hero />
			</Box>
			<Box
				sx={{ flexGrow: 1, padding: 2 }}
				id='whatweoffer-preview'
				component='section'
				aria-label='What We Offer Preview'>
				<Grid
					container
					spacing={2}
					sx={{
						height: '100vh',
					}}>
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
				aria-label='Gallery Preview'>
				<GalleryPreview />
			</Box>
			<Box id='contact' component={'section'} aria-label='contact-us'>
				<Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
					<Grid item size={{ xs: 12, md: 6 }}>
						<ContactForm />
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}
