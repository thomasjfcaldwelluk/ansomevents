import React from 'react';
import WeddingAddOns from './Components/WeddingAddOns';
import WeddingPackages from './Components/WeddingPackages';
import HelpWith from './Components/HelpWith';
import WeddingHero from './Components/WeddingHero';
import weddingData from '../../Data/Pages/weddingData';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import CallToActSection from 'Components/Sections/CallToActSection/CallToActSection';
import ctaData from 'Data/Pages/ctaData';
import SEO from 'Components/SEO';

export default function Weddings() {
	return (
		<PageWrapper id='weddings' aria-label='Weddings with Ansom Events'>
			<SEO
				title='Wedding Planning Services in Plymouth | Ansom Events'
				description='Make your dream wedding a reality with Ansom Events. We offer expert wedding planning services in Devon and Cornwall, ensuring your special day is unforgettable.'
				url='https://www.ansomevents.com/love-celebrations'
				image='public/ansom-events-og-image.jpg'
				canonical='https://www.ansomevents.com/love-celebrations'
			/>
			<WeddingHero {...weddingData.hero} />
			<HelpWith {...weddingData.helpWith} />
			<WeddingPackages {...weddingData.packages} />
			<WeddingAddOns {...weddingData.addOns} />
			<CallToActSection {...ctaData.wedding} />
		</PageWrapper>
	);
}
