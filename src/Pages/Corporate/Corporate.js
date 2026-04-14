import React from 'react';
import corporateData from '../../Data/Pages/corporateData';
import ctaData from '../../Data/Pages/ctaData';
import CorporateHero from './Components/CorporateHero';
import CorporateServices from './Components/CorporateServices';
import CorporateSupport from './Components/CorporateSupport';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import CallToActSection from 'Components/Sections/CallToActSection/CallToActSection';
import SEO from 'Components/SEO';

export default function Corporate() {
	return (
		<PageWrapper id='ansom_events_corporate' aria-label='Main Corporate'>
			<SEO
				title='Corporate Events — Ansom Events'
				description='We create amazing corporate events & décor in Cornwall & Devon.'
				url='https://www.ansomevents.com'
				image='https://www.ansomevents.com/og-image.jpg'
				canonical='https://www.ansomevents.com/corporate'
			/>

			<CorporateHero {...corporateData.hero} />
			<CorporateServices {...corporateData.services} />
			<CorporateSupport {...corporateData.support} />
			<CallToActSection variant='dark' {...ctaData.corporate} />
		</PageWrapper>
	);
}
