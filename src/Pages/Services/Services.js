import React from 'react';
import { Box, Typography } from '@mui/material';
import servicesData from '../../Data/Pages/servicesData';
import ServicesHero from './Components/ServicesHero';
import ServicesList from './Components/ServicesList';
import ServicesCta from './Components/ServicesCta';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';

export default function Services() {
	return (
		<Box component='main' id='service' aria-label='Services At Ansom Events'>
			<PageWrapper>
				<Typography variant='h1' component='h2' align='center' gutterBottom>
					Services
				</Typography>
				<ServicesHero {...servicesData.hero} />
				<ServicesList services={servicesData.services} />
				<ServicesCta {...servicesData.cta} />
			</PageWrapper>
		</Box>
	);
}
