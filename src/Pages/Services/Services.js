import React from 'react';
import servicesData from '../../Data/Pages/servicesData';
import ServicesHero from './Components/ServicesHero';
import ServicesList from './Components/ServicesList';
import ServicesCta from './Components/ServicesCta';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';

export default function Services() {
	return (
		<PageWrapper id='services' aria-label='Services At Ansom Events'>
			<ServicesHero {...servicesData.hero} />
			<ServicesList services={servicesData.services} />
			<ServicesCta {...servicesData.cta} />
		</PageWrapper>
	);
}
