import React from 'react';
import servicesData from '../../Data/Pages/servicesData';
import ServicesHero from './Components/ServicesHero';
import ServicesCta from './Components/ServicesCta';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import ServicesGrid from './Components/ServicesGrid';

export default function Services() {
	return (
		<PageWrapper id='services' aria-label='Services At Ansom Events'>
			<ServicesHero {...servicesData.hero} />
			<ServicesGrid services={servicesData.services} />
			<ServicesCta {...servicesData.cta} />
		</PageWrapper>
	);
}
