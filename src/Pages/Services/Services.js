import React from 'react';
import servicesData from '../../Data/Pages/servicesData';
import ServicesHero from './Components/ServicesHero';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import ServicesGrid from './Components/ServicesGrid';
import CallToActSection from 'Components/Sections/CallToActSection/CallToActSection';
import ctaData from '../../Data/Pages/ctaData';

export default function Services() {
	return (
		<PageWrapper id='services' aria-label='Services At Ansom Events'>
			<ServicesHero {...servicesData.hero} />
			<ServicesGrid services={servicesData.services} />
			<CallToActSection {...ctaData.services} />
		</PageWrapper>
	);
}
