import React from 'react';
import servicesData from '../../Data/Pages/servicesData';
import ServicesHero from './Components/ServicesHero';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import ServicesGrid from './Components/ServicesGrid';
import CallToActSection from 'Components/Sections/CallToActSection/CallToActSection';
import ctaData from '../../Data/Pages/ctaData';
import SEO from 'Components/SEO';

export default function Services() {
	return (
		<PageWrapper id='services' aria-label='Services At Ansom Events'>
			<SEO
				title='Services We Offer — Ansom Events'
				description='We create amazing events & décor in Cornwall & Devon.'
				url='https://www.ansomevents.com'
				image='https://www.ansomevents.com/og-image.jpg'
				canonical='https://www.ansomevents.com/services'
			/>
			<ServicesHero {...servicesData.hero} />
			<ServicesGrid services={servicesData.services} />
			<CallToActSection {...ctaData.services} />
		</PageWrapper>
	);
}
