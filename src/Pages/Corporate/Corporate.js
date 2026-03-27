import React from 'react';
import corporateData from '../../Data/Pages/corporateData';
import ctaData from '../../Data/Pages/ctaData';
import CorporateHero from './Components/CorporateHero';
import CorporateServices from './Components/CorporateServices';
import CorporateSupport from './Components/CorporateSupport';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import CallToActSection from 'Components/Sections/CallToActSection/CallToActSection';

export default function Corporate() {
	return (
		<PageWrapper id='ansom_events_corporate' aria-label='Main Corporate'>
			<CorporateHero {...corporateData.hero} />
			<CorporateServices {...corporateData.services} />
			<CorporateSupport {...corporateData.support} />
			<CallToActSection variant='dark' {...ctaData.corporate} />
		</PageWrapper>
	);
}
